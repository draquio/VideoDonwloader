export const downloadvideo = async (url: string, title: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${title}.mp4`;
    link.click();
    URL.revokeObjectURL(blobUrl);
    return true;
  } catch (error) {
    console.error("Error al descargar el video:", error);
  }
};

export const GetYoutubeID = (url: string) => {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/(\w+)/, // Formato corto
    /youtube\.com\/.*[?&]v=([^#&?]+)/, // Formato largo
    /\/shorts\/([A-Za-z0-9_-]+)/, // Formato de shorts
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

export const VerifyYoutubeLink = (url: string): boolean => {
  if (!url) return false
  const youtubeExpression = new RegExp(
    '^(https?:\\/\\/)?' +
    '(www\\.)?' +
    '(youtu\\.be\\/|youtube\\.com\\/' + 
    '(shorts\\/)?' + 
    '(embed\\/|v\\/|watch\\?v=|watch\\?.+&v=)?' +
    ')([\\w-]{11})' 
  );
  return youtubeExpression.test(url);
};

export const VerifyLinkTiktok = (url: string): boolean => {
  if(!url) return false;
  const Expression = /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/)?video\/(\d+)|(vm\.tiktok\.com\/[\w-]+)/;
  return Expression.test(url);
};

export const VerifyLinkInstagramReel = (url:string): boolean =>{
  const videoRegex = /^https:\/\/(www\.)?instagram\.com\/(reel|tv|p)\/[A-Za-z0-9-_]+\/?$/;
  return videoRegex.test(url);
}
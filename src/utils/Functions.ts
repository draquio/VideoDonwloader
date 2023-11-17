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
  const shortExpression = /youtu\.be\/(\w+)/;
  const longExpression = /youtube\.com\/.*[?&]v=([^#&?]+)/;

  const shortid = url.match(shortExpression);
  const longid = url.match(longExpression);
  if (shortid && shortid[1]) {
    return shortid[1];
  } else if (longid && longid[1]) {
    return longid[1];
  } else {
    return null;
  }
};

export const VerifyYoutubeLink = (url: string) => {
  const shortExpression = /youtu\.be\/(\w+)/;
  const longExpression = /youtube\.com\/.*[?&]v=([^#&?]+)/;
  return shortExpression.test(url) || longExpression.test(url);
};

export const VerifyLinkTiktok = (url: string) => {
  const Expression =
    /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/(?:\w+\/)?(@\w+\/)?video\/(\d+)/;
  return Expression.test(url);
};

export const MapYoutube = (video:any) => {
  type VideoObject = {
    mimeType: string;
  }
  const youtubevideo = {
    id: video.id,
    thumb: video.thumbnail[2].url,
    video: video.adaptiveFormats.filter((objeto:VideoObject) => objeto.mimeType.includes("video/mp4")),
    title: video.title,
  };
  return youtubevideo
};

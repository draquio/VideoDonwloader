import { YoutubeI, AdaptiveFormat } from "../interfaces/Interfaces";

type video = {
  id: string;
  thumbnail: [];
  adaptiveFormats: [];
  title: string;
};
export const MapYoutube = (video: video) => {
  const youtubevideo: YoutubeI = {
    id: video.id,
    thumb: video.thumbnail,
    video: video.adaptiveFormats.filter((objeto: AdaptiveFormat) =>
      objeto.mimeType.includes("video/mp4")
    ),
    title: video.title,
  };
  return youtubevideo;
};

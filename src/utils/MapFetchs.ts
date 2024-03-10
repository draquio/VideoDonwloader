import { YoutubeI } from "../interfaces/Interfaces";

type video = {
  id: string;
  thumbnail: [];
  adaptiveFormats: [];
  title: string;
  formats: []
};
export const MapYoutube = (video: video) => {
  const youtubevideo: YoutubeI = {
    id: video.id,
    thumb: video.thumbnail,
    video: video.formats.reverse(),
    title: video.title,
  };
  return youtubevideo;
};

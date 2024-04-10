import { YoutubeResponse, YoutubeI, TiktokResponse, TiktokI } from "../interfaces/Interfaces";


export const MapYoutube = (video: YoutubeResponse): YoutubeI => {
  if(!video) return {id: "", video: [], title: "No video provided"}; 
  const youtubevideo: YoutubeI = {
    id: video.id,
    video: video.formats.reverse(),
    title: video.title,
  };
  return youtubevideo;
};


export const MapTiktok = (video: TiktokResponse): TiktokI => {
  if(!video) return {id: "", video: "", title: "No video provided", thumbnail: ""}; 
  const tiktokvideo: TiktokI = {
    id: video.videoid[0],
    thumbnail: video.dynamic_cover[0],
    video: video.video[0],
    title: video.description[0],
  };
  return tiktokvideo;
};
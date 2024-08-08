import {
  YoutubeResponse,
  YoutubeI,
  TiktokResponse,
  TiktokI,
  InstagramResponse,
  InstagramI,
} from "../interfaces/Interfaces";

export const MapYoutube = (video: YoutubeResponse): YoutubeI => {
  if (!video) return { id: "", video: [], title: "No video provided" };
  const youtubevideo: YoutubeI = {
    id: video.id,
    video: video.formats.reverse(),
    title: video.title,
  };
  return youtubevideo;
};

export const MapTiktok = (video: TiktokResponse): TiktokI => {
  if (!video) return { id: "", video: "", title: "No video provided", thumbnail: "" };
  const tiktokvideo: TiktokI = {
    id: video.added_sound_music_info.id_str,
    thumbnail: video.video.dynamic_cover.url_list[0],
    video: video.video.play_addr.url_list[0],
    title: video.desc,
  };
  return tiktokvideo;
};

export const MapInstagram = (video: InstagramResponse, title: string): InstagramI => {
  if(!video) return { id: "", video: "", title: "no video provided", thumbnail: "" };
  const instagramvideo: InstagramI = {
    id: video.instaUr,
    thumbnail: video.cover,
    title: title,
    video: video.download_link
  };
  return instagramvideo;
}
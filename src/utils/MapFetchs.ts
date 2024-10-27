import {
  YoutubeResponse,
  YoutubeI,
  TiktokResponse,
  TiktokI,
  InstagramResponse,
  InstagramI,
  FacebookResponse,
  FacebookI,
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
  if (!video)
    return { id: "", video: "", title: "No video provided", thumbnail: "" };
  const tiktokvideo: TiktokI = {
    id: video.added_sound_music_info.id_str,
    thumbnail: video.video.dynamic_cover.url_list[0],
    video: video.video.play_addr.url_list[0],
    title: video.desc,
  };
  return tiktokvideo;
};

export const MapInstagram = (video: InstagramResponse): InstagramI => {
  if (!video)
    return { id: "", video: "", title: "no video provided", thumbnail: "" };
  const instagramvideo: InstagramI = {
    id: video.shortcode,
    thumbnail: "https://images.ctfassets.net/00i767ygo3tc/4iyddd6SBkSO2khVorz4fP/e491ab7cfffc1b921dce626122b322b1/instagram-video-guide.png?w=1800&q=50",
    title: video.caption,
    video: video.download_url,
  };

  return instagramvideo;
};

export const MapFacebook = (video: FacebookResponse): FacebookI => {
  if (!video)
    return { id: "", video: "", title: "no video provided", thumbnail: "" };
  const facebookvideo: FacebookI = {
    id: video.shortcode,
    thumbnail: video.thumb,
    title: "Facebook video for download",
    video: video.download_url,
  };
  return facebookvideo;
};

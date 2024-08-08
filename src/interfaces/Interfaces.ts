export type video = [{ qualityLabel: string; url: string }];

export interface YoutubeI {
  id: string;
  video: Formats[];
  title: string;
}

export interface TiktokI {
  title: string;
  thumbnail: string;
  video: string;
  id: string;
}
export interface InstagramI {
  title: string;
  thumbnail: string;
  video: string;
  id: string;
}

export interface FacebookI{
  title: string;
  thumbnail: string;
  video: string;
  id: string;
}
export interface Formats {
  qualityLabel: string;
  url: string;
}

export interface YoutubeResponse {
  id: string;
  formats: Formats[];
  title: string;
}
export interface TiktokResponse {
  added_sound_music_info: id_str;
  video: Tiktokvideo;
  desc: string;
}

export interface InstagramResponse {
  instaUr: string;
  cover: string;
  download_link: string;
}

export interface FacebookResponse {
  error: boolean;
  hosting: string;
  shortcode: string;
  caption: string;
  type: string;
  download_url: string;
  thumb: string;
}

type id_str = {
  id_str: string;
};
type Tiktokvideo = {
  dynamic_cover: url_list;
  play_addr: url_list;
};

type url_list = {
  url_list: string[];
};

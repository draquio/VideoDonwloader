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

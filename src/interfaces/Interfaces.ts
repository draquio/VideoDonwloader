export type video = [{ qualityLabel: string; url: string }];

export interface YoutubeI {
  id: string;
  video: Formats[];
  title: string;
}

export interface TiktokI {
  title: string,
  thumbnail: string,
  video: string,
  id: string
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
  videoid: string;
  dynamic_cover: string;
  video: string,
  description: string;
}

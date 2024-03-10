export type video = [{qualityLabel: string, url: string}];

export interface YoutubeI {
  id: string;
  thumb: thumbnail[];
  video: Formats[];
  title: string;
}

export interface TiktokI {
  video: string;
  cover: string;
  dynamic_cover: string;
  vatar_thumb: string;
  description: string;
  videoid: string;
  avatar_thumb: string;
  author: string;
}

export interface Formats {
  qualityLabel:string,
  url: string;
}

interface thumbnail {
  url: string;
}
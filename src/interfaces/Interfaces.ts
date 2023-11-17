export type video = [{qualityLabel: string, url: string}];

export interface YoutubeI {
  id: string;
  thumb: thumbnail[];
  video: AdaptiveFormat[];
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

export interface AdaptiveFormat {
  qualityLabel:string,
  url: string;
  mimeType: string;
}

interface thumbnail {
  url: string;
}
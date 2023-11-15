export type video = [{qualityLabel: string, url: string}];

export interface YoutubeI {
  id: string;
  thumb: [];
  video: video;
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

export const MapYoutube = (video) => {
  const youtubevideo = {
    id: video.id,
    thumb: video.thumbnail[2].url,
    video: video.adaptiveFormats.reverse(),
    title: video.title,
  };
  return youtubevideo
};

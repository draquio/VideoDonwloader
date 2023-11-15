import React, { useEffect, useState } from "react";
import { Youtube as YoutubeClass } from "../../services/youtube";
import { CardYoutube } from "./CardYoutube";
import { YoutubeI } from "../../interfaces/Interfaces";
import "./Youtube.scss";
export const Youtube = (props: { id: string }) => {
  const { id } = props;
  const [video, setVideo] = useState<YoutubeI>();
  useEffect(() => {
    (async () => {
      try {
        const YoutubeController = new YoutubeClass();
        const response = await YoutubeController.DownloadVideo(id);
        setVideo(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  if (!video) return "";
  return <CardYoutube video={video} />;
};

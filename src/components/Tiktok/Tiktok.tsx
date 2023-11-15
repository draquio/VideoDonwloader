import React, { useEffect, useState } from "react";
import { Tiktok as TiktokClass } from "../../services/tiktok";
import { TiktokI } from "../../interfaces/Interfaces";
import { TiktokCard } from "./TiktokCard";
import "./Tiktok.scss"
import { Loader } from "../Loader/Loader";
export const Tiktok = (props:{id:string}) => {
  const {id} = props;
  const [video, setVideo] = useState<TiktokI>();

  useEffect(() => {
    (async () => {
      try {
        const TiktokController = new TiktokClass();
        const response = await TiktokController.DownloadVideo(`https://www.tiktok.com/@user/video/${id}`);
        setVideo(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  if(!video) return <Loader />
  return (
    <TiktokCard video={video} />
  );
};

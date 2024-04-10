import { useState } from "react";
import { TiktokI } from "../../interfaces/Interfaces";
import { downloadvideo } from "../../utils/Functions";
import { LoaderButton } from "../LoaderButton/LoaderButton";
import { DownloadIcon } from "../../Icons/Icons";

export const TiktokCard = (props: { video: TiktokI }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { video } = props;
  const handleDownloadeVideo = async () => {
    setIsLoading(true);
    const response = await downloadvideo(video.video, video.title);
    if (response) {
      setIsLoading(false);
    }
  };

  return (
    <article className="tiktok_card">
      <div className="content">
        <figure className="img_figure">
          <img src={video.thumbnail} alt={video.title} />
        </figure>
        <div className="content_info">
          <h3>{video.title.length >= 300 ? <>{video.title.slice(0,300)} ...</> : video.title}</h3>
          <button className="btn btn_green" onClick={handleDownloadeVideo}>
            {isLoading ? (
              <>
                <LoaderButton />
              </>
            ) : (
              <>
                <DownloadIcon /> Descargar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

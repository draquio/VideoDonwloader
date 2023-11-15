import {useState} from "react"
import { TiktokI } from "../../interfaces/Interfaces";
import { downloadvideo } from "../../utils/Functions";
import { LoaderButton } from "../LoaderButton/LoaderButton";
import { DownloadIcon } from "../../Icons/Icons";

export const TiktokCard = (props: { video: TiktokI }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { video } = props;

  const handleDownloadeVideo = async () => {
      setIsLoading(true);
    const response = await downloadvideo(video.video, video.description)
    if (response) {
      setIsLoading(false)
    }
  }
  
  return (
    <article className="tiktok_card">
      <div className="content">
        <figure className="img_figure">
          <img src={video.dynamic_cover} alt={video.description} />
        </figure>
        <div className="content_info">
          <h2>{video.description}</h2>
          {/* <figure className="author">
            <img src={video.avatar_thumb} alt="Avatar" />
            <h3>{video.author}</h3>
          </figure> */}
          <button className="btn btn_green" onClick={handleDownloadeVideo}>{isLoading ? <LoaderButton /> : <><DownloadIcon /> Descargar</>}</button>
        </div>
      </div>
    </article>
  );
};

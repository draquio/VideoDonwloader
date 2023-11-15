import { TiktokI } from "../../interfaces/Interfaces";
import { downloadvideo } from "../../utils/Functions";

export const TiktokCard = (props: { video: TiktokI }) => {
  const { video } = props;
  
  return (
    <article className="tiktok_card">
      <div className="content">
        <figure className="img_figure">
          <img src={video.dynamic_cover} alt={video.description} />
        </figure>
        <div className="content_info">
          <h2>{video.description}</h2>
          <figure className="author">
            <img src={video.avatar_thumb} alt="Avatar" />
            <h3>{video.author}</h3>
          </figure>
          <button onClick={() => downloadvideo(video.video, video.description)}>Descargar Tiktok</button>
        </div>
      </div>
    </article>
  );
};

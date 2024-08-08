
import { InstagramI } from "../../interfaces/Interfaces";

export const InstagramCard = (props: { video: InstagramI }) => {
  const { video } = props;
  return (
    <article className="tiktok_card" aria-label="tiktok_card">
      <div className="content">
        <figure className="img_figure">
          <img src={video.thumbnail} alt={video.title} loading="eager" />
        </figure>
        <div className="content_info">
          <h3>
            {video.title.length >= 300 ? (
              <>{video.title.slice(0, 300)} ...</>
            ) : (
              video.title
            )}
          </h3>
          <a
            className="btn btn_green"
            download={video.title}
            href={`${video.video}&title=${video.title}`}
          >
            Descargar
          </a>
        </div>
      </div>
    </article>
  );
};

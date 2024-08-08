import { FacebookI } from "../../interfaces/Interfaces";

export const FacebookCard = (props: { video: FacebookI }) => {
  const { video } = props;
  return (
    <article className="tiktok_card" aria-label="tiktok_card">
      <div className="content" style={{ minHeight: "188px" }}>
        <figure className="img_figure" style={{ maxWidth: "350px" }}>
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="eager"
            style={{ aspectRatio: "auto" }}
          />
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
            target="_blank"
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

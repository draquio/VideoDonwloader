
import { YoutubeI } from "../../interfaces/Interfaces";
export const CardYoutube = (props: { video: YoutubeI }) => {
  const { video } = props; 
  return (
    <article aria-label="youtube_card" className="youtube_card">
      <div className="content">
        <figure className="img_figure">
          <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} loading="eager" alt={video.title}  aria-label="video-image" />
        </figure>
        <div className="content_info">
          <h3>{video.title}</h3>
          <div className="download_button" >
          {video.video.map((v, index) => (
                <p key={index}>{v.qualityLabel}.mp4 <a target="_blank" className="btn btn_blue" download="videoconvertido.mp4" href={`${v.url}&title=${video.title}`}>Descargar</a></p>                ))}
                </div>
          <p>
          </p>
        </div>
      </div>
    </article>
  );
};

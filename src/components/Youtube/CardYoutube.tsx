
import { YoutubeI } from "../../interfaces/Interfaces";

export const CardYoutube = (props: { video: YoutubeI }) => {
  const { video } = props;
  console.log(video);
  
  return (
    <article className="youtube_card">
      <div className="content">
        <figure className="img">
          <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} />
        </figure>
        <div className="content_info">
          <h2>{video.title}</h2>
          <div className="download_button" >
          {video.video.map((v, index) => (
                <p key={index}>{v.qualityLabel}.mp4 <a download="videoconvertido.mp4" href={`${v.url}&title=video.mp4`}>Descargar</a></p>                ))}
                </div>
          <p>
          </p>
        </div>
      </div>
    </article>
  );
};

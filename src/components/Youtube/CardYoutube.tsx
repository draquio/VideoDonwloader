
import { YoutubeI } from "../../interfaces/Interfaces";
import { downloadvideo } from "../../utils/Functions";

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
                <p key={index}>{v.qualityLabel}.mp4 <a download={video.title} href={`${v.url}&title=${video.title}.mp4`}>Descargar</a></p>
                ))}
                </div>
          <p>
          </p>
        </div>
      </div>
    </article>
  );
};

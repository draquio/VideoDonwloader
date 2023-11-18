import tiktok from "../../assets/tiktok.webp";
import youtube from "../../assets/youtube.webp";
import "./Info.scss";
export const Info = () => {
  return (
    <div className="info_section">
      <h2>Características de DescargaVideos</h2>
      <p>Descarga videos de Youtube/Tiktok</p>
      <div className="info">
        <figure>
          <img src={youtube} alt="Descargar videos de Youtube gratis"/>
        </figure>
        <div className="text_info">
          <h3>Descarga Videos de Youtube</h3>
          <b>DescargaVideos</b> te ofrece una solución fácil y gratuita para
          descargar videos de YouTube. Con una interfaz intuitiva y amigable,
          podrás acceder a tus videos favoritos sin conexión en cuestión de
          segundos.
        </div>
      </div>
      <div className="info">
        <div className="text_info">
          <h3>Descarga Videos de Tiktok</h3>
          Explora una nueva dimensión de entretenimiento con DescargaVideos, la
          plataforma que te brinda una solución sencilla y gratuita para
          descargar videos de TikTok. Su interfaz intuitiva y amigable facilita
          el acceso a tus contenidos favoritos, permitiéndote disfrutar de ellos
          sin conexión en cuestión de segundos.
        </div>
        <figure>
          <img src={tiktok} alt="Descargar videos de Tiktok gratis"/>
        </figure>
      </div>
    </div>
  );
};

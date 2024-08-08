import tiktok from "../../assets/tiktok.webp";
import youtube from "../../assets/youtube.webp";
import instagram from "../../assets/instagram.webp";
import facebook from "../../assets/facebook.webp";
import "./Info.scss";
export const Info = () => {
  const text = [
    {
      title: "Descargar Videos de Youtube",
      content:
        "DescargaVideos te ofrece una solución fácil y gratuita para descargar videos de YouTube. Con una interfaz intuitiva y amigable, podrás acceder a tus videos favoritos sin conexión en cuestión de segundos.",
      image: youtube,
    },
    {
      title: "Descarga Videos de Tiktok",
      content:
        "Explora una nueva dimensión de entretenimiento con DescargaVideos, la plataforma que te brinda una solución sencilla y gratuita para descargar videos de TikTok. Su interfaz intuitiva y amigable facilita el acceso a tus contenidos favoritos, permitiéndote disfrutar de ellos sin conexión en cuestión de segundos.",
      image: tiktok,
    },
    {
      title: "Descarga Videos de Instagram",
      content:
        "Descubre un mundo de entretenimiento sin límites con DescargaVideos, la plataforma que te ofrece una solución fácil y gratuita para descargar videos y Reels de Instagram. Con su interfaz intuitiva y amigable, acceder a tus contenidos favoritos nunca ha sido tan sencillo. Disfruta de tus videos preferidos sin conexión en cuestión de segundos, todo al alcance de un clic.",
      image: instagram,
    },
    {
      title: "Descarga Videos de Facebook",
      content:
        "Sumérgete en un nuevo nivel de entretenimiento con DescargaVideos, la plataforma que te ofrece una solución fácil y gratuita para descargar videos y Reels de Facebook. Con su interfaz intuitiva y amigable, acceder a tus contenidos favoritos nunca ha sido tan sencillo. Disfruta de tus videos preferidos sin conexión en cuestión de segundos.",
      image: facebook,
    },
  ];
  return (
    <div className="info_section">
      <div className="info_title">
        <h2>Características de DescargaVideos</h2>
        <p>Descarga videos de Youtube / Tiktok / Instagram / Facebook</p>
      </div>
      {text.map((info, index) => (
        <div className="info" key={index}>
          <figure>
            <img src={info.image} alt={info.title} />
          </figure>
          <div className="text_info">
            <h3>{info.title}</h3>
            <p>{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

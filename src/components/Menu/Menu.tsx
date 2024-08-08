import { useState } from "react";
import "./Menu.scss";
import { TiktokLink } from "../Tiktok/TiktokLink";
import { YoutubeLink } from "../Youtube/YoutubeLink";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "../../Icons/Icons";
import { InstagramLink } from "../Instagram/InstagramLink";

export const Menu = () => {
  const [menu, setMenu] = useState("youtube");
  const changeMenu = (value: string) => {
    setMenu(value);
  };
  return (
    <div className="content_data">
      <div className="block_info">
        <div className="menu">
          <button
            className={`btn_transparent ${menu === "youtube" ? "active" : ""}`}
            onClick={() => changeMenu("youtube")}
          >
            <YoutubeIcon /> Youtube
          </button>
          <button
            className={`btn_transparent ${menu === "tiktok" ? "active" : ""}`}
            onClick={() => changeMenu("tiktok")}
          >
            <TiktokIcon /> Tiktok
          </button>
          <button
            className={`btn_transparent ${menu === "instagram" ? "active" : ""}`}
            onClick={() => changeMenu("instagram")}
          >
            <InstagramIcon /> Instagram
          </button>
        </div>
        <div className="title">
          <h1>Descarga Videos Gratis</h1>
          <h2>Descarga videos de Youtube y Tiktok</h2>
        </div>
        {menu === "youtube" ? <YoutubeLink /> : ""}
        {menu === "tiktok" ? <TiktokLink /> : ""}
        {menu === "instagram" ? <InstagramLink /> : ""}
      </div>
    </div>
  );
};

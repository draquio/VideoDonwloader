import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TiktokIcon } from "../../Icons/Icons";

export const TiktokLink = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const getID = () => {
    const tiktokRegex =
      /(?:tiktok\.com\/)(?:v\/|video\/|@[^/]+\/video\/)([^\?&\s]+)/;
    const match = link.match(tiktokRegex);
    if (match && match[1]) {
      const id = match[1];
      navigate(`tiktok/${id}`);
    }
  };
  return (
    <form className="form_url">
      <input
      className="input_url"
        type="url"
        placeholder="https://www.tiktok.com/@user/video/7111387474676501765"
        onChange={handleChangeURL}
      />
      <button className="btn btn_green" onClick={getID}><TiktokIcon /> Descargar</button>
    </form>
  );
};

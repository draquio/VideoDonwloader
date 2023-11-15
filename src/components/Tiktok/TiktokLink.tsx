import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <input
        type="url"
        placeholder="Agrega tu enlace de tiktok"
        onChange={handleChangeURL}
      />
      <button onClick={getID}>Descargar</button>
    </>
  );
};

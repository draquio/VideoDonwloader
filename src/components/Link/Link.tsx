import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";


export const Link = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const getID = () => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = link.match(regExp);
    if (match && match[2].length == 11) {
      const id = match[2];
      navigate(`youtube/${id}`);
    }
  };

  return (
    <>
      <input
        type="url"
        placeholder="Agrega tu enlace de Youtube"
        onChange={handleChangeURL}
      />
      <button onClick={getID}>Descargar</button>
    </>
  );
};

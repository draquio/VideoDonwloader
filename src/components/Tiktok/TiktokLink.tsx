import React, { useState, ChangeEvent } from "react";
import { TiktokIcon } from "../../Icons/Icons";
import { Tiktok } from "./Tiktok";

export const TiktokLink = () => {
  const [link, setLink] = useState("");
  const [id, setId] = useState<string>("")
  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const getID = (e: React.FormEvent) => {
    e.preventDefault()
    const tiktokRegex =
      /(?:tiktok\.com\/)(?:v\/|video\/|@[^/]+\/video\/)([^\?&\s]+)/;
    const match = link.match(tiktokRegex);
    if (match && match[1]) {
      setId(match[1]);
      // navigate(`tiktok/${id}`);
    }
  };
  return (
    <>
      <form className="form_url">
        <input
          className="input_url"
          type="text"
          placeholder="https://www.tiktok.com/@user/video/7111387474676501765"
          onChange={handleChangeURL}
        />
        <button className="btn btn_green" onClick={getID}>
          <TiktokIcon /> Descargar
        </button>
      </form>
      {id.length > 0 ? <Tiktok id={id} /> : ""}
    </>
  );
};

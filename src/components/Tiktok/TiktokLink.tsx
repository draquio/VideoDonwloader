import React, { useState, ChangeEvent, MouseEvent } from "react";
import { TiktokIcon } from "../../Icons/Icons";
import { Tiktok } from "./Tiktok";

export const TiktokLink = () => {
  const [link, setLink] = useState("");
  const [id, setId] = useState<string>("");
  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const getID = (e: React.FormEvent) => {
    e.preventDefault();
    setId(link);
  };
  const handleClickInput = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };
  return (
    <>
      <form className="form_url">
        <input
          className="input_url"
          type="text"
          placeholder="https://www.tiktok.com/@user/video/7111387474676501765"
          onChange={handleChangeURL}
          onClick={handleClickInput}
        />
        <button className="btn btn_green" onClick={getID}>
          <TiktokIcon /> Descargar
        </button>
      </form>
      {id.length > 0 ? <Tiktok link={id} /> : ""}
    </>
  );
};

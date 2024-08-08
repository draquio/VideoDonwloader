import { useState, useRef } from "react";
import { InstagramIcon } from "../../Icons/Icons";
import { Instagram } from "./Instagram";

export const InstagramLink = () => {
  const [link, setLink] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setLink(inputRef.current.value);
    }
  };
  return (
    <>
      <form className="form_url">
        <input
          aria-label="instagram_url"
          className="input_url"
          type="text"
          ref={inputRef} 
          placeholder="https://www.instagram.com/reel/Cw2yPMuA8Mc/"
        />
        <button className="btn btn_green" onClick={handleClick}>
          <InstagramIcon /> Descargar
        </button>
      </form>
      {link.length > 0 ? <Instagram link={link} /> : ""}
    </>
  );
};

import { useState, ChangeEvent } from "react";
import { YoutubeIcon } from "../../Icons/Icons";
import { Youtube } from "./Youtube";

export const YoutubeLink = () => {
  const [link, setLink] = useState("");
  const [id, setId] = useState<string>("");
  const handleChangeURL = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const getID = (e: React.FormEvent) => {
    e.preventDefault()
    const regex = /[?&]v=([^#\&\?]*).*/;
    const match = link.match(regex);

    // Verificar si se encontró una coincidencia y devolver la ID
    if (match && match[1]) {
      setId(match[1]);
      console.log(match[1]);
      
    }
  };
  return (
    <>
      <form className="form_url">
        <input
          type="url"
          placeholder="https://www.youtube.com/watch?v=Fn0jK0oZy80"
          className="input_url"
          onChange={handleChangeURL}
        />
        <button className="btn btn_green" onClick={getID}>
          <YoutubeIcon /> Descargar
        </button>
      </form>
      {id.length > 0 ? <Youtube id={id} /> : ""}
    </>
  );
};

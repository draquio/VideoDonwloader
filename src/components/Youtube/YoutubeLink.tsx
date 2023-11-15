import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { YoutubeIcon } from "../../Icons/Icons";

export const YoutubeLink = () => {
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
    <form className="form_url">
      <input
        type="url"
        placeholder="https://www.youtube.com/watch?v=Fn0jK0oZy80"
        className="input_url"
        onChange={handleChangeURL}
      />
      <button className="btn btn_green" onClick={getID}><YoutubeIcon /> Descargar</button>
    </form>
  )
}

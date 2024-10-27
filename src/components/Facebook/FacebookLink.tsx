import { useRef, useState } from 'react'
import { FacebookIcon } from '../../Icons/Icons';
import { Facebook } from './Facebook';
import { Error } from '../Error/Error';

export const FacebookLink = () => {
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
          aria-label="facebook_url"
          className="input_url"
          type="text"
          ref={inputRef} 
          placeholder="https://www.facebook.com/reel/1080769482906711"
        />
        <button className="btn btn_green" onClick={handleClick}>
          <FacebookIcon /> Descargar
        </button>
      </form>
      {link.length > 0 ? <Facebook link={link} /> : ""}
      <Error errortext="Facebook Downloader fuera de servicio temporalmente" closeError={() => {}} />
    </>
  )
}

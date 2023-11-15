import {useState} from 'react'
import "./Menu.scss"
import { TiktokLink } from '../Tiktok/TiktokLink';
import { YoutubeLink } from '../Youtube/YoutubeLink';
import { TiktokIcon, YoutubeIcon } from '../../Icons/Icons';

export const Menu = () => {
    const [menu, setMenu] = useState("youtube");
    const changeMenu = (value:string) => {
        setMenu(value)
    }
  return (
    <>
    <div className='menu'>
        <button className={`btn_transparent ${menu==="youtube" ? 'active' : ""}`} onClick={() => changeMenu("youtube")}><YoutubeIcon /> Youtube</button>
        <button className={`btn_transparent ${menu==="tiktok" ? 'active' : ""}`} onClick={() => changeMenu("tiktok")}><TiktokIcon /> Tiktok</button>
    </div>
    { menu === "youtube" ? <YoutubeLink /> : ""}
    { menu === "tiktok" ? <TiktokLink /> : ""}
    </>
  )
}

import { Link } from "react-router-dom";
import "./Nav.scss";
export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav_content">
        <div className="logo"><Link to={"/"}>DescargaVideos</Link></div>
        {/* <div className="logo">DescargaVideos</div> */}
      </div>
    </nav>
  );
};

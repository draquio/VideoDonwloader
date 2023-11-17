import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import "./Layout.scss";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <div className="container">{children}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

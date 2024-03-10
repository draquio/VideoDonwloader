import { Menu } from "../../components/Menu/Menu";
import { Info } from "../../components/Info/Info";
import { Analytics } from "@vercel/analytics/react"
export const Home = () => {
  return (
    <>
    <Menu />
    <Info />
    <Analytics />
    </>
  );
};

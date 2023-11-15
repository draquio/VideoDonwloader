import {Youtube as YtComponent} from "../../components/Youtube/Youtube"
import { useParams } from "react-router-dom";

export const Youtube = () => {
  const params = useParams();
  const { id = ""} = params;
  return (
    <>
    <YtComponent id={id} />
    </>
  );
};

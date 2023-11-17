import { useEffect, useState } from "react";
import { Tiktok as TiktokClass } from "../../services/tiktok";
import { TiktokI } from "../../interfaces/Interfaces";
import { TiktokCard } from "./TiktokCard";
import "./Tiktok.scss"
import { Loader } from "../Loader/Loader";
import { VerifyLinkTiktok } from "../../utils/Functions";
import { Error } from "../Error/Error";

export const Tiktok = (props:{link:string}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {link} = props;
  const [video, setVideo] = useState<TiktokI>();
  const [error, setError] = useState("");
  const closeError = () => {
    setError("");
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        if(VerifyLinkTiktok(link)){
          const TiktokController = new TiktokClass();
          const response = await TiktokController.DownloadVideo(link);
          setVideo(response);          
          setIsLoading(false)
        }else{
          setError("Enlace no válido")
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [link]);

  if(isLoading) return <Loader />
  return (
    <>
    {error.length > 0 && <Error errortext={error} closeError={closeError} />}
    {video ? <TiktokCard video={video} /> : ""}
    </>
  );
};

import { useEffect, useState } from "react";
import { Youtube as YoutubeClass } from "../../services/youtube";
import { CardYoutube } from "./CardYoutube";
import { YoutubeI } from "../../interfaces/Interfaces";
import "./Youtube.scss";
import { Loader } from "../Loader/Loader";
// import { MapYoutube } from "../../utils/MapFetchs";
import { GetYoutubeID, VerifyYoutubeLink } from "../../utils/Functions";
import { Error } from "../Error/Error";

export const Youtube = (props: { link: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { link } = props;
  const [video, setVideo] = useState<YoutubeI>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {    
        setError("")    
        setIsLoading(true);
        const id = GetYoutubeID(link);
        if (id && VerifyYoutubeLink(link))  {
          const YoutubeController = new YoutubeClass();
          const response = await YoutubeController.DownloadVideo(id); 
          setVideo(response);
          console.log(response);
          
        }else{
          setError("Enlace no válido");
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        const message = (error as Error).message;
        setError(message)
        setIsLoading(false);
      }
    })();
  }, [link]);
  const closeError = () => {
    setError("");
  };

  if (isLoading) return <Loader />;
  return (
    <>
      {error.length > 0 && <Error errortext={error} closeError={closeError} />}
      {video ? <CardYoutube video={video} /> : ""}
    </>
  );
};

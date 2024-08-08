import { useEffect, useState } from "react";
import { FacebookI } from "../../interfaces/Interfaces";
import { VerifyLinkFacebook } from "../../utils/Functions";
import { Facebook as FacebookClass } from "../../services/facebook";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import { FacebookCard } from "./FacebookCard";
export const Facebook = (props: { link: string }) => {
  const { link } = props;
  const [video, setVideo] = useState<FacebookI>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const closeError = () => {
    setError("");
  };
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setIsLoading(true);
        if (VerifyLinkFacebook(link)) {
          const FacebookController = new FacebookClass();
          const response = await FacebookController.DownloadVideo(link);
          setVideo(response);
        } else {
          setError("Link is not a Facebook Reel or video");
        }
      } catch (error) {
        const message = (error as Error).message;
        setError(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [link]);
  if (isLoading) return <Loader />;
  return (
    <>
    {error.length > 0 && <Error errortext={error} closeError={closeError} />}
    {video ? <FacebookCard video={video} /> : ""}
    </>
  )
};

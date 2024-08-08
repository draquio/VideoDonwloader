import { useEffect, useState } from 'react'
import { InstagramI } from '../../interfaces/Interfaces';
import { VerifyLinkInstagramReel } from '../../utils/Functions';
import {Instagram as InstagramClass} from "../../services/instagram";
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { InstagramCard } from './InstagramCard';
export const Instagram = (props: {link:string}) => {
  const {link} = props;
  const [video, setVideo] = useState<InstagramI>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const closeError = () => {
    setError("");
  };
  useEffect(()=>{
    (async () => {
      try {
        setError("");
        setIsLoading(true);
        if(VerifyLinkInstagramReel(link)){
          const InstagramController = new InstagramClass();
          const response = await InstagramController.DownloadVideo(link);
          setVideo(response);
        }else{
          setError("Link is not a Instagram Reel")
        }
      } catch (error) {
        const message = (error as Error).message;
        setError(message);
      } finally{
        setIsLoading(false);
      }
    })()
  },[link])
  if(isLoading) return <Loader />
  return (
    <>
    {error.length > 0 && <Error errortext={error} closeError={closeError} />}
    {video ? <InstagramCard video={video} /> : ""}
    </>
  )
}


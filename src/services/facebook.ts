import { FacebookI } from "../interfaces/Interfaces";
import { ENV } from "../utils/constants";
import { MapFacebook } from "../utils/MapFetchs";


export class Facebook {
    async DownloadVideo(url: string): Promise<FacebookI> {
      try {
        const urlbase = `${ENV.Facebook_url}${url}`;
        const params = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": ENV.API_Key,
            "X-RapidAPI-Host": ENV.Facebook_host,
          },
        };
        const response = await fetch(urlbase, params);
        if (response.status === 200) {
          const result = await response.text();
          const resultJson = JSON.parse(result);
          return MapFacebook(resultJson);
        }
        throw response;
      } catch (error) {
        console.error(error);
        throw new Error("Algo ha salido mal");
      }
    }
  }
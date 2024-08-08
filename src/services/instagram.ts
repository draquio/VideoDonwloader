import { ENV } from "../utils/constants";
import { InstagramI } from "../interfaces/Interfaces";
import { MapInstagram } from "../utils/MapFetchs";

export class Instagram {
  async DownloadVideo(url: string): Promise<InstagramI> {
    try {
      const urlbase = `${ENV.Instagram_url}${url}`;
      const params = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": ENV.API_Key,
          "X-RapidAPI-Host": ENV.Instagram_host,
        },
      };
      const response = await fetch(urlbase, params);
      if (response.status === 200) {
        const result = await response.text();
        const resultJson = JSON.parse(result);
        return MapInstagram(resultJson[0]);
      }
      throw response;
    } catch (error) {
      console.error(error);
      throw new Error("Algo ha salido mal");
    }
  }
}

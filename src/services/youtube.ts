import { YoutubeI } from "../interfaces/Interfaces";
import { MapYoutube } from "../utils/MapFetchs";
import { ENV } from "../utils/constants";

export class Youtube {
  async DownloadVideo(id: string) : Promise<YoutubeI> {
    try {
      const url = `${ENV.Youtube_url}${id}`;
      const params = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": ENV.API_Key,
          "X-RapidAPI-Host": ENV.Youtube_host,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return MapYoutube(result);
      }
      throw response;
    } catch (error) {
      console.error(error);
      throw new Error("Algo ha salido mal");
    }
  }
}

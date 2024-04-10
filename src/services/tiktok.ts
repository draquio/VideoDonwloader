import { TiktokI } from "../interfaces/Interfaces";
import { MapTiktok } from "../utils/MapFetchs";
import { ENV } from "../utils/constants";

export class Tiktok {
  async DownloadVideo(id: string): Promise<TiktokI> {
    try {
      const url = `${ENV.Tiktok_url}${id}`
      const params = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": ENV.API_Key,
          "X-RapidAPI-Host": ENV.Tiktok_host,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return MapTiktok(result);
      }
      throw response;
    } catch (error) {
      console.error(error);
      throw new Error("Algo ha salido mal");
    }
  }
}

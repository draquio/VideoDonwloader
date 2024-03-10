import { ENV } from "../utils/constants";

export class Tiktok {
  async DownloadVideo(id: string) {
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
        return result;
      }
      throw response;
    } catch (error) {
      return error;
    }
  }
}

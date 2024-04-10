import { describe, expect, test } from "vitest";
import { MapYoutube } from "../utils/MapFetchs";

const mock = {
  id: "wr1a7v3FTeI",
  title: "La Era de Hielo: Voces que marcaron nuestra infancia | Draquio",
  formats: [
    {
      url: "https://rr3---sn-4g5e6ns7.googlevideo.com/videoplayback?expire=1712801986&ei=YvQWZvXkE6XW6dsP0faf2AE&ip=2a01%3A4f8%3Ac17%3A6b8e%3Aee51%3A96e2%3A1dc%3A341f&id=o-AB7_wWdPppvfJE-p2ROx0PmobcRN2AzLUhlHAjRA1Hc9&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Gr&mm=31%2C26&mn=sn-4g5e6ns7%2Csn-f5f7kn7z&ms=au%2Conr&mv=m&mvi=3&pl=49&spc=UWF9f9Bec1NamUgcCGJ5I_MN-T_NgvPP3GuA05w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=480.142&lmt=1710143870566091&mt=1712780212&fvip=5&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAMYfgyZlIUuqsgNHX_GzGiW-qRfuo2oRPMEPqCjGlqGoAiEAltMIQiJmr2mEA0hFTEQq8TldRA7j65JBOAF7rbdyR2s%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=ALClDIEwRgIhAIDtV9KIDKP-_irLLgJaOXI_EdvXY_uHKpCOGhWYcAgDAiEAxnAcAtbngItEczR6dV3revF51Aih_exToK3Hj6CJX2U%3D",
      qualityLabel: "720p",
    },
  ],
};
describe("Testing MapYoutube Function", () => {
  test("it should return a data with the correct properties", () => {
    const data = MapYoutube(mock);
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("video");
    expect(data).toHaveProperty("title");
  });

  test("it should return the correct data information", () => {
    const data = MapYoutube(mock);
    expect(data).toEqual({
      title: "La Era de Hielo: Voces que marcaron nuestra infancia | Draquio",
      id: "wr1a7v3FTeI",
      video: [
        {
          qualityLabel: "720p",
          url: "https://rr3---sn-4g5e6ns7.googlevideo.com/videoplayback?expire=1712801986&ei=YvQWZvXkE6XW6dsP0faf2AE&ip=2a01%3A4f8%3Ac17%3A6b8e%3Aee51%3A96e2%3A1dc%3A341f&id=o-AB7_wWdPppvfJE-p2ROx0PmobcRN2AzLUhlHAjRA1Hc9&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Gr&mm=31%2C26&mn=sn-4g5e6ns7%2Csn-f5f7kn7z&ms=au%2Conr&mv=m&mvi=3&pl=49&spc=UWF9f9Bec1NamUgcCGJ5I_MN-T_NgvPP3GuA05w&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=480.142&lmt=1710143870566091&mt=1712780212&fvip=5&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAMYfgyZlIUuqsgNHX_GzGiW-qRfuo2oRPMEPqCjGlqGoAiEAltMIQiJmr2mEA0hFTEQq8TldRA7j65JBOAF7rbdyR2s%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=ALClDIEwRgIhAIDtV9KIDKP-_irLLgJaOXI_EdvXY_uHKpCOGhWYcAgDAiEAxnAcAtbngItEczR6dV3revF51Aih_exToK3Hj6CJX2U%3D",
        },
      ],
    });
  });

  test("it should return empty data with Interface format if a null input is provided ", () => {
    const data = MapYoutube(null as any);
    expect(data).toEqual({
      id: "",
      video: [],
      title: "No video provided",
    });
  });
  test("it should return empty data with Interface format if a undefined input is provided ", () => {
    const data = MapYoutube(undefined as any);
    expect(data).toEqual({
      id: "",
      video: [],
      title: "No video provided",
    });
  });

});

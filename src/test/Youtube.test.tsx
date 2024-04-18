import { afterEach, describe, expect, test } from "vitest";
import { YoutubeLink } from "../components/Youtube/YoutubeLink";
import { render, screen, cleanup } from "@testing-library/react";
import { CardYoutube } from "../components/Youtube/CardYoutube";
import { Youtube } from "../components/Youtube/Youtube";

describe("Testing YoutubeLink Component", () => {
    afterEach(()=>{
        cleanup();
    })
  
  test("it should render the download button from YoutubeLink component", () => {
    render(<YoutubeLink />);
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    expect(downloadButton).toBeDefined();
  });

  test("it should render the input type url from YoutubeLink component", () => {
    render(<YoutubeLink />);
    const inputlink = screen.getByLabelText("youtube_link");
    expect(inputlink).toBeDefined();
  });

  const mockProps = {
    "id": "gH32DJGuF6I",
    "video": [
        {
            "itag": 22,
            "url": "https://rr1---sn-4g5lznes.googlevideo.com/videoplayback?expire=1713471410&ei=UishZsm6Iofb6dsP3_m7sA8&ip=2a01%3A4f8%3Ac17%3A6b8e%3A8e4a%3A1e27%3A3db%3A7d73&id=o-AC_IppS_aeXnGAn1AyJcmZIS6T3O2gjJL3ybnWGZQtF-&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=0g&mm=31%2C29&mn=sn-4g5lznes%2Csn-4g5edn6k&ms=au%2Crdu&mv=m&mvi=1&pl=49&initcwndbps=486250&spc=UWF9f9zZ4Ie-b6pRcSb16MxC7ecwPu4N78f7pPc&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=237.540&lmt=1713050636807607&mt=1713448851&fvip=5&c=ANDROID&txp=5308224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgN-_KukYuQnGan3yP6rdDhEnrMSZJ8nkA1FG9g5nAX7UCIQCMS2Xq7_a8XQPFQ-e9PGSfH7EFnAh94jMSUMQRwG8DmQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALClDIEwRQIgaqsC9r2zOBLfgKjuy1l5zRatJ6QzAK3DBUj_07Jer54CIQC9e_1ysWWDFLTtzGukv_0Tw54YjRfRu6BaT1AWkAGHDw%3D%3D",
            "mimeType": "video/mp4; codecs=\"avc1.64001F, mp4a.40.2\"",
            "bitrate": 1097675,
            "width": 1280,
            "height": 720,
            "lastModified": "1713050636807607",
            "quality": "hd720",
            "fps": 30,
            "qualityLabel": "720p",
            "projectionType": "RECTANGULAR",
            "audioQuality": "AUDIO_QUALITY_MEDIUM",
            "approxDurationMs": "237540",
            "audioSampleRate": "44100",
            "audioChannels": 2
        },
        {
            "itag": 18,
            "url": "https://rr1---sn-4g5lznes.googlevideo.com/videoplayback?expire=1713471410&ei=UishZsm6Iofb6dsP3_m7sA8&ip=2a01%3A4f8%3Ac17%3A6b8e%3A8e4a%3A1e27%3A3db%3A7d73&id=o-AC_IppS_aeXnGAn1AyJcmZIS6T3O2gjJL3ybnWGZQtF-&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=0g&mm=31%2C29&mn=sn-4g5lznes%2Csn-4g5edn6k&ms=au%2Crdu&mv=m&mvi=1&pl=49&initcwndbps=486250&spc=UWF9f9zZ4Ie-b6pRcSb16MxC7ecwPu4N78f7pPc&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=12539468&ratebypass=yes&dur=237.540&lmt=1713050613459813&mt=1713448851&fvip=5&c=ANDROID&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgVM778L75R2PCEo961a04mLYdDuf9r3Di5AQHVeQO6qgCIQDRlZrfHEC2UA87Ll2_HrtRHqjYXJMRzg1QcY-0Z7pWVQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALClDIEwRQIgaqsC9r2zOBLfgKjuy1l5zRatJ6QzAK3DBUj_07Jer54CIQC9e_1ysWWDFLTtzGukv_0Tw54YjRfRu6BaT1AWkAGHDw%3D%3D",
            "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
            "bitrate": 422435,
            "width": 640,
            "height": 360,
            "lastModified": "1713050613459813",
            "contentLength": "12539468",
            "quality": "medium",
            "fps": 30,
            "qualityLabel": "360p",
            "projectionType": "RECTANGULAR",
            "averageBitrate": 422310,
            "audioQuality": "AUDIO_QUALITY_LOW",
            "approxDurationMs": "237540",
            "audioSampleRate": "44100",
            "audioChannels": 2
        }
    ],
    "title": "🧜‍♀️ La Sirenita: Voces que marcaron nuestra infancia (Doblaje) | Draquio"
}
  test("it should render YoutubeCard component with the data provided", async () => {
    render(<CardYoutube video={mockProps} />);
    const img = screen.findByRole("img", { name: /Voces que marcaron nuestra infancia/i });
    const title = screen.findByText(/Voces que marcaron nuestra infancia/i, {
      selector: "h3",
    });
    const downloadbuttons = await screen.findAllByRole("link", { name: /Descargar/i });
    expect(img).toBeDefined();
    expect(title).toBeDefined();
    expect(downloadbuttons.length).toBeGreaterThan(0);
  });

  test("it should return error when a wrong link is provided doing click on button", () => {
    render(<Youtube link="https://draquioportfolio.vercel.app/" />);
    const errorDiv = screen.findByText('Enlace no válido', { selector: '.error__title' });
    expect(errorDiv).toBeDefined();
  });

});

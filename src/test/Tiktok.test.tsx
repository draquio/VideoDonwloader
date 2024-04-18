import { afterEach, describe, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { TiktokLink } from "../components/Tiktok/TiktokLink";
import { TiktokCard } from "../components/Tiktok/TiktokCard";
import { Tiktok } from "../components/Tiktok/Tiktok";

describe("Testing YoutubeLink Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("it should render the download button from Tiktoklink component", () => {
    render(<TiktokLink />);
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    expect(downloadButton).toBeDefined();
  });

  test("it should render the input type url from Tiktoklink component", () => {
    render(<TiktokLink />);
    const inputlink = screen.getByLabelText("tiktok_url");
    expect(inputlink).toBeDefined();
  });

  const mockProps = {
    id: "7107730175168711942",
    thumbnail:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8d590bad73534a0aaa8ebacc3672234a_1654898403?lk3s=d05b14bd&nonce=45024&refresh_token=d5cc6cb452be9f4d8980f852ac26c949&x-expires=1713531600&x-signature=WZbS5lsO%2BLojH4tThrXPXZpb%2BTY%3D&s=FEED&se=false&sh=&sc=dynamic_cover&l=20240418135620F886DE6517FE04258D08",
    video:
      "https://v19.tiktokcdn.com/54abe88da0bb3652ca9d200fa3f18fca/66217b16/video/tos/useast2a/tos-useast2a-ve-0068c004/6e24fa5b078141088309b4275fde59c6/?a=1233&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1898&bt=949&cs=0&ds=6&ft=XsFb_qT0mmjPD12ei9r73wUDktxMjeF~O5&mime_type=video_mp4&qs=0&rc=OjpnZmc2OTo7ODU3ZzQ1PEBpM2R1eWk6Zjt1ZDMzNzgzM0AtYWBeLTEvNl8xMjNhYTMwYSNkczBkcjRnM2VgLS1kLzZzcw%3D%3D&vvpl=1&l=20240418135620F886DE6517FE04258D08&btag=e00088000&cc=4",
    title: "Doblaje de Dragon Ball Z - Libertades en el Doblaje | Draquio",
  };
  test("it should render TiktokCard component with the data provided", () => {
    render(<TiktokCard video={mockProps} />);
    const img = screen.findByRole("img", { name: /Doblaje de Dragon Ball Z/i });
    const title = screen.findByText(/Doblaje de Dragon Ball Z/i, {
      selector: "h3",
    });
    const downloadbutton = screen.findByRole("button", { name: /Descargar/i });
    expect(img).toBeDefined();
    expect(title).toBeDefined();
    expect(downloadbutton).toBeDefined();
  });

  test("it should return error when a wrong link is provided doing click on button", () => {
    render(<Tiktok link="https://draquioportfolio.vercel.app/" />);
    const errorDiv = screen.findByText('Enlace no válido', { selector: '.error__title' });
    expect(errorDiv).toBeDefined();
  });
});

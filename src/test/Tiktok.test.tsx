import { afterEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { TiktokLink } from "../components/Tiktok/TiktokLink";

describe("Testing YoutubeLink Component", () => {
    afterEach(()=>{
        cleanup();
    })
  
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

  test("it should return the content from api when tiktok video link is provided doing click on button", async () => {
    render(<TiktokLink />);
    const inputlink = screen.getByLabelText("tiktok_url");
    fireEvent.change(inputlink, {target: { value: "https://www.tiktok.com/@draquio/video/7111387474676501765" }});
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    fireEvent.click(downloadButton);
    expect(screen.getByLabelText("loader")).toBeDefined();
    await waitFor(() => {
        expect(screen.getByLabelText("tiktok_card")).toBeDefined();
    },{ timeout: 15000 });
    const title = screen.getByText(/Doblaje de Madagascar/i);
    const image = screen.getByAltText(/Doblaje de Madagascar/i);
    expect(title).toBeDefined();
    expect(image).toBeDefined();
  });

  test("it should return error when a wrong link is provided doing click on button", () => {
    render(<TiktokLink />);
    const inputlink = screen.getByLabelText("tiktok_url");
    fireEvent.change(inputlink, {target: { value: "https://draquioportfolio.vercel.app/" }});
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    fireEvent.click(downloadButton);
    const errorBlock = screen.getByText(/Enlace no válido/i); 
    expect(errorBlock).toBeDefined();
  });

});
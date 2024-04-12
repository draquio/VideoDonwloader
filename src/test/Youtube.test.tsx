import { afterEach, describe, expect, test } from "vitest";
import { YoutubeLink } from "../components/Youtube/YoutubeLink";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";

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

  test("it should return the content from api when long youtube video link is provided doing click on button", async () => {
    render(<YoutubeLink />);
    const inputlink = screen.getByLabelText("youtube_link");
    fireEvent.change(inputlink, {target: { value: "https://youtu.be/wr1a7v3FTeI?si=2Si2vFTvK_QFMh6R" }});
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    fireEvent.click(downloadButton);
    expect(screen.getByLabelText("loader")).toBeDefined();
    await waitFor(() => {
        expect(screen.getByLabelText("youtube_card")).toBeDefined();
    },{ timeout: 10000 });
    const title = screen.getByText(/La Era de Hielo/i);
    const image = screen.getByAltText(/La Era de Hielo/i);
    expect(title).toBeDefined();
    expect(image).toBeDefined();
  });

  test("it should return error when a wrong link is provided doing click on button", () => {
    render(<YoutubeLink />);
    const inputlink = screen.getByLabelText("youtube_link");
    fireEvent.change(inputlink, {target: { value: "https://draquioportfolio.vercel.app/" }});
    const downloadButton = screen.getByRole("button", { name: /descargar/i });
    fireEvent.click(downloadButton);
    const errorBlock = screen.getByText(/Enlace no válido/i); 
    expect(errorBlock).toBeDefined();
  });
});

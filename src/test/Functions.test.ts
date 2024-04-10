import { describe, expect, test } from "vitest";
import {
  GetYoutubeID,
  VerifyLinkTiktok,
  VerifyYoutubeLink,
} from "../utils/Functions";

describe("Testing GetYoutubeID function", () => {
  test("It should return the id of the video", () => {
    const id = GetYoutubeID("https://youtu.be/wr1a7v3FTeI?si=pkNxd9n5FGjWJHZq");
    expect(id).toBe("wr1a7v3FTeI");
  });

  test("It should return null from a text", () => {
    const id = GetYoutubeID("this is a test");
    expect(id).toBe(null);
  });

  test("It should return null if a empty input is provided", () => {
    const id = GetYoutubeID("");
    expect(id).toBe(null);
  });
});

describe("Testing VerifyYoutubeLink Function", () => {
  test("It should return true from a correct Youtube Video URL", () => {
    const result = VerifyYoutubeLink(
      "https://youtu.be/wr1a7v3FTeI?si=pkNxd9n5FGjWJHZq"
    );
    expect(result).toBe(true);
  });
  test("It should return true if the url provided has http instead https", () => {
    const result = VerifyYoutubeLink(
      "http://youtu.be/wr1a7v3FTeI?si=pkNxd9n5FGjWJHZq"
    );
    expect(result).toBe(true);
  });
  test("It should return false if a wrong url is provided", () => {
    const result = VerifyYoutubeLink("https://draquioportfolio.vercel.app/");
    expect(result).toBe(false);
  });
  test("It should return false if a empty input is provided", () => {
    const result = VerifyYoutubeLink("");
    expect(result).toBe(false);
  });
});

describe("Testing VerifyLinkTiktok Function", () => {
  test("it should return true if a correct tiktok url video is provided", () => {
    const result = VerifyLinkTiktok(
      "https://www.tiktok.com/@draquio/video/7107730175168711942"
    );
    expect(result).toBe(true);
  });
  test("it should return true if the url provided has http instead https", () => {
    const result = VerifyLinkTiktok(
      "http://www.tiktok.com/@draquio/video/7107730175168711942"
    );
    expect(result).toBe(true);
  });
  test("it should return true with short tiktok url", () => {
    const result = VerifyLinkTiktok("https://vm.tiktok.com/ZMeJ5Lx4o/");
    expect(result).toBe(true);
  });
  test("it should return false if a wrong url is provided", () => {
    const result = VerifyLinkTiktok("https://draquioportfolio.vercel.app/");
    expect(result).toBe(false);
  });
  test("it should return false if empty input is provided", () => {
    const result = VerifyLinkTiktok("");
    expect(result).toBe(false);
  });
});

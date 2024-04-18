describe("Youtube Rendering component", () => {
  it("It should render the Youtube components", () => {
    cy.visit("http://localhost:5173/");
    cy.get('input[aria-label="youtube_link"]').should("exist");
    cy.contains("button", /descargar/i).should("exist");
  });

  it("It should get the data to download from correct Youtube url", () => {
    cy.visit("http://localhost:5173/");
    cy.get('input[aria-label="youtube_link"]').type("https://www.youtube.com/watch?v=iT7GZoJE_og");
    cy.contains("button", /descargar/i).click();
    cy.intercept("GET", "https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=*").as("youtubeRequest");
    cy.wait("@youtubeRequest");
    cy.contains("h3", /La Caida de Sensaciones Sónicas/i).should("be.visible");
    cy.get("img[alt='🎙️ La Caida de Sensaciones Sónicas - Historias del Doblaje Latino | Draquio']").should("be.visible");
    cy.get("a").contains(/Descargar/i).should('have.attr', 'download').then(links => {
      expect(links).to.have.length.of.at.least(2);
    })
  });

  it("It should return error when a wrong url is provided to Youtube", () => {
    cy.visit("http://localhost:5173/");
    cy.get('input[aria-label="youtube_link"]').type("https://draquioportfolio.vercel.app/");
    cy.contains("button", /descargar/i).click();
    cy.get("div.error__title").contains("Enlace no válido");
  });

  it("It should return error at the first, then return the data when the first url is wrong and the second one is correct on Youtube", () => {
    cy.visit("http://localhost:5173/");
    cy.get('input[aria-label="youtube_link"]').type("https://draquioportfolio.vercel.app/");
    cy.contains("button", /descargar/i).click();
    cy.get("div.error__title").contains("Enlace no válido");
    cy.get('input[aria-label="youtube_link"]').type("https://www.youtube.com/watch?v=iT7GZoJE_og");
    cy.contains("button", /descargar/i).click();
    cy.intercept("GET", "https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=*").as("youtubeRequest2");
    cy.wait("@youtubeRequest2");
    cy.contains("h3", /La Caida de Sensaciones Sónicas/i).should("be.visible");
    cy.get("img[alt='🎙️ La Caida de Sensaciones Sónicas - Historias del Doblaje Latino | Draquio']").should("be.visible");
    cy.get("a").contains(/Descargar/i).should('have.attr', 'download').then(links => {
      expect(links).to.have.length.of.at.least(2);
    })
  });
});
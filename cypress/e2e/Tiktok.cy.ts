describe('Tiktok Rendering component', () => {
  beforeEach(()=>{
    cy.TiktokOpen();
  })
  it("It should render the Tiktok components", () => {
    cy.get("input[aria-label='tiktok_url']").should("exist");
    cy.get("button").contains(/Descargar/i).should("exist");
  });

  it("It should get the data to download from correct Tiktok url", () => {
    cy.get("input[aria-label='tiktok_url']").type("https://www.tiktok.com/@draquio/video/7111387474676501765");
    cy.get("button").contains(/Descargar/i).click();
    cy.wait(5000);
    cy.get("h3").contains(/Doblaje de Madagascar - Versiones del Doblaje Latino/i).should("be.visible");
    cy.get('img[alt="Doblaje de Madagascar  - Versiones del Doblaje Latino | Draquio"]').should('be.visible');
    cy.get('div.content_info').contains('button', /Descargar/i).should('be.visible');
  });

  it("It should return error when a wrong url is provided to tiktok", () => {
    cy.get("input[aria-label='tiktok_url']").type("https://draquioportfolio.vercel.app/");
    cy.get("button").contains(/Descargar/i).click();
    cy.get("div.error__title").contains("Enlace no válido");
  });

  it("It should return error at the first, then return the data when the first url is wrong and the second one is correct on Tiktok", () => {
    cy.get("input[aria-label='tiktok_url']").type("https://draquioportfolio.vercel.app/");
    cy.get("button").contains(/Descargar/i).click();
    cy.get("div.error__title").contains("Enlace no válido");
    cy.get("input[aria-label='tiktok_url']").type("https://www.tiktok.com/@draquio/video/7111387474676501765");
    cy.get("button").contains(/Descargar/i).click();
    cy.wait(5000);
    cy.get("h3").contains(/Doblaje de Madagascar - Versiones del Doblaje Latino/i).should("be.visible");
    cy.get('img[alt="Doblaje de Madagascar  - Versiones del Doblaje Latino | Draquio"]').should('be.visible');
    cy.get('div.content_info').contains('button', /Descargar/i).should('be.visible');
  });
})
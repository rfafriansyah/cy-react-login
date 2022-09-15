describe(`Landing Page -> Login Test Cases`, () => {
  it(`Successfully Load the Page`, () => {
    cy.visit("https://taufanfadhilah.github.io/react-gallery/");
    cy.title().should("eq", "React Gallery");
    cy.contains("Hello Again!");
  });
});

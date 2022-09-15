describe(`Landing Page -> Login Test Cases`, () => {
  it(`Successfully Load the Page`, () => {
    cy.visit("https://taufanfadhilah.github.io/react-gallery/");
    cy.title().should("eq", "React Gallery");
    cy.contains("Hello Again!");
  });

  it(`Contains Email and Password input, and login button`, () => {
    //Check Email
    const email = cy.get("input[name='email']");
    email.should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email Address");

    //Check Password
    const password = cy.get("input[name='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");

    //Check Login Button
    const button = cy.get("button");
    button.contains("Login");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Do Login with wrong values", () => {
    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("login failed");
    });
  });
});

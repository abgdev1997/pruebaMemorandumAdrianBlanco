describe("Prueba PeliculasSeries", () => {
  it("Debe contar los elementos según el selector de cartas por pagina", () => {
    cy.visit("/peliculas");

    cy.get('[data-cy="cardsPerPageSelector"]').select("5");

    cy.get('[data-cy="rodajesList"] [data-cy="card"]').should('have.length', 5)

    cy.get('[data-cy="cardsPerPageSelector"]').select("10");

    cy.get('[data-cy="rodajesList"] [data-cy="card"]').should('have.length', 10)

    cy.get('[data-cy="cardsPerPageSelector"]').select("15");

    cy.get('[data-cy="rodajesList"] [data-cy="card"]').should('have.length', 15)
  });

  it("Debe comprobar que filtra por año", () => {
    cy.visit("/peliculas");

    cy.get('[data-cy="yearSelector"]').select("2012");

    cy.get('[data-cy="The Hunger GamesReleaseYear"]').contains("2012")
  });

  it("Debe comprobar que pasa de página", () => {
    cy.visit("/peliculas");

    cy.scrollTo('bottom')

    cy.get('[data-cy="siguientePagina"]').scrollIntoView().click();

    cy.get('[data-cy="paginaNumber"]').contains("Página 2")

    cy.get('[data-cy="anteriorPagina"]').scrollIntoView().click();

    cy.get('[data-cy="paginaNumber"]').contains("Página 1")
  });
});

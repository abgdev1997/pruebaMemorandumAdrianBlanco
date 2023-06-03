describe('Probando Home', () => {
  it('Redirecciona al hacer clic en el botón Películas', () => {
    cy.visit('/')
    
    cy.get('[data-cy="peliculasButton"]').click()
    
    cy.url().should('include', '/peliculas')

    cy.get('[data-cy="logo"]').click()

    cy.url().should('include', '/')
  })

  it('Redirecciona al hacer clic en el botón Series', () => {
    cy.visit('/')
    
    cy.get('[data-cy="seriesButton"]').click()
    
    cy.url().should('include', '/series')

    cy.get('[data-cy="logo"]').click()

    cy.url().should('include', '/')
  })

  it('Debe contar los elementos de los estrenos de peliculas', () => {
    cy.visit('/')
    
    cy.get('[data-cy="estrenosMovies"] [data-cy="card"]').should('have.length', 5)
  })
  
  it('Debe contar los elementos de los estrenos de series', () => {
    cy.visit('/')
    
    cy.get('[data-cy="estrenosSeries"] [data-cy="card"]').should('have.length', 5)
  })
})
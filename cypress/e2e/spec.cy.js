describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qa-practice.netlify.app/products_list')
  })
})

describe('page load', () => {
  it('purchase button is visible ', () => {
    cy.visit('https://qa-practice.netlify.app/products_list')
    cy.contains('PURCHASE').should("be.visible")
  })
})
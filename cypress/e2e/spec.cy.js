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

describe("Products list and shopping cart", () => {
  it("should add a product to the cart and update the total", () => {
    cy.visit('https://qa-practice.netlify.app/products_list')
    cy.get(".shop-item").first().find(".shop-item-button").click();
    cy.get(".cart-items")
      .find(".cart-row")
      .should("have.length", 1)
      .should("be.visible");
    cy.get(".cart-total-price")
      .should("contain", "$905.99")
      .should("be.visible");
  });

  it("should add few products after purchase", () => {
    cy.visit('https://qa-practice.netlify.app/products_list')
    cy.get(".shop-item")
      .eq(0)
      .find(".shop-item-button")
      .click()
      .should("be.visible");
    cy.get(".shop-item")
      .eq(1)
      .find(".shop-item-button")
      .click()
      .should("be.visible");
    cy.get(".btn-purchase").click();
    cy.get("#message").should("be.visible");
  });

  it("should remove product from shopping list", () => {
    cy.visit('https://qa-practice.netlify.app/products_list')
    cy.get(".shop-item")
      .eq(2)
      .find(".shop-item-button")
      .click();
    cy.get(".shop-item")
      .eq(3)
      .find(".shop-item-button")
      .click();
    cy.contains("button", "REMOVE").click();
  });


});







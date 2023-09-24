describe('Cart', function(){

  beforeEach(function(){
    cy.visit('https://demo.nopcommerce.com/')
  })

  it('Verify', function(){
    cy.title().should('eq','nopCommerce demo store')

    //for search
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    //click on search
    cy.xpath("//button[contains(text(),'Search')]").click()
    //get the product
    cy.get('.product-title > a').click()
    //click add to cart
    cy.get('#add-to-cart-button-4').click()
    cy.wait(3000)
    //shopping cart
    cy.xpath("//a[contains(text(),'shopping cart')]").click()
    //Assertion of price
    cy.get('.product-unit-price').contains('$1,800.00')
    cy.wait(3000)
    cy.get('.product-subtotal').contains('$3,600.00')

    
  })
})
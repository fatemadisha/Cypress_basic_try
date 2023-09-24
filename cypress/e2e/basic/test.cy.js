describe("First Cypress", function(){
    it("visit",function(){
        cy.visit('https://www.shohoz.com/')
        cy.get('.icon-bus').click()
        cy.get('#dest_from').type("Dhaka")
    })

})
describe('Contact Us', () => {
    it.skip('1- Visit website', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    });
    it.skip('2- Select elements by ID', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        
        //Select an element by its id attribute using the # character:
        cy.get('#contact-us').click()

        //Select element by class
        });
        it.skip('3- Select elements by class' ,()=>{  
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html") 
        
        //Slecting an element by its class = .class_name
        cy.get('.contact_button').first().click()
        //cy.get('.contact_button').last().click()
        
        });
        it('4- Select elements by attributes or CSS Selector__[+ Scenario]', () => {
            cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('[name="first_name"]').type("H")
            cy.get('[name="last_name"]').type("Dabour")
            cy.get('[name="email"]').type("sexysousou@hotmail.net")
            cy.get('.feedback-input').eq(3).type("Ahmad Mekky sends his regards")
            cy.get('[type="submit"]').click()
            cy.url().should('include','thank-you')
            cy.title().should('include','Designer')
        });
        it('5- Select elements by attributes or CSS Selector__[- Scenario]', () => {
            cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('[name="first_name"]').type("H")
            cy.get('[name="last_name"]').type("Dabour")
            cy.get('[name="email"]').type("sexysousou@hotmail.net")
            cy.get('.feedback-input').eq(3).type("Ahmad Mekky sends his regards")
            cy.get('[type="submit"]').click()
            //cy.contains("all fields are required").should('be.exist')
        });
        it("6- Assertion by attributes and css", () => {
            cy.visit("https://www.webdriveruniversity.com/");
            cy.get('[href="Contact-Us/contactus.html"]').should('have.attr','target','_blank')
            cy.get('[href="Contact-Us/contactus.html"]').should('have.css','font-size','14px')
        });
    });
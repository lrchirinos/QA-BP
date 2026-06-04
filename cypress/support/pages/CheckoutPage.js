class CheckoutPage {
    llenarFormulario(nombre, apellido, codigoPostal) {
        cy.get('[data-test="firstName"]').type(nombre);
        cy.get('[data-test="lastName"]').type(apellido);
        cy.get('[data-test="postalCode"]').type(codigoPostal);
    }

    continuar() {
        cy.get('[data-test="continue"]').click();
    }

    finalizarCompra() {
        cy.get('[data-test="finish"]').click();
    }

    verificarOrdenCompletada() {
        // verficador para verificar que hemos comprado exitosamente
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    }
}

export const checkoutPage = new CheckoutPage();
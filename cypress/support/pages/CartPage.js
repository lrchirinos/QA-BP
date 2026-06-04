class CartPage {
    clickCheckout() {
        cy.get('[data-test="checkout"]').click();
    }
}

export const cartPage = new CartPage();
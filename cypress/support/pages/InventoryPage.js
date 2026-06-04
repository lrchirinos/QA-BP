class InventoryPage {
    agregarBackpack() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    agregarBikeLight() {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    irAlCarrito() {
        cy.get('.shopping_cart_link').click();
    }
}

export const inventoryPage = new InventoryPage();
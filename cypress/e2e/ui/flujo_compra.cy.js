import { loginPage } from '../../support/pages/LoginPage';
import { inventoryPage } from '../../support/pages/InventoryPage';
import { cartPage } from '../../support/pages/CartPage';
import { checkoutPage } from '../../support/pages/CheckoutPage';

describe('Prueba E2E - Flujo de compra en Saucedemo', () => {
    
    it('Debe completar una compra exitosamente', () => {
        // primero nos logeamos usando el modulo de loginPage
        loginPage.visitarPagina();
        loginPage.ingresarCredenciales('standard_user', 'secret_sauce');
        loginPage.clickLogin();

        // Segundo agregamos al carrito y damos click en el carrito usando el modulo inventoryPage
        inventoryPage.agregarBackpack();
        inventoryPage.agregarBikeLight();
        inventoryPage.irAlCarrito();

        // tercero usamos el modulo cartPage para darclick en el checkout
        cartPage.clickCheckout();

        //cuarto dentro del checkout llenamos el formulario en este caso con mis datos
        checkoutPage.llenarFormulario('Luis Rolando', 'Chirinos Hualcas', '13001');
        checkoutPage.continuar();

        // Finalmente compramos y verificamos la orden de completada con el mensaje: "Thank you for your order!"
        checkoutPage.finalizarCompra();
        checkoutPage.verificarOrdenCompletada();
    });

});
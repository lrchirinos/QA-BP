class LoginPage {

    usernameInput() { 
        return cy.get('[data-test="username"]'); 
    }
    
    passwordInput() { 
        return cy.get('[data-test="password"]'); 
    }
    
    loginButton() { 
        return cy.get('[data-test="login-button"]'); 
    }

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    ingresarCredenciales(usuario, password) {
        this.usernameInput().type(usuario);
        this.passwordInput().type(password);
    }

    clickLogin() {
        this.loginButton().click();
    }
}

export const loginPage = new LoginPage();
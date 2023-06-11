class LoginPage{
    static get username(){
        return cy.get("#txt-username");
    }
    static get password(){
        return cy.get("#txt-password");
    }
    static get login(){
        return cy.get("#btn-login");
    }
}
export default LoginPage;
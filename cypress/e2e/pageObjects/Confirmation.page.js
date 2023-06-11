class ConfirmationPage{
    static get confFacility(){
        return cy.get("#facility");
    }
    static get confReadmission(){
        return cy.get("#hospital_readmission");
    }
    static get confProgram(){
        return cy.get("#program");
    }
    static get confDate(){
        return cy.get("#visit_date");
    }
    static get confComment(){
        return cy.get("#comment");
    }
}
export default ConfirmationPage;
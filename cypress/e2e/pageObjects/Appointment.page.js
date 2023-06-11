class AppointmentPage{
    static get facility(){
        return cy.get("#combo_facility");
    }
    static get readmission(){
        return cy.get("#chk_hospotal_readmission");
    }
    static get helthcareProgram(){
        return cy.get("#radio_program_medicaid");
    }
    static get dateWidget(){
        return cy.get(".input-group-addon");
    }
    static get selectDate(){
        return cy.contains('td', '30');
    }
    static get closeDateWidget(){
        return cy.get('#txt_visit_date');
    }
    static get comment(){
        return cy.get("#txt_comment");
    }
    static get bookAppointment(){
        return  cy.get("#btn-book-appointment");
    }
    static get menuBurger(){
        return cy.get("#menu-toggle");
    }
    static get sideBar(){
        return cy.get("#sidebar-wrapper");
    }
    static get historyRedirect(){
        return cy.contains('li','History');
    }
}
export default AppointmentPage;
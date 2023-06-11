import LoginPage from "./pageObjects/Login.page";
import HomePage from "./pageObjects/Home.page";
import AppointmentPage from "./pageObjects/Appointment.page";
import HistoryPage from "./pageObjects/History.page";
import ConfirmationPage from "./pageObjects/Confirmation.page";
describe('template spec', () => {
  context("Make an appointment", () => {
      beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
      });
      it("Make an appointment", () => {
        //Click - Make Appointment
        HomePage.makeAppointment.click();
        //Set username and password fields with the demo account credentials
        LoginPage.username.type("John Doe");
        LoginPage.password.type("ThisIsNotAPassword");
        //Click - Login
        LoginPage.login.click();
        //Facility - Seoul CURA Healthcare Center
        AppointmentPage.facility.select("Seoul CURA Healthcare Center");
        //Check - Apply for hospital readmission
        AppointmentPage.readmission.click();
        //Select - Medicaid
        AppointmentPage.helthcareProgram.click();
        //Set Date value by using the widget - 30
          //click widget
          AppointmentPage.dateWidget.click();
          //Select date 30
          AppointmentPage.selectDate.click();
          //Close widget
          AppointmentPage.closeDateWidget.type('{esc}')
        //Set comment - CURA Healthcare Service
        AppointmentPage.comment.type("CURA Healthcare Service");
        //Click - Book Appointment
        AppointmentPage.bookAppointment.click();
        //Validate that previously set values are correct
        ConfirmationPage.confFacility.should("have.text","Seoul CURA Healthcare Center");
        ConfirmationPage.confReadmission.should("have.text","Yes");
        ConfirmationPage.confProgram.should("have.text","Medicaid");
        ConfirmationPage.confDate.should("have.text","30/05/2023");
        ConfirmationPage.confComment.should("have.text","CURA Healthcare Service");
      });
      it("Appointment history empty", () => {
        //Click - Make Appointment
        HomePage.makeAppointment.click();
        //Set username and password fields with the demo account credentials
        LoginPage.username.type("John Doe");
        LoginPage.password.type("ThisIsNotAPassword");
        //Click - Login
        LoginPage.login.click();
        //Click - Menu/Stack/Burger icon
        AppointmentPage.menuBurger.click();
        //Validate that the sidebar is active
        AppointmentPage.sideBar.should("have.class","active");
        //Click - History
        AppointmentPage.historyRedirect.click();
        //Validate that - No appointment - is visible
        HistoryPage.noAppointment.should("contain.text","No appointment");
      });
    });
})
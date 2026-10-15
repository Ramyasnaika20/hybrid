//To provide Test Data & objects / elements related to whole application
import { Page } from "@playwright/test";
export class global {
   constructor(public page : Page) {

   }
//*****************Test Data *********************** */
public url      : string = "https://sureshitacademy.in/hrms/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public empfirstName : string = "Sureshit";
public emplastName  : string = "Academy";


//*****************objects/elements ************************* */
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password  : string = "//input[@name='txtPassword']";
public button_login      : string = "//input[@name='Submit']";
public link_logout       : string = "//a[text()='Logout']";
public empInfo_frame     : string = "//iframe[@id='rightMenu']";
public button_addEmployee : string = "//input[@value='Add']";
public textbox_empfirstName : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastName  : string = "//input[@name='txtEmpLastName']";
public button_saveEmployee : string = "//input[@value='Save']";

}

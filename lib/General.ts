//To provide all re-usable functions / methods related to the whole application
import { global } from "./Global";
export class general extends global {
//******User-defined Reusable Functions / Methods *********** */
async openapplication(){
await this.page.goto(this.url);
console.log("Application opened successfully");
}
async login(){
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login completed");
}
async logout(){
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
async addNewEmployee(){
const frame = this.page.frameLocator(this.empInfo_frame);
await frame.locator(this.button_addEmployee).click();
await frame.locator(this.textbox_empfirstName).fill(this.empfirstName);
await frame.locator(this.textbox_emplastName).fill(this.emplastName);
await frame.locator(this.button_saveEmployee).click();
console.log("New employee added successfully");
}
async waitStmt(){
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");
}
}

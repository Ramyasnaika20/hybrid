import { test } from "@playwright/test";
import { general } from "../lib/General";
test.describe('regression test suite',() =>{

    test('Login and Logout Test',async ({ page }) => {
          //--Test Steps
        let obj = new general(page);
        await obj.openapplication();
        await obj.login();
        await obj.logout();                                                                           
    });
test('Add New Employee',async ({ page })=>{
    //Test Steps
  let obj = new general(page);
  await obj.openapplication();
  await obj.waitStmt();
  await obj.login();
  await obj.waitStmt();
  await obj.addNewEmployee();
  await obj.waitStmt();
  await obj.logout();
  await obj.waitStmt();
})

});
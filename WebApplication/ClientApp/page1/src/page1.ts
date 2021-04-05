import { Page1,testUser } from "./Model/index";


const page1: Page1 = new Page1(1, "page1", "page1 title", "test page 1", testUser);

     
alert("page1:" +page1.Name+ " user :" + page1.getUser());
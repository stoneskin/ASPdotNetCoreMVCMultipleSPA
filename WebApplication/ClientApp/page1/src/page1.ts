import { testUser } from "./Model/User";
import { DefaultPage } from "../../shared/src/Page"

export default class Page1 {


    getPage() {

        return DefaultPage;
    };
    getUser() {
        return testUser;
    }


}
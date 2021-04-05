import { IUser } from "./User";
import { Page } from "../../../shared/src/Page"

export default class Page1 implements Page {

    Name: string;
    Title: string;
    Desc: string;
    PageId: number;
    User: IUser;
    constructor(pageid: number, name: string, title: string, desc: string, user: IUser) {
        this.Name = name;
        this.Title = title;
        this.Desc = desc;
        this.PageId = pageid;
        this.User = user;
    }

    getUser(): string {
        if(this.User)
            return this.User.userId;
        return "unknow user";
    }


}


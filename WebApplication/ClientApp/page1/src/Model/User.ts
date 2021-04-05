export interface IUser {
    userId: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
}

const testUser: IUser = {
    emailAddress: "email",
    firstName: "fname",
    lastName: "lname",
    userId: "testUser",
};

export default IUser;
export { testUser };

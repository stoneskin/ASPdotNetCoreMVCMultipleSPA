export interface User {
    userId: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
}

const testUser: User = {
    userId: "testUser",
    emailAddress: "email",
    firstName: "fname",
    lastName:"lname"

}

export default User
export { testUser }
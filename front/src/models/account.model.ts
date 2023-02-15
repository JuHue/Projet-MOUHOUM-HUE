export class account {
    accountId: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    telephone: string;
    affiliateTo: number;

    constructor(accountId: number, email: string, username: string, password: string, firstName: string, lastName: string, telephone: string, affiliateTo: number) {
        this.accountId = accountId;
        this.email = email;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.affiliateTo = affiliateTo;
    }
}
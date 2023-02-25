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

    // generate all getters and setters
    public getAccountId = () => this.accountId;
    public setAccountId = (accountId: number) => this.accountId = accountId;
    public getEmail = () => this.email;
    public setEmail = (email: string) => this.email = email;
    public getUsername = () => this.username;
    public setUsername = (username: string) => this.username = username;
    public getPassword = () => this.password;
    public setPassword = (password: string) => this.password = password;
    public getFirstName = () => this.firstName;
    public setFirstName = (firstName: string) => this.firstName = firstName;
    public getLastName = () => this.lastName;
    public setLastName = (lastName: string) => this.lastName = lastName;
    public getTelephone = () => this.telephone;
    public setTelephone = (telephone: string) => this.telephone = telephone;
    public getAffiliateTo = () => this.affiliateTo;
    public setAffiliateTo = (affiliateTo: number) => this.affiliateTo = affiliateTo;

    public toString = () => {
        return `account: {accountId: ${this.accountId}, email: ${this.email}, username: ${this.username}, password: ${this.password}, firstName: ${this.firstName}, lastName: ${this.lastName}, telephone: ${this.telephone}, affiliateTo: ${this.affiliateTo}}`;
    }

    public toJSON = () => {
        return {
            accountId: this.accountId,
            email: this.email,
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            telephone: this.telephone,
            affiliateTo: this.affiliateTo
        }
    }

    public fromJSON = (json: any) => {
        this.accountId = json.accountId;
        this.email = json.email;
        this.username = json.username;
        this.password = json.password;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.telephone = json.telephone;
        this.affiliateTo = json.affiliateTo;
    }

    public fromJSONString = (jsonString: string) => {
        this.fromJSON(JSON.parse(jsonString));
    }


    public clone = () => {
        return new account(this.accountId, this.email, this.username, this.password, this.firstName, this.lastName, this.telephone, this.affiliateTo);
    }

    public equals = (other: account) => {
        return this.accountId === other.accountId && this.email === other.email && this.username === other.username && this.password === other.password && this.firstName === other.firstName && this.lastName === other.lastName && this.telephone === other.telephone && this.affiliateTo === other.affiliateTo;
    }
}
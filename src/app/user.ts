export class User {
    firstName: string;
    lastName: string;
    phone: number;
    address: string;
    constructor(firstName: string, lastName: string, phone: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address
    }
}

export class Customer{
    emailId:string;
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    title:string;
    phoneNumber:number;
    password:string;

    constructor(emailId:string, firstName:string, lastName:string, dateOfBirth:Date, title:string, phoneNumber:number, password:string){
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.title = title;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}
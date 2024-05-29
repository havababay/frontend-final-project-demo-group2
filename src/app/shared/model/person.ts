import { PhoneNumber } from "./phone-number";

export class Person {
    phones : PhoneNumber[] = [];

    constructor(public id : string,
        public firstName : string,
        public lastName : string,
        public email : string,
        public age? : number,
        public birthday? : Date){ 
        }
    
    fullName() : string {
        return this.firstName + " " + this.lastName;
    }
}
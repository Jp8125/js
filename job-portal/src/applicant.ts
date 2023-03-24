import { person } from "./person";

class applicant implements person{
    id: number;
    name:string;
    address: string;
    dob: Date;
    gender: string;
    result:string
    constructor(id:number,name:string,address:string,dob:Date,gender:string){
        this.name=name;
        this.address=address;
        this.dob=dob;
        this.gender=gender;
        this.id=id;
        this.result="fail"
    }
    accept():void{
        alert("response sent")
    }
    reject():void{
        alert("response sent")
    }
}
let adetails:applicant[]=[
    new applicant(1,"shivam","28 Ala Kopiko Street, Honolulu,hi, 96818  United States", new Date("12,8,2001"),"male"),
    new applicant(2,"mahesh","28 Ala Kopiko Street, Honolulu,hi, 96818  United States", new Date("12,1,2003"),"male")
];
function apply():void{
    alert("applied success fully")
}

export {applicant,adetails,apply}
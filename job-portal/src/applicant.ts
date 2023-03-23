import { person } from "./person";

class applicant implements person{
    id: number;
    name:string;
    address: string;
    dob: Date;
    gender: string;
    constructor(id:number,name:string,address:string,dob:Date,gender:string){
        this.name=name;
        this.address=address;
        this.dob=dob;
        this.gender=gender;
        this.id=id;
    }
    accept():void{
        alert("resopnse sent")
    }
    reject():void{
        alert("resopnse sent")
    }
}
let adetails:applicant[]=[];
function apply():void{
    alert("applied success fully")
    let aobj=new applicant(1,"rahul","address",new Date("12,8,2001"),"male");
    adetails.push(aobj);
}
export {applicant,adetails,apply}
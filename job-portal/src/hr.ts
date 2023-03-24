import { person } from "./person";
import { Vacancy,vacarr } from "./vac";
import { adetails,applicant } from "./applicant";
class hr implements person{
    id:number
    name: string;
    gender: string;
    constructor(id:number,name:string,gender:string){
        this.name=name;
        this.gender=gender;
        this.id=id
    }
}
function createvac(role:string,date:string,dept:string,opening:number):void{
    
  let id_v=Math.round(Math.random()*100);
    let v=new Vacancy(id_v,role,new Date(date),dept,opening)
    vacarr.push(v)
}
function store(id:number,name:string,address:string,date:string,gender:string) {
    let aobj=new applicant(id,name,address,new Date(date),gender);
    adetails.push(aobj);
}
// let h1=new hr(2,"Sunil","male");
export {hr,createvac,store}
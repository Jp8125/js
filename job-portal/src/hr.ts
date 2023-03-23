import { person } from "./person";
import { Vacancy,vacarr } from "./vac";
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
function createvac():void{
    let d=new Date("23,4,2001")
    let v=new Vacancy(1,"devloper",d,"dotnet",23)
    vacarr.push(v)
}
// let h1=new hr(2,"Sunil","male");
export {hr,createvac}
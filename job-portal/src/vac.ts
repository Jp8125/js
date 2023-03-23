class Vacancy{
    vid:number;
    vtype:string;
    vdate:Date;
    vdept:string;
    nvac:number;
    constructor(id:number,type:string,date:Date,dept:string,n:number){
                this.vid=id;
                this.vtype=type
                this.vdate=date;
                this.vdept=dept;
                this.nvac=n;
    }
}
let v1=new Vacancy(1,"devloper",new Date("12,8,2022"),"dotnet",2)
let v2=new Vacancy(2,"devloper",new Date("12,8,2022"),"python",4)
let v3=new Vacancy(3,"devloper",new Date("12,8,2022"),"react",3)
let v4=new Vacancy(4,"devloper",new Date("12,8,2022"),"sales",1)
let vacarr:Vacancy[]=[]
vacarr.push(v1,v2,v3,v4)
export {Vacancy,vacarr}

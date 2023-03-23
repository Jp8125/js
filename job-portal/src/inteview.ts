class Interview{
    id:number;
    date:Date;
    result:string;
    interviewer:string;
    candidateid:number;
    constructor(id:number,date:Date,result:string,name:string,cid:number)
    {
        this.id=id;
        this.date=date;
        this.result=result;
        this.interviewer=name;
        this.candidateid=cid;
    }

}
function schedule():void{

}
export {Interview,schedule}
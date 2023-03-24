class Interview{
    id:number;
    date:Date;
    interviewer:string;
    candidateid:number;
    constructor(id:number,date:Date,name:string,cid:number)
    {
        this.id=id;
        this.date=date;
        this.interviewer=name;
        this.candidateid=cid;
    }

}
let interviewarr:Interview[]=[]
function schedule(id:number,date:Date,cid:number):void{
    let i1=new Interview(id,date,"interviewer1",cid)
    interviewarr.push(i1)
}
export {Interview,schedule}
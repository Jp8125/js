import * as apllicant from "./applicant"
import { createvac } from "./hr";
import { Vacancy, vacarr } from "./vac";
function display(vacarr:Vacancy[]):void {
  let vac:string=""
  let i:number=0;
  for (const item of vacarr) {
        vac+=`<div class="card">
        <div class="card-body">
          <h4 class="card-title">Department:${item.vdept}</h4>
          <p class="card-text">Role:${item.vtype}</p>
          <p class="cadr-text">Date:${item.vdate.getDate()}/${item.vdate.getMonth()}/${item.vdate.getFullYear()}</p>
          <div class="container d-flex justify-content-center"><button id="btn${i}">Apply</button></div>
        </div>
      </div>`
      i++;
      console.log(vac)
      document.getElementById(
        "app"
      )!.innerHTML = vac;
  }
  
}
display(vacarr);
for (let i = 0; i < vacarr.length; i++) {
  var btn=document.getElementById("btn"+i);
  btn?.addEventListener("click",()=>{
     apllicant.apply()
     console.log(apllicant.adetails)
  })
}
var cv=document.getElementById("create");
cv?.addEventListener("click",()=>{
  console.log(vacarr)
  createvac();
  display(vacarr)
})


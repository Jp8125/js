import * as apllicant from "./applicant";
import { createvac, store } from "./hr";
import { Vacancy, vacarr } from "./vac";
declare global {
  interface Window {  
  hire: Function;
  }
  }
function display(vacarr: Vacancy[]): void {
  let vac: string = "";
  let i: number = 0;
  for (const item of vacarr) {
    vac += `<div class="card mx-1 my-2 ">
        <div class="card-body">
          <h4 class="card-title">Department:${item.vdept}</h4>
          <p class="card-text">Role:${item.vtype}</p>
          <p class="cadr-text">Date:${item.vdate.getDate()}/${item.vdate.getMonth() + 1
      }/${item.vdate.getFullYear()}</p>
          <div class="container d-flex justify-content-center"><button id="btn${i}">Apply</button></div>
        </div>
      </div>`;
    i++;
  }
  document.getElementById("app")!.innerHTML = vac;
}
display(vacarr);
for (let i = 0; i < vacarr.length; i++) {
  var btn = document.getElementById(`btn${i}`);
  btn?.addEventListener("click", () => {
    apllicant.apply();
    console.log(apllicant.adetails);
  });
}
var cv = document.getElementById("create");
cv?.addEventListener("click", () => {
  let role: HTMLInputElement | any = document.getElementById("role");
  let dept: HTMLInputElement | any = document.getElementById("dept");
  let n: HTMLInputElement | any = document.getElementById("vacNo");
  let date: HTMLInputElement | any = document.getElementById("date");
  if (
    role!.value == "" ||
    date!.value == "" ||
    dept!.value == "" ||
    n!.value == ""
  ) {
    alert("please add data");
  } else {
    createvac(role!.value, date!.value, dept!.value, parseInt(n!.value));
  }
  display(vacarr);
});
// add aplicant by form
document.getElementById("applicant")!.innerHTML += `
<div class="p-5 border">
<div class="row">
  <label for="id" class="col">Id</label>
  <input type="number" id="id" class="col">
</div>
<div class="row my-3">
  <label for="name" class="col">Name:</label>
  <input type="text" class="col" id="name">
</div>
<div class="row ">
  <label for="date" class="col">Dob:</label>
  <input type="date" id="dob" class="col">
</div>
<div class="row my-3" >
  <label for="address" class="col">Address:</label>
  <textarea name="address" class="col" id="address1" cols="30" rows="4"></textarea>
</div>
<div class="row ">
<div class="col">
<label class="form-check-label" for="gender">
 Gender:
</label>
</div>
<div class="col">
<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="male" vlaue="male">
<label class="form-check-label" for="male">
 Male
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="female" value="female">
<label class="form-check-label" for="female">
  female
</label>
</div>
</div>
</div>
<div class="mt-3 d-flex justify-content-center">
  <button class="btn btn-warning text-white" id="add">Add</button>
</div>
</div>`;
document.getElementById("applicant")!.innerHTML += `<h1 class="text-center">Applicant data</h1>`
document.getElementById("applicant")!.innerHTML += `<table class="table table-stripped border mt-2" >
<thead>
<tr>
  <th>Id</th>
  <th>Name</th>
  <th>Address</th>
  <th>DOB</th>
  <th>Gender</th>
  <th>decision</th>
  <th>Inrteview</th>
</tr>
</thead>
<tbody id="show_applicant"></tbody>
</table>`
function dis_applicant(): void {
  document.getElementById("show_applicant")!.innerHTML = ``
  for (let i = 0; i < apllicant.adetails.length; i++) {
    document.getElementById("show_applicant")!.innerHTML += `
    <tr><td>${apllicant.adetails[i].id}</td><td>${apllicant.adetails[i].name}</td><td>${apllicant.adetails[i].address}</td><td>${apllicant.adetails[i].dob.getDate()}/${apllicant.adetails[i].dob.getMonth()}/${apllicant.adetails[i].dob.getFullYear()}</td><td>${apllicant.adetails[i].gender}</td>
    <td><button class="btn btn-primary" id="hire${i}" value="hire${i}" >Hire</button></td>
    <td><button class="btn btn-primary" id="schedule${i}">schedule inteview</button></td></tr>`
  }
} 

dis_applicant();
let add_applicant = document.getElementById("add");
add_applicant!.addEventListener("click", () => {
  let id: HTMLInputElement | any = document.getElementById("id");
  let name: HTMLInputElement | any = document.getElementById("name");
  let dob: HTMLInputElement | any = document.getElementById("dob");
  let address: HTMLTextAreaElement | any = document.getElementById("address1");
  let male: HTMLInputElement | any = document.getElementById("male");
  let female: HTMLInputElement | any = document.getElementById("female")
  let gender: string = "";
  if (male.checked == true) {
    gender = "male";

  }
  else if (female.checked == true) {
    gender = "female"

  }
  if (name == "" || id == "" || dob == "" || address == "" || gender == "") {
    alert("enter applicant data")
  }
  else {
    // console.log(id.value,name.value,gender,address.value,dob.value)
    store(parseInt(id.value), name.value, address.value, dob.value, gender)
    dis_applicant()
  }
})
for (let i = 0; i < apllicant.adetails.length; i++) {
  document.getElementById(`hire${i}`)!.addEventListener("click", () => {
    document.getElementById(`hire${i}`)!.innerHTML = "Hired";
    apllicant.adetails[i].result="pass"
  });
  
}


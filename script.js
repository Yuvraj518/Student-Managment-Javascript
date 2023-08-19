const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
]; 
console.log(students)
let op1=document.getElementById("name");
let op2=document.getElementById("email");
let op3=document.getElementById("age");
let op4=document.getElementById("gpa");
let op5=document.getElementById("degree");
let btn=document.querySelector("button");
console.log(btn)
let count=0;
function displayStudents(students){
    console.log("hii")
    document.getElementById("tb1").innerHTML=``;
    students.forEach(x => {
      const ele1=document.createElement("tr");
      ele1.innerHTML=`<td>${x.ID}</td>
      <td>${x.name}</td>
      <td>${x.email}</td>
      <td>${x.age}</td>
      <td>${x.grade}</td>
      <td>
        <div class="degree">
          <div class="dg1">${x.degree}</div>
          <div class="dg2">
            <div class="edit"><img src="./edit 1.png" alt="edit"></div>
            <div class="del"><img src="./trash-2 1.png" alt="del"></div>
          </div>
        </div>
      </td>`
      count++;
      document.getElementById("tb1").appendChild(ele1);
    });
}

function callAdd(){
    console.log("clicked")
    students.push({
        ID: `${(students.length)+1}`,
        name: `${op1.value}`,
        age: `${op3.value}`,
        grade: `${op4.value}`,
        degree: `${op5.value}`,
        email: `${op2.value}`
      })
      console.log(students)
      displayStudents(students);
}
btn.addEventListener("click",callAdd);

document.getElementById("search").addEventListener("input",(e)=>{
  const inp1=e.target.value.trim().toLowerCase();
  const filtredStudents=students.filter((x)=> 
  (x.name.toLowerCase().includes(inp1) || x.email.toLowerCase().includes(inp1)|| x.degree.toLowerCase().includes(inp1)))
  displayStudents(filtredStudents);
});

// document.getElementsByClassName("edit").addEventListener("click",()=>{
//   console.log("swim")
// })
// students.forEach(x => {
//   x.addEventListener("click",()=>{
//     students.remove(x);
//   })
// });

console.log("okk")
displayStudents(students);



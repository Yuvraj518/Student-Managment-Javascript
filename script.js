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
let btn=document.getElementById("btn")
let btn1=document.getElementById("btn1")

function displayStudents(students){
    // console.log("hii",students)
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
            <div class="edit" onclick="editFun(${x.ID})"><img src="./edit 1.png" alt="edit"></div>
            <div class="del"  onclick="delFun(${x.ID})"><img src="./trash-2 1.png" alt="del"></div>
          </div>
        </div>
      </td>`
      document.getElementById("tb1").appendChild(ele1);
    });
}

let count=4;
function callAdd(){
    console.log("Adding student function called")
    students.push({
        ID: `${(count)}`,
        name: `${op1.value}`,
        age: `${op3.value}`,
        grade: `${op4.value}`,
        degree: `${op5.value}`,
        email: `${op2.value}`
      })
      count++;
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


function editFun(id1){
  btn.style.display=`none`
  btn1.style.display=`block`
  console.log(id1)
  const st1=students.find((s)=>s.ID===id1);
  op1.value=st1.name
  op2.value=st1.email
  op3.value=st1.age
  op4.value=st1.grade
  op5.value=st1.degree
  btn1.addEventListener("click",()=>{
    console.log("qa",st1)
    st1.name=op1.value;
    st1.email=op2.value
    st1.age=op3.value
    st1.grade=op4.value;
    st1.degree=op5.value
    btn1.style.display=`none`
    btn.style.display=`block`
    displayStudents(students);
  })
}



function delFun(id2){
  const confirmation=prompt("If you are sure write 'y' or else write 'n'.")
  if(confirmation.toLowerCase()==`y`){
    const index1=students.findIndex((s)=>s.ID===id2)
    students.splice(index1,1);
    displayStudents(students);
    alert("Deleted Successfully")
  }
}


console.log("Let's Start")
displayStudents(students);



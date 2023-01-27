const table_1_var = document.getElementById("table_1");
const table_2_var = document.getElementById("table_2");
const table_3_var = document.getElementById("table_3");
const table_4_var = document.getElementById("table_4");
const table_5_var = document.getElementById("table_5");
const table_6_var = document.getElementById("table_6");
const table_7_var = document.getElementById("table_7");
const table_8_var = document.getElementById("table_8");
const table_9_var = document.getElementById("table_9");
const table_10_var = document.getElementById("table_10");
const table_11_var = document.getElementById("table_11");
const table_12_var = document.getElementById("table_12");

let table_content_1 = ` <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Birthday</th>
    <th>Age</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>score</th>
  </tr>`;
let table_content_2 = ` <tr>

    <th>Name</th>

    <th>Email</th>

  </tr>`;
let table_content_4 = ` <tr>

    <th>Name</th>

    <th>Birthday</th>

  </tr>`;
let table_content_5 = ` <tr>

    <th>Name</th>



  </tr>`;
let table_content_6 = "";

let table_content_7 = ` <tr>

    <th>Name</th>

    <th>mobile</th>

  </tr>`;
let table_content_9 = ` <tr>

    <th>Name</th>

    <th>score</th>

  </tr>`;
let table_content_10 = ` <tr>

    <th>Name</th>

    <th>age</th>

  </tr>`;
let table_content_11 = ` <tr>

    <th>Name</th>

    <th>password</th>

  </tr>`;
let table_content_12 = ` <tr>

    <th>Name</th>
    <th>ID</th>

    <th>Winner</th>

  </tr>`;
let response = fetch("data.json").then((response) => {
  return response.json().then((data) => {
    table_1(data);
    table_2(data);
    table_3(data);
    table_4(data);
    table_5(data);
    table_6(data);
    table_7(data);
    table_8(data);
    table_9(data);
    table_10(data);
    table_11(data);
    table_12(data);
  });
});
function table_1(data) {
  data.forEach((element) => {
    table_content_1 =
      table_content_1 +
      `
         <tr>
           <td>${element.id}</td>
           <td>${element.name}</td>
           <td>${element.birthday}</td>
           <td>${element.age}</td>
           <td>${element.email}</td>
           <td>${element.mobile}</td>
           <td>${element.score}</td>
       
         </tr>
         `;
  });

  table_1_var.innerHTML = table_content_1;
}

function table_2(data) {
  data.forEach((element) => {
    element.email.includes("gmail")
      ? (table_content_2 =
          table_content_2 +
          `
         <tr>
        <td>${element.name}</td>
           <td>${element.email}</td>
         </tr>
         `)
      : "";
  });

  table_2_var.innerHTML = table_content_2;
}

function table_3(data) {
  let filteredData = data.filter((element) => {
    return element.age > 25;
  });

  const sum = filteredData.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.age),
    0
  );
  let avg = sum / filteredData.length;

  table_3_var.innerHTML = `
  <tr>
  <td>Average</td>
 <td>${avg}</td>

  </tr>
  `;
}
function table_4(data) {
  let filteredData = data.filter((element) => {
    return element.birthday != "Mon";
  });

  filteredData.forEach((element) => {
    table_content_4 =
      table_content_4 +
      `
         <tr>
        <td>${element.name}</td>
           <td>${element.birthday}</td>
         </tr>
         `;
  });

  table_4_var.innerHTML = table_content_4;
}

function table_5(data) {
  let filteredData = data.filter((element) => {
    return element.name.charAt(0).toLowerCase() == "a";
  });
  console.log(filteredData);

  filteredData.forEach((element) => {
    table_content_5 =
      table_content_5 +
      `
         <tr>
        <td>${element.name}</td>
         </tr>
         `;
  });

  table_5_var.innerHTML = table_content_5;
}
function table_6(data) {
  let set = new Set();

  data.forEach((e) => {
    set.add(e.birthday);
  });

  console.log();
  [...set].forEach((element) => {
    table_content_6 =
      table_content_6 +
      `
    <tr>
    <td>birthday</td>
   <td>${element}</td>
  
    </tr>
    `;
  });

  table_6_var.innerHTML = table_content_6;
}

function table_7(data) {
  data.forEach((element) => {
    element.mobile.includes("0")
      ? (table_content_7 =
          table_content_7 +
          `
           <tr>
          <td>${element.name}</td>
             <td>${element.mobile}</td>
           </tr>
           `)
      : "";
  });

  table_7_var.innerHTML = table_content_7;
}

function table_8(data) {
  let filteredData = data.filter((element) => {
    return element.score > 60;
  });

  const sum = filteredData.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.score),
    0
  );
  let avg = sum / filteredData.length;

  table_8_var.innerHTML = `
    <tr>
    <td>score Average</td>
   <td>${avg}</td>
  
    </tr>
    `;
}

function table_9(data) {

  array = data.sort(function (a, b) {
    return a.score - b.score;
});
console.log(array);


array.reverse().forEach((element,i) => {
    if(i<3){
    table_content_9 =
      table_content_9 +
      `
           <tr>
          <td>${element.name}</td>
             <td>${array[i].score}</td>
           </tr>
           `;}
  });

  table_9_var.innerHTML = table_content_9;
}

function table_10(data) {
  let filteredData = data.filter((element) => {
    return element.age > 30;
  });

  filteredData.forEach((element) => {
    table_content_10 =
      table_content_10 +
      `
           <tr>
          <td>${element.name}</td>
             <td>${element.age}</td>
           </tr>
           `;
  });

  table_10_var.innerHTML = table_content_10;
}

function table_11(data) {
  let passwords = data.map((element) => {
    let password = "";
    let letters = [...(element.name + element.birthday + element.mobile)];

    for (let index = 0; index < 10; index++) {
      let ran = Math.floor((Math.random() * letters.length));

      password += letters[ran];
    }
    return password;
  });

  data.forEach((element, i) => {
    table_content_11 =
      table_content_11 +
      `
           <tr>
          <td>${element.name}</td>
             <td>${passwords[i]}</td>
           </tr>
           `;
  });

  table_11_var.innerHTML = table_content_11;
}

function table_12(data) {
  let filteredData = data.map((element) => {
    return parseInt(element.id.charAt(0)) % 2 != 0 ? "True" : "false";
  });
  console.log(filteredData);
  data.forEach((element, i) => {
    table_content_12 =
      table_content_12 +
      `
           <tr>
          <td>${element.name}</td>
          <td>${element.id}</td>
             <td>${filteredData[i]}</td>
           </tr>
           `;
  });

  table_12_var.innerHTML = table_content_12;
}

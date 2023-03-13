/* 1. Given the following array and implement the table dynamically;
2. Implement a form for taking the some format input from users(Student
Name，Age，Phone,Address). When the user clicks the Add button, the data will be
added into the existing table, and the user input in the form should be cleared */
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
/* Generate Table Function */
function generateTable(tableInfo) {
  const table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "table-body");
  //establish the thead part
  let createth1 = document.createElement("tr");
  tableInfo.tableHeader.forEach((head) => {
    let newth1 = document.createElement("th");
    newth1.textContent = head;
    createth1.appendChild(newth1);
  });
  thead.appendChild(createth1);
  //establish the tbody part
  for (let i = 0; i < tableInfo.tableContent.length; i++) {
    let createth2 = document.createElement("tr");
    Object.keys(tableInfo.tableContent[i]).forEach((info) => {
      let newth2 = document.createElement("td");
      newth2.textContent = tableInfo.tableContent[i][info];
      createth2.append(newth2);
    });
    tbody.appendChild(createth2);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("table-with-style").appendChild(table);
}
generateTable(tableInfo);

/* Add Elements Into Table Function */
document.getElementById("Add-button").onclick = function () {
  let input = document.getElementById("table-info").value;
  let trimInput = input.trim().split(", ");
  let finalInput = Array(4).fill("");
  finalInput[0] = trimInput[0];
  finalInput[1] = trimInput[1];
  finalInput[2] = trimInput[2];
  finalInput[3] = trimInput.slice(3).join(", ");
  let createth3 = document.createElement("tr");
  finalInput.forEach((details) => {
    let newth3 = document.createElement("td");
    newth3.textContent = details;
    createth3.append(newth3);
  });
  document.getElementById("table-body").appendChild(createth3);
  document.getElementById("table-info").value = "";
};

/* Question 2: Given the array and generate order list and unordered list dynamically */
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//generate the order List
let orderList = document.createElement("ol");
for (let i = 0; i < list.length; i++) {
  let newEle = document.createElement("li");
  newEle.textContent = list[i];
  orderList.appendChild(newEle);
}
document.getElementById("order-list").appendChild(orderList);

//generate the unordered List
let unorderList = document.createElement("ul");
list.forEach((item) => {
  let newEle2 = document.createElement("li");
  newEle2.textContent = item;
  unorderList.appendChild(newEle2);
});
document.getElementById("unordered-list").appendChild(unorderList);

/* Question 3: 1. Given the array and implement a dropdown list with the following options dynamically;
2. Console the value, when the user select one option */
document.getElementById("generate").onclick = function () {
  const dropDownList = [
    { value: "newark", content: "Newark" },
    { value: "santaClara", content: "Santa Clara" },
    { value: "unionCity", content: "Union City" },
    { value: "albany", content: "Albany" },
    { value: "dalyCity", content: "Daly City" },
    { value: "sanJose", content: "San Jose" },
  ];
  let select = document.createElement("select");
  select.name = "California City";
  select.id = "ca-cities";
  dropDownList.forEach((item) => {
    let option = document.createElement("option");
    option.value = item.value;
    option.text = item.content;
    select.appendChild(option);
  });
  document.getElementById("dropdown-list").appendChild(select);
  document.getElementById("generate").style.display = "none"; //let the button disappear once click it
};
document.getElementById("dropdown-list").addEventListener("change", (event) => {
  console.log(event.target.value); //event.target.id
  alert(
    "You just select " + event.target.value + ", please check the Console!"
  );
});

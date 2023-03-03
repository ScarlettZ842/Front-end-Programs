// Question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Generate the new array to double the quantity and price
const doubleItemsObject = itemsObject.map((ele) => {
  return {
    [Object.keys(ele)[0]]: Object.values(ele)[0] * 2,
    [Object.keys(ele)[1]]: Object.values(ele)[1] * 2,
  };
});
console.log("newItemObject: " + JSON.stringify(doubleItemsObject));

// Generate the new array contains item quantity > 2 and price > 300
const conditionItemsObject = itemsObject.filter((ele) => {
  return Object.values(ele)[0] > 2 && Object.values(ele)[1] > 300;
});
console.log("newItemObject: " + JSON.stringify(conditionItemsObject));

// Calcuate the total value of the items
const totalItemsObject = itemsObject.reduce((accumulator, ele) => {
  return accumulator + Object.values(ele)[0] * Object.values(ele)[1];
}, 0);
console.log("totalValue: " + totalItemsObject);

// Question 2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

// Remove all the non-alphabet characters and extra space in the string and convert to lovwercase
console.log(
  "expectedReturnString:" +
    string
      .trim()
      .split(/[ ,-]+/)
      .map((words) => words.toLowerCase())
      .join(" ")
);

//Question 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

/*Merge two arrays of objects on uuid, but first has uuid and
name, second has uuid and role. With the not existing property, fill with null. Sort
according to uuid after merge.*/
//first.forEach((item) => second.splice(second.length, 0, item));  name: matchUUID?.name || null;
const expectedReturnArray = second
  .map((item) => {
    const matchUUID = first.find((ele) => ele.uuid === item.uuid);
    let name = null;
    if (matchUUID && matchUUID.name) {
      name = matchUUID.name;
    }
    return {
      uuid: item.uuid,
      role: item.role,
      name: name,
    };
  })
  .concat(
    first
      .filter((item) => !second.find((ele) => ele.uuid === item.uuid))
      .map((item) => {
        return { uuid: item.uuid, role: null, name: item.name };
      })
  );
expectedReturnArray.sort((a, b) => a.uuid - b.uuid);
console.log("expectedReturnArray: " + JSON.stringify(expectedReturnArray));

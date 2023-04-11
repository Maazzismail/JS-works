// Question no 1

function values(num) {
  return function (a) {
    return num + a;
  };
}
const addFive = values(1);
const result = addFive(3);
console.log(result);

// Question no 2

function searchArray(array, value) {
    if (array.length === 0) {
        return false;
    }
    if (array[0] === value) {
        return true;
    }
    return searchArray(array.slice(1), value);
}
const myArray = [1, 2, 3, 4, 5];
const valueToFind = 3;
const result = searchArray(myArray, valueToFind);
console.log(result);

// Question no 3
function addParagraph(text) {
  var newParagraph = document.createElement("p");

  var textNode = document.createTextNode(text);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
}
addParagraph("....");

// Question no 4

function addList(text) {
  var li = document.createElement("li");
  var itemText = document.createTextNode(text);
  li.appendChild(itemText);

  var ul = document.getElementById("myList");
  ul.appendChild(li);
}
addList("Item 4");

// Question no 5

function bgColor(target, color) {
  target.style.backgroundColor = color;
}
let backGround = document.querySelector("#mytext");
bgColor(backGround, "cyan");


// Question no 6

function getObjectFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    if (storedObject) {
        return JSON.parse(storedObject);
    }
    return null;
}
const myObject = getObjectFromLocalStorage("myKey");
console.log(myObject);

// Question no 7

function saveAndRetrieveFromLocalStorage(obj) {

    for (const property in obj) {
        localStorage.setItem(property, obj[property]);
    }

    const newObj = {};
    for (const property in obj) {
        newObj[property] = localStorage.getItem(property);
    }
    return newObj;
}
const myObj = {
    name: "Maaz",
    age: 21,
};
const newObj = saveAndRetrieveFromLocalStorage(myObj);
console.log(newObj);

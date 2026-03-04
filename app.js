// get element by id
// let msg = document.getElementById("message");
// console.log(msg);
// // get element by class name
// let msg2 = document.getElementsByClassName("message");
// console.log(msg2);
// let msg3 = document.getElementsByClassName("message");
// console.log(msg3);


// using input field  selecting by name
// let inpt = document.getElementsByName("language");
// console.log(inpt);

// using get element by tag name
// let cont = document.getElementById("container");

// let heading = cont.getElementsByTagName("h1");
// console.log(heading);

// let msg = document.querySelector(".message");
// console.log(msg);

// let doc = document.querySelectorAll(".pages");
// console.log(doc);


// reversgin elements
// let txt = document.querySelector(".text");
// console.log(txt.parentNode);
//  let con = document.querySelector(".container");
//  console.log(con.lastElementChild);
//  console.log(con.childNodes);
 
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
document.body.appendChild(div);
console.log(div);



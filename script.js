// function addOrderdList(root, item1, item2, item3) {
//   const body = document.querySelector(root);
//   const ol = document.createElement("ol");
//   const li1 = document.createElement("li");
//   const li2 = document.createElement("li");
//   const li3 = document.createElement("li");

//   const litext1 = document.createTextNode(item1);
//   const litext2 = document.createTextNode(item2);
//   const litext3 = document.createTextNode(item3);

//   li1.appendChild(litext1);
//   li2.appendChild(litext2);
//   li3.appendChild(litext3);

//   ol.appendChild(li1);
//   ol.appendChild(li2);
//   ol.appendChild(li3);

//   body.appendChild(ol);
// }

// addOrderdList("body", "Html", "css", "Js");

function addElement(target, tag, content) {
  const root = document.querySelector(target);
  const element = document.createElement(tag);
  element.innerText = content;
  root.appendChild(element);
}

addElement("body", "h1", "Hello world!");






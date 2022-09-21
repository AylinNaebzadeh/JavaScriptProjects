// **********************  Property(1) => innerText

// const p = document.querySelector("p");
// console.log(p.innerText);


// **********************  Property(2) => textContent

// const p = document.querySelector("p");
// console.log(p.textContent);

// **********************  Property(3) => innerHTML

// const ul = document.querySelector('ul')
// console.log(ul.innerHTML);

// const ul = document.querySelector('ul');
// ul.innerHTML += "<li>Jasem</li>";
// console.log(ul.innerHTML);

//  ******************** Property(4) =>traversing the DOM properties

/*
1- parentElement
2- children
3- previousElementSibling
4- nextElementSibling
*/

// (1)

// const p = document.querySelector('p');
// console.log(p.parentElement);

// (2)
// for accessing body we don't need any query
// const myBody = document.body;
// console.log(myBody.children);
// console.log(myBody.children[0]);
// console.log(myBody.children[4]);

// (3) & (4)

// const item = document.querySelector('ul li:nth-child(2)');
// console.log(item);
// console.log(item.previousElementSibling);
// console.log(item.nextElementSibling);

// ********************** Property(5) => style

// const image = document.querySelector('img');
// const para = document.querySelector('p');
// console.log(image);
// console.log(para);

// image.style.width = '700px';
// para.style.backgroundColor = "blue";
// para.style.padding = "20px";
// &&&&&&&&&&&&&&&&&&&&&&&  Method(1) => getAttribute

// const p = document.querySelector("p");
// console.log(p.getAttribute("id"));

// &&&&&&&&&&&&&&&&&&&&&&&  Method(2) => setAttribute

// const p = document.querySelector('p');
// p.querySelector("class", "paragraph");
// console.log(p.getAttribute("class"));





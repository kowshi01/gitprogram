//Queryselector
/*var secitem=document.querySelector('.list-group-item:nth-child(2)');
secitem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style="display:none";*/

//QuerySelector all
/*var secitem=document.querySelectorAll('li');
secitem[1].style.backgroundColor='green';*/
/*var items=document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<items.le#f4f4f4ngth;i++){
    items[i].style.backgroundColor='green';
}*/

var itemlist=document.querySelector('#items');
//parent node
/*console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='red';
console.log(itemlist.parentNode.parentNode);*/
//parent element
/*console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);

child node*/
//console.log(itemlist.childNodes);
//children
/*console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='red';*/
//first child
//console.log(itemlist.firstChild);
//first element child
/*console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent='hello';*/
//last child
//console.log(itemlist.lastChild);
//last element child
/*console.log(itemlist.lastElementChild)
itemlist.lastElementChild.textContent='hello';*/
//next sibling
//console.log(itemlist.nextSibling)
//next element sibling
//console.log(itemlist.nextElementSibling);
//pervious sibling
//console.log(itemlist.previousSibling);
//pervious element sibling
/*console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='red';*/

//create element
//create div
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
//set attribute
newDiv.setAttribute('title','hello div')
//create textnode
var newDivtext=document.createTextNode('hello');
//append child
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);

//
var newDiv1=document.createElement('div');
newDiv1.className='hello';
newDiv1.id='hello1';
//set attribute
newDiv1.setAttribute('title','hello')
//create textnode
var newDivtext1=document.createTextNode('hello');
//append child
newDiv1.appendChild(newDivtext1);
var container=document.querySelector('.list-group');
var h1=document.querySelector('.list-group-item');
console.log(newDiv1);
container.insertBefore(newDiv1,h1);



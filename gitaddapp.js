//Queryselector
/*var secitem=document.querySelector('.list-group-item:nth-child(2)');
secitem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style="display:none";*/

//QuerySelector all
/*var secitem=document.querySelectorAll('li');
secitem[1].style.backgroundColor='green';*/
var items=document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='green';
}

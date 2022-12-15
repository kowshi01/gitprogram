var a=document.getElementsByClassName("list-group-item");
a[1].textContent='hello';
a[2].style.backgroundColor = 'green';
for(var i=0;i<a.length;i++){
    a[i].style.fontWeight='bold';
}
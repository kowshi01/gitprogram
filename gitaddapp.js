var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
var description=document.getElementById('description');
//onsubmit 
//add item
form.addEventListener('submit',addItem)
function addItem(e){
e.preventDefault();

var newitem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem));
//description is created
var newdes=document.getElementById('description').value;
var dd=document.createElement('description');
dd.className='list-group-item';
dd.id='description';
dd.appendChild(document.createTextNode(newdes));
dd.style.display='inline';
dd.style.border='white';
li.appendChild(dd);


//create delete button 
var delbutton =document.createElement('button');
delbutton.className='btn btn-danger btn-sm float-right delete';
delbutton.appendChild(document.createTextNode('X'));
li.appendChild(delbutton);
//create edit button
var editbutton =document.createElement('button');
var bu=document.getElementsByClassName("btn btn-danger btn-sm float-right delete");
editbutton.className='edit btn-info float-right';
editbutton.appendChild(document.createTextNode("Edit"));
li.appendChild(editbutton);


itemlist.appendChild(li);
//itemlist.appendChild(dd);
}
//remove item
itemlist.addEventListener('click',removeitem);

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemlist.querySelectorAll('.list-group-item')
Array.from(items).forEach(function(item)
    {
        var itemName=item.textContent;
        
if(itemName.toLowerCase().indexOf(text)!=-1)
{
    item.style.display='block';
}else{
    item.style.display='none';
}
    });
    }
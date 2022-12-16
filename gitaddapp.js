var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//onsubmit 
//add item
form.addEventListener('submit',addItem)
function addItem(e){
e.preventDefault();

var newitem=document.getElementById('item').value;
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem));
//create delete button 
var delbutton =document.createElement('button');
delbutton.className='btn btn-danger btn-sm float-right delete';
delbutton.appendChild(document.createTextNode('X'));
li.appendChild(delbutton);
//create edit button
var editbutton =document.createElement('button');
editbutton.className='edit btn-info float-right';
editbutton.appendChild(document.createTextNode("Edit"));
li.appendChild(editbutton);

itemlist.appendChild(li);
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


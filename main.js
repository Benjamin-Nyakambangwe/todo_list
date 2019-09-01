const addItem = document.getElementById('list-add');
const itemList = document.getElementById('items');
const addButton = document.getElementById('add-button');
const searchList = document.getElementById('list-search');
const searchButton = document.getElementById('search-button');
const searchItem = document.getElementById('list-search');
const addedMsg = document.getElementById('added-succcess');

//Enter key event on add item input
addItem.addEventListener('keyup', itemAdd, showAddedMsg);
//Click event on add button
addButton.addEventListener('click', openAddInput);
//Click Event On Search Inputd
searchList.addEventListener('keyup', listSearch);
//Click event on Search button
searchButton.addEventListener('click', openSearchInput);

//Open addItem input
function openAddInput(e) {
  if (addItem.style.display != 'block') {
    addItem.style.display = 'block';
  }else {
    addItem.style.display = 'none';
  }
}

//Open Seach item input
function openSearchInput(e) {
  if (searchItem.style.display != 'block') {
    searchItem.style.display = 'block';
  } else {
    searchItem.style.display = 'none';
  }
}

//Show Added successful message;
function showAddedMsg(e) {
  console.log(123);
  if (addedMsg.style.display != 'block') {
    addedMsg.style.display = 'block';
  //  setTimeout(() => document.getElementById('added-sucess').remove(), 3000);
  }
}


//Add Items
function itemAdd(e) {
  //Check if enter is presses
  if (e.which === 13) {
    //Get Input Value
    var newItem = document.getElementById('list-add').value;
    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-item';
    //Adding a textnode with input Value
    li.appendChild(document.createTextNode(newItem));
    //Appending li to list
    itemList.appendChild(li);

  }
}

//Search listSearch function FILTER
function listSearch(e) {
  //Convert to LOwercase
  var text = e.target.value.toLowerCase();
  //Get List
  var items = itemList.getElementsByTagName('li');
  //Convert to array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}

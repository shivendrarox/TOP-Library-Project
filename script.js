let myLibrary = [];

function Book(title, pages, isRead) {
  // the constructor...
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
}

function cbx_clicked(event) {
  //alert(event.target.parentElement.id);
  console.log(event.target.parentElement.id);

  var myCollection = document.getElementsByClassName("item");

  var i;
  for (i = 0; i < myCollection.length; i++) {
    if (myCollection[i].id == event.target.parentElement.id) {
      //alert(myCollection[i].id);
      //alert(i);
      myLibrary[i].isRead = event.target.checked;
      console.log(myCollection);
      event.stopPropagation();
      break;
    }
  }
  event.stopPropagation();
  renderList();
}

function stopReload(event) { event.preventDefault(); }

function deleteListItem(event) {
  //alert(event.target.parentElement.id);
  console.log(event.target.parentElement.id);

  var myCollection = document.getElementsByClassName("item");

  var i;
  for (i = 0; i < myCollection.length; i++) {
    if (myCollection[i].id == event.target.parentElement.id) {
      //alert(myCollection[i].id);
      //alert(i);
      myLibrary.splice(i, 1);
      console.log(myCollection)
      event.stopPropagation();
      break;
    }
  }
  var parent = document.getElementById(event.target.parentElement.id).parentElement.nodeName;
  document.getElementById("demo").removeChild(document.getElementById(event.target.parentElement.id));
  event.stopPropagation();
  renderList();
}

function myFunction() {
  var form = document.getElementById("myForm");
  form.addEventListener('submit', stopReload);
  let newBook = new Book(document.getElementById("fname").value, document.getElementById("lname").value, document.getElementById("cbox").checked);
  myLibrary.push(newBook);
  renderList();
}

function renderList() {
  document.getElementById("demo").innerHTML = ""
  var i;
  for (i = 0; i < myLibrary.length; i++) {
    var para = document.createElement("p");
    para.setAttribute("id", "id" + i);
    para.setAttribute("class", "item");
    //para.addEventListener("click", deleteListItem);

    var del_btn = document.createElement("input");
    del_btn.addEventListener("click", deleteListItem);
    del_btn.setAttribute("type", "submit");
    del_btn.setAttribute("value", "Delete");

    var item_cbx = document.createElement("input");
    item_cbx.addEventListener("click", cbx_clicked);
    item_cbx.setAttribute("type", "checkbox");
    item_cbx.setAttribute("id", "item_cbx");
    if (myLibrary[i].isRead) {
      item_cbx.setAttribute("checked",null);
    }


    var item_cbx_lbl = document.createElement("label");
    item_cbx_lbl.setAttribute("for", "item_cbx");
    item_cbx_lbl.innerHTML = "Is Read?";

    let title = document.createTextNode(myLibrary[i].title);
    let pages = document.createTextNode(myLibrary[i].pages);

    var title_lbl = document.createElement("label");
    //item_cbx_lbl.setAttribute("for", "item_cbx");
    title_lbl.innerHTML = "Title: ";
    var pages_lbl = document.createElement("label");
    //item_cbx_lbl.setAttribute("for", "item_cbx");
    pages_lbl.innerHTML = "Pages: ";

    para.appendChild(title_lbl);
    para.appendChild(title);
        para.appendChild(document.createElement("br"));
    para.appendChild(pages_lbl);
    para.appendChild(pages);
        para.appendChild(document.createElement("br"));
    para.appendChild(item_cbx_lbl);
    para.appendChild(item_cbx);
        para.appendChild(document.createElement("br"));
    para.appendChild(del_btn);
        para.appendChild(document.createElement("br"));
    

    document.getElementById("demo").appendChild(para);

  }
  console.log(myLibrary);

}

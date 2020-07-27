var list = document.getElementById("list")
///// creat element with text node
function add(){
    var todo = document.getElementById("toDo-item")
    var li = document.createElement("li")
    li.setAttribute("class","li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    list.appendChild(li)
    todo.value = " ";
    


      ////// Create Edit Button ////
      var editbtn = document.createElement("button")
      var editbtnText = document.createTextNode('EDIT')
      editbtn.appendChild(editbtnText)
      editbtn.setAttribute("class","btn btn-primary Size")
      editbtn.setAttribute("onClick","editWork(this)")
      li.appendChild(editbtn)

      
    ////////Create Button ////
    var delbtn = document.createElement("button")
    var delbtnText = document.createTextNode("DELETE")
    delbtn.appendChild(delbtnText)
    delbtn.setAttribute('class',"btn btn-primary Size")
    delbtn.setAttribute('onClick','deletwork(this)')
   li.appendChild(delbtn)

  
}

function editWork(f){
    var val =prompt("Enter Work",f.parentNode.firstChild.nodeValue)
    f.parentNode.firstChild.nodeValue = val;


}
function deletwork(e){
 e.parentNode.remove()
}

function deletall(){
    list.innerHTML = " ";
}
var items=[];
const form = document.getElementById("form");
const container= document.getElementById("container");


form.addEventListener('submit', event => {
  event.preventDefault();

  var con= confirm ("Do You Want To Add?");
  if (con == true){
      var msg = document.getElementById("message").value;
      items.push(msg);
      clearinput();


    // var iterator = items.values();
  
    // container.innerHTML = ''; //Reset the list content whenever we print the todos, so we don't end up with duplicate todo items.


    for(var i=items.length-1;i<items.length;i++){ //array ko last item ko lai matra run huncha 
        const newDiv = document.createElement("div");
        newDiv.id= "div" + (i+1);
        const newp = document.createElement("p");
        newp.id = "text"+(i+1);
        const checkBox = document.createElement("input");
        checkBox.type= "checkbox";
        checkBox.id = i+1;
        // checkBox.value= i+1;
        checkBox.setAttribute('onclick', 'toggle(this.id)');
        //for delete icon
        const trash = document.createElement("i");
        trash.className="fa fa-trash-o";
        trash.id=i+1;
        trash.style.fontSize = "150%";
        trash.setAttribute('onclick', 'trash(this.id)');
       
        newDiv.classList.add('events'); //creating class for the div

        newDiv.appendChild(checkBox);

        newDiv.appendChild(trash);

        const text= document.createTextNode(items[i]);
        // console.log(iterator.next().value);


    
        newp.appendChild(text);//p tag ma text lai haleko
        newDiv.appendChild(newp);//p tag lai new div ma haleko
        container.appendChild(newDiv);
    } 
}
  else{
      return false;
  }
});



function toggle(id){
    // console.log(id);
    // var text = ;
     var checkBox= document.getElementById(id);

    if(checkBox.checked == true){
        // console.log("ticked");
        // console.log(text);
        document.getElementById("text"+id).style.textDecoration = "line-through";
        
        
    }
    else{
        // console.log("unticked");
        // console.log(text);
        document.getElementById("text"+id).style.textDecoration = "none";
     
    }

}

function clearinput(){
    document.getElementById("message").value = "";
}

function trash(id){
  var del= confirm ("Do You Really Wanna Delete?");
  if (del == true){
    var d = document.getElementById("div" + id);
    d.remove();
 }
}

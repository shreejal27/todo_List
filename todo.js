var items=[];
const form = document.getElementById("form");
const container= document.getElementById("container");


form.addEventListener('submit', event => {
  event.preventDefault();
  var con= confirm ("Do You Want To Add?");
  if (con == true){
    var msg = document.getElementById("message").value;
    items.push(msg);

    // var iterator = items.values();
  
    container.innerHTML = ''; //Reset the list content whenever we print the todos, so we don't end up with duplicate todo items.


    for(var i=0;i<items.length;i++){
        const newDiv = document.createElement("div");
        const newp = document.createElement("p");
        const checkBox = document.createElement("input");
        checkBox.type= "checkbox";
        checkBox.id = "check";
        checkBox.onclick = "cross()";
        
        newDiv.classList.add('events'); //creating class for the div

        newDiv.appendChild(checkBox);


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

function cross(){
    var checkBox= document.getElementById("check");
    
    if(checkBox.checked == true){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = "none";
    }
  
}


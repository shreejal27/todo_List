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
  
    // container.innerHTML = ''; //Reset the list content whenever we print the todos, so we don't end up with duplicate todo items.


    for(var i=items.length-1;i<items.length;i++){
        const newDiv = document.createElement("div");
        const newp = document.createElement("p");
        newp.id = "text"+(i+1);
        const checkBox = document.createElement("input");
        checkBox.type= "checkbox";
        checkBox.id = i+1;
        // checkBox.value= i+1;
        checkBox.setAttribute('onclick', 'toggle(this.id)');
        
     

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



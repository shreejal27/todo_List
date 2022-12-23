var items=[];
const form = document.getElementById("form");
const container= document.getElementById("container");


form.addEventListener('submit', event => {
  event.preventDefault();
  var con= confirm ("Do You Want To Add?");
  if (con == true){
    var msg = document.getElementById("message").value;
    items.push(msg);

    var iterator = items.values();

    for(var i=0;i<items.length;i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add('events');
        console.log(iterator.next().value);
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


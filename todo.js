const form = document.getElementById("form");

form.addEventListener('submit', event => {
  event.preventDefault();
  var con= confirm ("Do You Want To Add?");
  if (con == true){
    
      var msg = document.getElementById("message").value;

     document.getElementById("text1").innerHTML = msg;
  
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

function addTask(){
    var con= confirm ("Do You Want To Add?");
    if (con == true){
        

    }
    else{
        return false;
    }

    }
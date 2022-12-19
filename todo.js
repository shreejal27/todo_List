
function cross(){
    var checkBox= document.getElementById("check");

    var text = document.getElementById("text1");

    if(checkBox.checked == true){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = "none";
    }
  
}
//your JS code here. If required.
const element = document.getElementById("colorSelect");
const button = document.getElementById("button");


function removeColor(){
    let colorRemoved=element.value;
    element.remove(colorRemoved);
}
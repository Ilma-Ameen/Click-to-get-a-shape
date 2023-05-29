var circle = document.getElementById("mycircle")
var sqaure = document.getElementById("mysquare")
var rectangle = document.getElementById("myrectangle");
var triangle = document.getElementById("mytriangle");

function createcircle(){
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.background = "blue";
}

function createsquare(){
    sqaure.style.width = "100px";
    sqaure.style.height = "100px";
    sqaure.style.background = "red";
}

function createrectangle() {
    rectangle.style.width = "200px";
    rectangle.style.height = "100px";
    rectangle.style.background = "green";
}
function createtriangle(){
    triangle.style.width = "0";
    triangle.style.height = "0";
    triangle.style.borderLeft = "50px solid transparent";
    triangle.style.borderRight = "50px solid transparent";
    triangle.style.borderBottom = "100px solid yellow";
}

// document.addEventListener("DOMContentLoaded", function(){
//     const bodyContainer = document.getElementsByTagName('body');

//     const button = document.createElement('button');
//     button.innerHTML = 'Click Me';
//     button.addEventListener('click',function(){
//         alert('Button was clicked!');
//     });

//     bodyContainer.appendChild(button);

// });


let btn = document.createElement("input");
btn.type = "radio";
btn.value = "long";
btn.addEventListener("click", function(){
    document.getElementsById("hairImg").src ="#";
});
document.getElementById("demo").appendChild(btn);
let span = document.createElement("span");
span.appendChild(document.createTextNode("long"));
document.getElementsByTagId("demo").appendChild("span");



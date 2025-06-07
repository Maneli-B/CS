let name ="Maneli";
let age = "13"
let likesushi = "false"
function greeter(name) {
    console.log("Hello", name);

}
greeter('username');

function savename() {
    let newName = document.getElementById('greeter').value;
    document.getElementById('username').textContent = newName;
    document.getElementById("greeter").value = "";
}
document.querySelectorAll('.accordion-header').forEach(function(button){
    button.addEventListener('click',function() {
let content = this.nextElementSibling;
(content.style.display === 'block') ?'none' : 'block' ;
    });
});
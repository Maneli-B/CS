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
        content.style.display = (content.style.display === 'block') ?'none' : 'block' ;
    });
});

const PASSWORD = "Maneli1390";

 function ValidatePass() {
    const login = document.getElementById('password');
    const message = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll(".hidden");

    if ( login.value === PASSWORD) {
        message.textContent='Password confirmed see member only content below.';
        hiddenEntries.forEach(function(entry) {entry.style.display = 'flex';});
    }else{    message.textContent= 'Password denied. Try again.';
        hiddenEntries.forEach(function(entry) {entry.style.display = 'none ';});    
    }

    login.value ='';
 }

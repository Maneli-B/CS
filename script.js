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
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
     console.log("Clicked!");
     output.innerText = txtInput.value;
}
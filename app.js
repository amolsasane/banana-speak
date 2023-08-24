var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", clickHandler)

function updateURL(input) {
     return serverURL + "?" + "text=" + input 
}

function errorHandler(error) {
     console.log(error);
     alert("Something went wrong with the server, please try again after some time.");
}

function clickHandler() {
     var inputText = txtInput.value;
     fetch(updateURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         output.innerText = translatedText;
     })
     .catch(errorHandler)
}    
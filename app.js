var btnTranslate = document.querySelector('#btn-Translate')
var textInput = document.querySelector('#text-input')
var outputDiv = document.querySelector('#output')

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//function to return complete URL

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}


//server error handler function
function errorHandler(error) {
    console.log("error occured", error);
    alert("Somthing wrong with server! try after sometime")
}

function clickHandler() {
    
    var inputText = textInput.value;  //taking input 

    fetch(getTranslationURL(inputText))  //calling server for processing
    .then(response => response.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outputDiv.innerText = translatedText;
    })

    .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler)
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    document.getElementById('button1').addEventListener("click", getFromServlet);
};

window.setInterval(function () {
    myJoke();
}, 3600000);

function myJoke() {

    fetch('https://jokes-plaul.rhcloud.com/api/joke').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        document.getElementById('displayQuote').innerHTML = "Id: " + data.id + "<br>" + " Joke: " + data.joke + "<br>" + " Reference: " + data.reference;
    }).catch(function () {
        console.log("Booo");
    });
}

function getFromServlet() {
    var app = document.getElementById("app");
    app.innerHTML = "blabalblaab";
    var url = "http://localhost:8084/ajax1/ajax1";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        app.innerHTML = text;
    });
}

// old one for gen a quote...
var quote = ["Aben er her!", "Wtf!", "Det sker bare ikke!"];

function getQuote() {
    var ranNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('displayQuote').innerHTML = quote[ranNumber];
};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    document.getElementById('button1').addEventListener("click", getFromServlet);
};

function getFromServlet() {
    var app = document.getElementById("app");
    app.innerHTML = "blabalblaab";
    var url = "http://localhost:8084/ajax2/ajax2";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log(text);
        var output = "Hour: " + text.hour + ", Minuts: " + text.minuts + ", Seconds: " + text.seconds + "!";
        app.innerHTML = output;
    });
}

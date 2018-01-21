/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    document.getElementById('button1').addEventListener("click", getFromServlet);
   // document.getElementById('createperson').addEventListener("click", addPerson);
};

function getFromServlet() {
    var app = document.getElementById("app");
    //app.innerHTML = "blabalblaab";
    var url = "http://localhost:8084/ajax3/ajax3";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log(text);
        var output = text;
        for(var i = 0; i < output.length; i++){
            app.innerHTML += "Navn: " + output[i].name + ", Alder: " + output[i].age + ", Email: " + output[i].email + "<br>";
        }
        //app.innerHTML = output;
    });
}


var createperson = document.getElementById("createperson");
createperson.onclick = function(){
   
    var user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    };
    
    var data = (JSON.stringify(user));
    var url = "http://localhost:8084/ajax3/ajax3";
    var conf = {method: 'post', body: data};
    fetch(url, conf);
        
};
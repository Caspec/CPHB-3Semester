get.onclick = function () {
   
    var url = "http://localhost:8084/restJson/api/pets/getAllLiving";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.json();
    }).then(function (json) {
        var html;
        document.getElementById("app").innerHTML = "";
        
        for (var i = 0; i < json.length; i++) {
            html += "<table><tr><td>" + json[i].name + "</td><td>" + json[i].birth + "</td><td>" + json[i].species + "</td></tr></table>"
        }
        
        document.getElementById("app").innerHTML = html;

    });
};


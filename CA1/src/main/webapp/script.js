PersonsRefresh();

document.getElementById("PersonsRefresh").addEventListener("click", function ()
{
    PersonsRefresh();
});

document.getElementById("PersonAdd").addEventListener("click", function ()
{
    PersonAdd();
    document.getElementById("TablePersonsBody").innerHTML += "<tr><td>New</td><td>" + document.getElementById("PersonFirstName").value + "</td><td>" + document.getElementById("PersonLastName").value + "</td><td>" + "</td></tr>";
});

document.getElementById("PersonEdit").addEventListener("click", function ()
{
    PersonEdit();
    PersonsRefresh();
});

document.getElementById("PersonSendEdit").addEventListener("click", function ()
{
    PersonSendEdit();
    PersonsRefresh();
});

document.getElementById("PersonDelete").addEventListener("click", function ()
{
    PersonDelete();
    PersonsRefresh();
});

document.getElementById("GetContactInfo").addEventListener("click", function () 
{
    getAllPersonsContactInfo();
});


function PersonsRefresh()
{
    fetch("api/company/persons/all", {method: "get"})
            .then(function (response) {
                if (!response.ok)
                {
                    var error = new Error();
                    error.response = response;
                    throw error;
                }
                return response.json();
            })
            .then(function (json) {
                document.getElementById("TablePersonsBody").innerHTML = "";

                var rows = "";

                for (var i in json)
                {
                    rows += '<tr>';
                    rows += '<td>' + json[i].id + '</td>';
                    rows += '<td>' + json[i].firstName + '</td>';
                    rows += '<td>' + json[i].lastName + '</td>';
                    rows += '<td><input type="button" onclick="PersonDelete(' + json[i].id + ')" value="Delete" /></td>';
                    rows += '</tr>';
                }

                document.getElementById("TablePersonsBody").innerHTML = rows;
            })
            .catch(function (error) {
                error.response.json().then(function (json) {
                    alert(json.description);
                    
                    document.getElementById("TablePersonsBody").innerHTML = "";
                });
            });
}

function PersonAdd()
{
    var person = {
        firstName: document.getElementById("PersonFirstName").value,
        lastName: document.getElementById("PersonLastName").value,
    };

    fetch("api/company/persons/", {
        method: "post",
        body: JSON.stringify(person),
        headers: new Headers({'content-type': 'application/json'})
    })
            .then(function (response) {
                if (!response.ok)
                {
                    var error = new Error();
                    error.response = response;
                    throw error;
                }
                return response.json();
            })
            .then(function (json) {
                alert("Person added!");
        
                document.getElementById("TablePersonsBody").innerHTML += "<tr><td>New</td><td>" + document.getElementById("PersonFirstName").value + "</td><td>" + document.getElementById("PersonLastName").value + "</td><td>" + "</td></tr>";
            })
            .catch(function (error) {
                alert("Person not added!");
            });
}

function PersonDelete(id){
    
   fetch("api/company/persons/delete/" + id, {
        method: "delete",
        headers: new Headers({'content-type': 'application/json'})
    })
            .then(function (response) {
                if (!response.ok)
                {
                    var error = new Error();
                    error.response = response;
                    throw error;
                }
                return response.json();
            })
            .then(function (json) {
                alert("Person deleted!");
        
                PersonsRefresh();
            })
            .catch(function (error) {
                alert("Person not deleted!");
            });
    
    
}

function PersonEdit(){
    
    var person = {
        id: document.getElementById("PersonID").value,
        firstName: document.getElementById("PersonFirstName").value,
        lastName: document.getElementById("PersonLastName").value,
    };

    fetch("api/company", {
        method: "put",
        body: JSON.stringify(person),
        headers: new Headers({'content-type': 'application/json'})
    })
            .then(function (response) {
                if (!response.ok)
                {
                    var error = new Error();
                    error.response = response;
                    throw error;
                }
                return response.json();
            })
            .then(function (json) {
                alert("Person edited!");
        
                PersonsRefresh();
            })
            .catch(function (error) {
                alert("Person not edited!");
            });
}


function getAllPersonsContactInfo() {
    
     fetch("api/company/contactinfo", {method: "get"})
            .then(function (response) {
                if (!response.ok)
                {
                    var error = new Error();
                    error.response = response;
                    throw error;
                }
                return response.json();
            })
            .then(function (json) {
                document.getElementById("TablePersonsContactInfoBody").innerHTML = "";

                var rows = "";

                for (var i in json)
                {
                    rows += '<tr>';
                    rows += '<td>' + json[i].fName + '</td>';
                    rows += '<td>' + json[i].lName + '</td>';
                    rows += '<td>' + json[i].email + '</td>';
                    rows += '<td>' + json[i].phone + '</td>';
                    rows += '<td>' + json[i].street + '</td>';
                    rows += '</tr>';
                }

                document.getElementById("TablePersonsContactInfoBody").innerHTML = rows;
            })
            .catch(function (error) {
                error.response.json().then(function (json) {
                    alert(json.description);
                    
                    document.getElementById("TablePersonsContactInfoBody").innerHTML = "";
                });
            });
}


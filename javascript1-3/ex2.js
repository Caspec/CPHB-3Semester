window.onload = function(){
    var x = document.getElementById("div1");
    x.style.backgroundColor = "red";
    var y = document.getElementById("div2");
    y.style.backgroundColor = "yellow";
    var z = document.getElementById("div3");
    z.style.backgroundColor = "green";  
    list();
    carlist();
    document.getElementById('removeFirst').addEventListener('click', function(){
        document.getElementById('list').firstChild.remove();
    });

    document.getElementById('removeLast').addEventListener('click', function(){
        document.getElementById('list').lastChild.remove();
    });

}

var myArray = ["Thomas", "Bo", "Tue", "Gunni", "Peter", "Pan", "Morgenheroin", "Brillemanden", "Lone"];

function myFunction(){
    var x = document.getElementById("div1");
    x.style.color = "blue";
    var y = document.getElementById("div2");
    y.style.color = "red";
    var z = document.getElementById("div3");
    z.style.color = "yellow";
}

function myFunction1(){
    var x = document.getElementById("div4");
    var y = document.getElementById("p");
    y.innerText = "hi from divid " + x.id;
    //console.log("hi from divid " + x.id);

}

function myFunction2(){
    var x = document.getElementById("div5");
    var y = document.getElementById("p");
    y.innerText = "hi from divid " + x.id;
    //console.log("hi from divid " + x.id);
}
// Den får med metoden(this.id) - ex2.html, ID'et fra div elementet som den sender med ind
// til id variablen, som så bliver parset ind på document.getElementById(id) så vi har outer div'en 
function myFunctionOuter(id){
    var x = document.getElementById(id);
    var y = document.getElementById("p");
    y.innerText = "hi from outer " + x.id;
    //console.log("hi from outer " + x.id);
}


// ul list
function list(){
    
    var test = myArray.map(function(x){
        return "<li>" + x + "</li>";
     });
    test = test.join(""); 
    var x = document.getElementById("list");
    x.innerHTML = test;
}

function addName(){
        var name = document.getElementById("textbox1").value;
        myArray.push(name);
        list();
        event.preventDefault();
}

//function removeFirst(){
//    var name = document.getElementById("list").value;
//    myArray.shift(name);
//    list();
//    event.preventDefault();
//}

function carlist(){
    var cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
    var myCarArray = cars.map(function(x){
        return "<tr><td>" + x.id + "</td><td>" + x.year + "</td><td>" + x.make + "</td><td>" + x.model + "</td><td>" + x.price + "</td></tr>";
     });
     myCarArray = myCarArray.join(""); 
    var x = document.getElementById("cartable");
    x.innerHTML = myCarArray;
}
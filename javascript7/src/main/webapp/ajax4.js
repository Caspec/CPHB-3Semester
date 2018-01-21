/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    document.getElementById('north').addEventListener("click", getNorth);
    document.getElementById('west').addEventListener("click", getWest);
    document.getElementById('south').addEventListener("click", getSouth);
    document.getElementById('east').addEventListener("click", getEast);
}


function getNorth(){
    var x = document.getElementById("north");
    var y = document.getElementById("output");
    y.innerText = "Du klikkede på: " +  x.id;
}

function getWest(){
    var x = document.getElementById("west");
    var y = document.getElementById("output");
    y.innerText = "Du klikkede på: " +  x.id;
}

function getSouth(){
    var x = document.getElementById("south");
    var y = document.getElementById("output");
    y.innerText = "Du klikkede på: " +  x.id;
}

function getEast(){
    var x = document.getElementById("east");
    var y = document.getElementById("output");
    y.innerText = "Du klikkede på: " +  x.id;
}
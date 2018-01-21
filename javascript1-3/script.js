// alert('stoooor alert fra script.js!!1!!!');

var name = "Pedro";
console.log("name: " + name);
name = 43;
console.log("name: " + name);
const age = 23;
let address = "hambourggade 25, 24 sal postkassen";

var myarray = [false, "", 45];
console.log(myarray);

var myobj = {
    Peter: 21, 
    Frede:63
};
console.log(myobj);

var myobj2 = {
    name: "Peter", 
    age: 34,
    address: "Somewhere"
};

console.log(myobj2.name);
console.log(myobj2["name"]);

function myfunc(){
    console.log("Hello mesterjakel");
}

var res = myfunc();
console.log(res);

//function myfunc2(arg1, arg2, arg3){
//    return arg1 + arg2 + arg3;
//}

function myfunc2(){
    var res = 0;
    for (var i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
    // return arg1+arg2+arg3+arg4.. the list of arguments
}

//var res2 = myfunc2(2,5,6);
var res2 = myfunc2(45, 67, 23 , 6, 11, 90);
console.log(res2);
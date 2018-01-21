//function add(n1, n2){
//    return n1 +n2;
// }

//var sub = function(n1,n2){
//    return n1 - n2;
//} 

//var mul = function(n1, n2){
//    return n1 / n2;
//}

//var cb = function(n1,n2, mul){
//    try {
//        throw new Error('Whoops!');
//      } catch (e) {
//        console.log(e.name + ': ' + e.message);
//      }
//    return "Result from the two numbers: "+n1+"+"+n2+"="+mul(n1,n2);
//};

// 1
//console.log(add(1,2));
// 2
//console.log(add);
// 3
//console.log(add(1,2,3));
// 4
//console.log(add(1));
// 5
//console.log(cb(3,3,add));
// 6
//console.log(cb(4,3,sub));
// 7
//console.log(cb(3,3,add()));
// 8
//console.log(cb(3,"hh",add));

//console.log(mul(1,2));

//cb(1,2, mul(1,2));

//var mymul = function(arg1){
//    return arg1*arg1;
//};

//var callback = function(arg1, mycallback){ 
// return mycallback(arg1);
//};

//var resultat = callback(4, mymul);
//var resultat = callback(4, function(arg){
//    console.log("argumentet var: " + arg);
//});
//console.log(resultat);


//var myArray = ["Thomas", "Bo", "Tue", "Gunni", "Peter", "Pan", "Morgenheroin", "Brillemanden", "Lone"];

//var myArray2 = myArray.filter(function(x){ 
//    return x.length <= 3; 
//});

//console.log(myArray2);

//for (var i = 0; i < myArray.length; i++) {
//    res += (myArray[i]) + ", ";
//    console.log(res);
//  }

//var myArray3All = myArray2.map(function(x){ return x.toUpperCase() })

//myArray.forEach(function(element) {
//    console.log(element);
//}, this);

//myArray2.forEach(function(element) {
//    console.log(element);
//}, this);

//myArray3All.forEach(function(element) {
//    console.log(element);
//}, this);


// page 2, ex 3... wtf..
var myArray = ["Thomas", "Bo", "Tue", "Gunni", "Peter", "Pan", "Morgenheroin", "Brillemanden", "Lone"];
var htmlNames = myArray.join("<li></li>");
var concatStart = "<ul><li>";
var namesUrl = concatStart.concat(htmlNames);
var namesUrlFinal = namesUrl.concat("</li></ul>");

console.log(namesUrlFinal);

//var myArray = ["Thomas", "Bo", "Tue", "Gunni", "Peter", "Pan", "Morgenheroin", "Brillemanden", "Lone"];
//var test = myArray.map(function(x){
//    return "<li>" + x + "</li>";
//});
//test = test.join("");
//console.log(test); 

// page2, ex 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
  
var myArray = cars.filter(function(x,y,z){ 
    return x.year >= 1999 || y.model == "Volvo" || z.price < 5000; 
});

//function test(x){ 
//    return cars.filter(function(){ x.year >= 1999 }); 
//};

function carsNewerThan1990(x){
    return x.year > 1999;
  }
  
  function findVolvoCars(x){
    return x.make == "Volvo";
  }
  
  function carsWithPriceUnder5000(x){
    return x.price < 5000;
  }
  
var carNewer = cars.filter(carsNewerThan1990);
var carFind = cars.filter(findVolvoCars);
var carPrice = cars.filter(carsWithPriceUnder5000);

//console.log(myArray);
//console.log(" ");
//console.log(carNewer);
//console.log(" ");
//console.log(carFind);
//console.log(" ");
//console.log(carPrice);

//test function
//function myFuncMul(arg1){
//    return arg1*arg1;
//}
//function myFuncSub(arg1){
//    return arg1-arg1;
//}
//function myFuncDiv(arg1){
//    return arg1/arg1;
//}
//function myFuncAdd(arg1){
//    return arg1+arg1;
//}
//console.log("Multiplier: " + myFuncMul(5));
//console.log("Substraction: " + myFuncSub(10));
//console.log("Diveded: " + myFuncDiv(5));
//console.log("Add: " + myFuncAdd(25));

//test for anonym function
//var personsnew = ["Henrik", "Hanne", "Abemanden"];
//var shortlist = personsnew.filter(function(element){ return element.length == 5});
//shortlist.forEach(function(element) {
//    console.log(element)
//}, this);

//function myFilter(arr, callback){
//    var resultArray = [];
//
//    for(var i = 0; i < arr.length; i++){
//        var element = arr[i];
//        if(callback(element)){
//            resultArray.push(element);
//        }
//    }
//
//    return resultArray;
//}

//var result = myFilter(personsnew, function(element){ return element.length > 3 });
//console.log(result);

//page 2, ex4 a
//var test = cars.map(function(x){
//    return "INSERT INTO cars (id, year, make, model, price) VALUES " +x.id+ "," + x.year + "," + x.make + "," + x.model + "," + x.price + "; ";
//});

//test = test.join("");
//console.log(test);


//page 3, ex 1
//var msgPrinter = function(msg,delay){
//    setTimeout(function(){
//      console.log(msg);
//    },delay);
//  };
//  console.log("aaaaaaaaaa"); // 1
//  msgPrinter ("bbbbbbbbbb",2000); // 5
//  console.log("dddddddddd"); // 2
//  msgPrinter ("eeeeeeeeee",1000); // 4
//  console.log("ffffffffff"); // 3

//page 3, ex2 Person
//When you execute something synchronously
//You wait for it to finish before moving on to another task.
//When you execute something asynchronously
//You can move on to another task before it finishes.

//function Person(name){
//    this.name = name;
//    var self = this;
//    console.log("Name: "+ this.name);
//    setTimeout(function(){
//    console.log("Hi  "+ self.name); 
//    },2000);
//}

//Person("Kurt");
//console.log("This is global: " + name); 

//var p = new Person("Kurt Wonnegut");  
//console.log("I'm global: "+ name);

//page 4, ex1
//var greeter = function(){
//    console.log(this.message);
//  };
//  var comp1 = { message: "Hello World" };
//  var comp2 = { message: "Hi" };
  
//  var g1 = greeter.bind(comp1 ); //We can store a reference, with a specific “this” to use
//  var g2 = greeter.bind(comp2 ); //And here another “this”
//  setTimeout(g1,500);
//  setTimeout(g2,1000);
  
//var persontabel = { name: "Hans", birthday: 1980, hobby: 'Havemand', email: 'test@hest.dk' };

//delete persontabel.email;
//persontabel.mobil = "555 mobilnr";
//for(prop in persontabel){
//    console.log(prop, persontabel[prop]);
//}

//page 4, ex 2
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var myFather = new Person("Test", "Test", 25);
var myHoe = new Person("Damp", "Heny", 222);

function getDetail(Person) {
    return Person.firstName + " " + Person.lastName + " " + Person.age;
}

console.log(myFather);
console.log(getDetail(myFather));
console.log(getDetail(myHoe));

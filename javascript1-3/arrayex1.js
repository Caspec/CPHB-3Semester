var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne", "Abemandeninden"];

// concat the arrays 

var all = boys.concat(girls); 

// add to array

all.unshift("Tom", "Abe2");
all.push("Peter pan", "Torben T");

// remove first and last element

all.shift(all);
all.pop(all);

// remove ole, janne .spice(index 3, 1 = remove)
// insert name .spice(index 3, 0 = insert on index 3)

all.splice(3,1);
all.splice(3,1);


// reverse so that the girls come first..

all.reverse();

// sorting

all.sort();

// join the array to string

var all2 = all.join(', ');
var all3 = all.join(' - ')

var array1 = all.map(function(x){ return x.toUpperCase() })

// find lars or LARS... dont know if its the correct way to do it!

var array2 = all.filter(function(x)
{ return x.startsWith("l") });

var array3 = array1.filter(function(x)
{ return x.startsWith("L") });

// concat array2, array3 to arrayfinal

var arrayfinal = array2.concat(array3);


console.log(all2);
console.log(all3);
console.log(all);
console.log(array1);
console.log(arrayfinal);
// Merge two arrays using concat().
const arr1=[`virat`,`rohit`,`iyer`,`klrahul`]
const arr2=[`bumrah`,`siraj`,`shami`,`arshdeep`]
const arr3=arr1.concat(arr2)
console.log(arr3)

// Use splice() to remove 2 elements from the middle.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2);
console.log(fruits)

//Sort a numeric array.
const num=[3,2,4,5,1,9]
const sortedarr=num.toSorted()
console.log(sortedarr)

// Check if an array includes a specific item.
const search=arr3.includes(`iyer`)
console.log(search)

// Find the index of an element.
const indexnum=arr3.indexOf(`bumrah`)
console.log(indexnum)
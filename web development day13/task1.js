let fruits=[`apple`,`orange`,`banana`,`jackfruit`,`mango`]
console.log(fruits[2])
fruits.push(`pineapple`)
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(fruits.length)
console.log("Elements in the array");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.reverse();
console.log(fruits);
let arr=[1,2,3,4,5];
let sm=0;
for(let i=0;i<arr.length;i++){
    sm+=arr[i];
}
console.log(sm);
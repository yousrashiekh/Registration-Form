// spread operator = ... allows you to expand an array or string into seperate elements (unpacks them)

let spread = [1,2,3,4,5,6,7,8];
console.log(...spread);


let arr=[2,4,6,8];
let newArr=[...arr,6,7];
console.log(arr);
console.log(newArr);


let marks=[1,2,4,5,6,9];
let copymarks=marks
copymarks.pop();
console.log(copymarks);
console.log(marks);


let num =[1,2,3,4,5,6]
let max=Math.max(...num);
let min=Math.min(...num);
console.log(max);
console.log(min);



let username="Yusra shiekh"
let words=[...username].join("-");
console.log(words);



let ages = [22,33,44,55,66,77,88]
let copyages=[...ages]
copyages.push(6)
console.log(copyages);
console.log(ages);


// // marge array

let vegs=["carrot","potato"];
let fruits=["kiwi","watermelon"];
let food=[...vegs,...fruits];
console.log(food);


 //spread string

let str = "jahan ara"
console.log(str);


// String convert to array

let arra = "Yusra Shiekh bint e Saeed"
let newArra = [...arra]
console.log(newArra);


// function spread

let ar=[4,6]
function array(a,b) {
    return a+b;
}
let result=array(...ar)
console.log(result);




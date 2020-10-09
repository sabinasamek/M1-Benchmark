// JS EXERCISES 
//21

let x = "John"
let y = "Doe"
let together = x +" <> " + y


//22
let person = {
firstName: 'Sabina',
lastName: 'Samek',
email: 'sabinasamek@gmail.com'
} 

//23

delete person.email

//24

let myArray = new Array ("Apple", "Orange", "Banana", "Grapefruit", "Grape", "Melon", "Strawberry", "Raspberry", "Blackcurrant",);

//25

// console.log (myArray)

//26)

let getRandomNum = Array.from({length: 100}, () => Math.floor(Math.random() * 100));


//27

//28

let getRandomNum28 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

let ArrayInsideArray = [getRandomNum28, getRandomNum28, getRandomNum28, getRandomNum28]
// console.log (ArrayInsideArray)

//29

let short = ["Sabisa" , "Sabina" , "Sabi"];
let long = ["Ben" , "Benjamin" , "Benji" , "Phillipus"]

function longestString(arr){
    for (i=0; i<arr.length; i++){
        if (arr[i].length > short){
          long1= arr[i].length;
        }
  
    }
    return long1;
  }
  console.log (longestString)
  
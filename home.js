// JavaScript String Length.
// The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char)
let text2 = "HELLO WORLD";
let char1 = text2.charCodeAt(0);
console.log(char1)
const name = "W3Schools";
// let letter = name.at(2);
// let letter =name[2]
console.log(name)

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(0, 13);
console.log(part)
let str1 = "Apple, Banana, Kiwi";
let part1 = str1.substring(7, 13);
console.log(part1)

let str2 = "Apple, Banana, Kiwi";
let part2 = str2.substr(-12);
console.log(part2)


let cow="5"
let padded=cow.padEnd(5,"0")
console.log(padded)

let font="this is the homepage"
let newText=font.replace("homepage","actanos")
console.log(newText)

let a="welcome to actanos company"
let text5 = "The rain in SPAIN stays mainly in the plain";
const myArr = text5.matchAll("ain");
console.log(myArr)

let text6 = "Hello world, welcome to the universe.";
text6.includes("world");
console.log(text6)


let y="123"
console.log(Number(y),typeof y)
console.log(Number("50"),typeof 50)


const fruit = ["Banana", "Orange", "Apple", "Mango"];
let own=fruit.join(" * ")
console.log(own)//banana * orange * Apple * mango 
let pul=fruit.toString()
console.log(fruit.length,typeof fruit,fruit.sort())
console.log(pul,typeof pul)



const number1=[12,34,4,5,6,20,10];
const number2=number1.map(myFunction);

function myFunction(value){
    console.log(value,value*2);
}
const one=[34,34,5,30,12,20];
const two=one.reduce((a,b)=>(a+b));
console.log(two)


//----------------------------------OOPS------------------------------------------
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
const myCar1=new car("BMW",2015);
const myCar2=new car("Audi",2020);

console.log(myCar1.name,myCar1.year);
console.log(myCar2.name,myCar2.year);

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    show(){
        console.log("My name is "+this.name);
        console.log("My salary is "+this.salary);
    }
}
class Teacher extends Employee{
    constructor(name,salary,location,age){
        super(name,salary)
        this.location=location;
        this.age=age;
    }
    see(){
        console.log("My current Location"+this.location);
        console.log("My age is"+this.age);
    }
}

let myPro=new Teacher("Babu","28000","Hyderbad",21)
console.log(myPro)


class Car{
    constructor(brand){
        this._carname=brand
    }
    set carname(x){
        this._carname=x;
    }
    get carname(){
        return this._carname;
    }
}
const myBoat=new Car("Maruthi");
myBoat.carname="SportsCar";
console.log(myBoat)






//function expression
function sayHi(){
    console.log("Hello Wolrd");
}
sayHi()


function sum(a,b){
    console.log(a+b)
}
sum(10,20)



async function foo(name) {
    console.log(name, "start");
    console.log(name, "middle");
    console.log(name, "end");
  }
  
foo("First");
foo("Second");

async function foo(name) {
    console.log(name, "start");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(name, "middle");
    console.log(name, "end");
  }
  
  foo("First");
  foo("Second");


let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=false;
        if (success){
            resolve("Task Completed");
        }else{
            reject("Task failed");
        }
    },1000);
});
promise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise Finished");
});

async function loadData() {
    console.log("Loading");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Data Loaded");
  }
  
loadData();
console.log("Waiting");
  


function checkNumber(num){
     return new Promise((resolve,reject)=>{
        if (num%2==0){
            resolve("Even Number");
        } else{
            reject("Odd Number");
        }
     }) 
}
checkNumber(4).then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log("Promises closed");
});




//  sync:
console.log("Kohli");
calculate();
console.log("Rohit");
setTimeout(()=>{
    calculate();
},1000);
console.log("Gill");

//Async:
console.log("This is first heading");
setTimeout(()=>{
    console.log("This is the Second Heading");
},1000);

console.log("This is the Third Heading");


function calculate(){
    let sum=0;
    for (let i=0;i<10;i++){
        sum +=i;
    }
    console.log("Result:",sum);
}

step1(10,function(result1,error){
    if(!error){
        step2(result1,function(result2,error){
            if(!error){
                step3(result2,function(result3,error){
                    if(!error){
                        console.log("Result:"+result3);
                    }
                })
            }
        })
    }
});


function step1(value,callback){
    callback(value + 10,false)
}
function step2(value,callback){
    callback(value+10,false)
}
function step3(value,callback){
    callback(value+10,false)
}   


const p1=Promise.resolve(" I like You");
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Love Today")
    },1000)
});
const p2=100;

Promise.all([p1,p2,p3]).then((values)=>console.log(values));



fetch('https://api.github.com/users')
.then((response)=>console.log(response.json()))
.then((result)=>console.log(result))




function step1(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);
        }else{
            reject("Something Went Wrong");
        }
    })
}


async function result() {
    let result1 = await step1(10, false);
    console.log(result1);
    return result1;  
}
async function result2() {
    let result = await Promise.resolve(5);
    return result;
}
function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10);
        } else {
            reject("Error Occurred");
        }
    });
}
console.log(result()); 

result().then((res) => console.log("From Then:", res)); 



function outer(){
    let name = "Satheesh";
    function inner(){
        console.log(name);
    }
    return inner;

}
const x = outer();

x();

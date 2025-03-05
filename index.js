console.log("welcome to actanos")
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);


let numbers = [10, 20, 30, 40, 50];
let result = numbers.find(num => num > 25);
console.log(result); 

 let number =[20,100,45,80]
 let res=number.find(num=> num<80);
 console.log(res);

let fruits=["Apple","Orange","Banana"]
let out=fruits.findIndex(first=>first==="Banana");
console.log(out)

let arr=[1,2,3,9]
// let data=arr.reduce((a,b)=>a+b);
let data=arr.filter(x=>x<2)
console.log(data)


const person={
    firstName:"Arjun",
    lastName:"Reddy",
    age:"21",
    location:"Hyderbad"
}


console.log(`${person.firstName}${person.lastName} is ${person.age} old and he is working at ${person.location} `)

function myFunction(p1,p2){
    return p1*p2
}
var a = myFunction(9,10)
document.getElementById("demo").innerHTML=a;

let x=myfunc(46,3)

function myfunc(a,b){
    return a*b
}
document.getElementById("demo").innerHTML=x;


const car ={
    type:"BMW",
    color:"Black",
    price:25000
}

document.getElementById("demo").innerHTML="Car is  color " + car.price;


const  student={}
student.fname="Devaratha";
student.lname="Salaar";
student.age=21;
student.location="Khansar";

console.log(student["fname"])
document.getElementById("demo").innerHTML=student.lname + " is " + student.age  +" old";


const employee={
    names:"Bijju",
    age:21,
    city:"Kurnool",
}
document.getElementById("demo").innerHTML=Object.entries(employee);
document.getElementById("demo").innerHTML=JSON.stringify(employee);

function pers(first,last,age,city){
    this.finame=first;
    this.lainame=last;
    this.aiage=age;
    this.cicity=city;
}

const myFather=new pers("Salaar","Devaratha",21,"Shambala")
document.getElementById("demo").innerHTML=JSON.stringify(myFather);

function buttonBtn(){
    document.getElementById("demo").innerHTML=Date()
}

function buttonBtn(){
    document.body.style.backgroundColor="Green";
    document.write("Hello World!")
}


const fruit = ["Banana", "Orange", "Apple", "Mango"];
let flex = fruit.length;
console.log(flex)
let text = "<ul>";
for (let i = 0; i < flex; i++) {
    text += "<li>" + fruit[i] + "</li>";
    // text += `<li> ${fruit[i]}</li>`;

}
text += "</ul>";

document.getElementById("demo").innerHTML = text;



const points=[10,9,13,20,45,30];
let answer=points.sort(function(a,b){
    return a-b
});
document.getElementById("demo").innerHTML=answer;



let age =prompt("enter the age");
let welcome=(age<18)  ? ()=> alert("Enter the age greater than the 18") : ()=> alert("welcome");
welcome()


function makeUser(){
    return{
        name:name,
        age:age,
    };
}
let user=makeUser("John",20);
alert(user.age)




class User{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    sayHi(){
        alert("Hi Hello AI")
    }

}

let user_one=new User("John");
user_one.sayHi()
alert(typeof User)


class Animal{
    constructor (name){
        this.name=name;
        this.speed=0;
    }
    run(speed){
        alert(`${this.name} runs with speed of ${this.speed}`)
    }
    stop(speed){
        this.speed=0;
        alert(`${this.name} stands still here`);
    }
    
}
let animal= new Animal("Elephant");

class Rabbit extends Animal{
    hide(){
        alert(`${this.name} hides!`)
    }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide()





class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  class Elephant extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); 
      this.hide()
    }
  }
  
  let elephant = new Elephant("White Rabbit");
  
  elephant.run(5); 
  elephant.stop();



class Vehicle{
    constructor(name){
        this.name=name;
        this.speed=0;
    }

}
class Bike extends Vehicle{
    constructor(name,earthLength){
        super(name);
        this.earthLength=earthLength;
    }
}

let bike=new Bike("BMW",1500);
alert(bike.name);
alert(bike.earthLength);



class CoffeMachine{
    waterAmount=0
    constructor(power){
        this.power=power;
        alert(`created a  coffee machine with water :${power}`)
    }
}

let coffee=new CoffeMachine(100);
coffee.waterAmount=200;
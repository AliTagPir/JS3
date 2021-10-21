
/*
20/10/21
Practise 1
let value= prompt("What is your number?")
if (value %2===0){
    alert("even number")
}else{
    alert("odd number")
} 

Practise 2
let fNum= prompt("Give your first number")
let sNum= prompt("Give your second number")
if (fNum % sNum===0){
    alert(`True ${fNum} is divisble by ${sNum}`)
}else{
    alert(`False ${fNum} is not divisble by ${sNum}`)
} 

Practise 3 approach A 
let busCap= 42
let students=344
let busNum= Math.ceil(students/busCap)
alert(`there will be ${busNum} busses need to take all ${students} to the theatre`)


people = parseInt(prompt("student num"))

21/10/21


let rainbow=["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
alert(rainbow[4])
//rainbow.unshift(rainbow.pop())
rainbow.splice(0,0, "violet" )

console.log(rainbow)


let i=0
while(i<=100){
    console.log(i)
    i++
    if (i===100){console.log("boom")}//"boom" before 100
}
console.log("boom")


let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let usrNum= prompt("pick a number 0-6")

if (usrNum==0){
    alert(day[0])
}else if(usrNum==1){
    alert(day[1])    
}else if(usrNum==2){
    alert(day[2])    
}else if(usrNum==3){
    alert(day[3])    
}else if(usrNum==4){
    alert(day[4])    
}else if(usrNum==5){
    alert(day[5])    
}else if(usrNum==6){
    alert(day[6])    
}else{
    alert("Invalid number")
}

//Practise 1
let x=0
let pW =prompt("password:")
while(pW !="yeet" ){
    pW=prompt("try again")
    x++
}
alert(`welcome it took you ${x} attempts`)*/

//Practise 2?
let num=[]
let sum=0
let v
while (num.length<10){
    v=prompt("enter number")
    num.push(v)
    sum+v
}
alert(`max number= ${Math.max(...num)}, 
    min number= ${Math.min(...num)},
    sum= ${sum},`) 



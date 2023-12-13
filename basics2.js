/**Topics Covered : Loops and Conditions in JS
                    Implementing For and While Loops
                 **/

console.log ("** If Condition Example **")
const flag = true
if(flag){
    console.log("Condition is Satisfied")
}
else{
    console.log("Condition is not Satisfied")
}

console.log ("*******************")

console.log ("** Negotiator and Else conditonn Example **")
if(!flag){
    console.log("Condition is Satisfied")
}
else{
    console.log("Condition is not Satisfied")
}

console.log ("*******************")

console.log ("** While Condition Example **")
let i = 0
while (i <10)
{
    i++
    console.log(i)
}

console.log ("*******************")

console.log ("** Do While Condition Example **")
let j = 0
do
{
 j ++
}while (j>10)
console.log(j)

console.log ("*******************")

console.log ("** For Loop Example **")
for(let k=0;k<=10;k++)
{
    console.log("The value of the for loops " + k)
}

console.log ("** While Loop Condition Example **")
let required = true
while(required)
 {
   console.log(required)
  required = false //If u don't put required = false it will run infinite time. 
 }
console.log ("*******************")

console.log("Scenario #1 of using For Loop & If together: From 1 to 10 give common multiple values of 2 and 5.")
for (let k =1; k<=10; k++)
{
    if (k%2 == 0 && k%5 ==0) //% is nothing but a remainder
    console.log(k)
}
console.log ("*******************")

console.log("Scenario #2 : We want to have the multiples of 2 or 5")
for (let l=1; l<=100; l++)
{
    if (l%2 || l%5)
    {
        console.log(l)
    }
    
}
console.log ("*******************")

console.log("Scenario #3 :Common Multiply of 2 and 5. We want to print only the first 3 numbers. ")
n= 0
for (let k =1; k<=100; k++)
{
    if (k%2 == 0 && k%5 ==0) //% is nothing but a remainder
    {
        n ++ //increment the value of n once first execution is completed
        console.log(k)
    if(n == 3) //Once n reaches to 3 break the loop. 
    break
    }
 
}



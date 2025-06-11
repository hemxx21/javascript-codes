/*console.log("hello")

var fullName="hemaa s"
console.log(fullName)
var isLoggedIn=false
let age=20
function now(){
    let age=21
    var isLoggedIn=true
    console.log("inside",age)
    console.log("outside",isLoggedIn)
}
now()
console.log("outside",age)
console.log("outside",isLoggedIn)

const num1=10
const num2=20
const new1=0
function add(){
    new1= a+b
}
new1=add(num1,num2)
console.log(new1) */

function cal(operator){
    const num1=parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    let result;
    
    if(isNaN(num1) || isNaN(num2)){
        result="please enter a valid number"
    } else{
        switch(operator){
            case '+':
                result= num1+num2
                break
            case '-':
                result=num1-num2
                break
            case '*':
                result=num1*num2
                break
            case '/':
                result=num1/num2
                break
        }
    }
    document.getElementById('result').innerText="Result:" + result
}

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

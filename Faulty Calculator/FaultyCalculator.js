let num = Math.random()
function calc(num1,num2,operation)
{
    if(num< 0.1)
    {
        if(operation=="+") return num1-num2;
        if(operation=="-") return num1/num2;
        if(operation=="*") return num1+num2;
        if(operation=="/") return num1**num2;
    }
    else
    {
        if(operation=="+") return num1+num2;
        if(operation=="-") return num1-num2;
        if(operation=="*") return num1*num2;
        if(operation=="/") return num1/num2;
    }
}

console.log(calc(1,1,"+"));

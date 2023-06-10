// Let's do function:::::
console.log("Let's learn about function")

//Withour Argument
    function dice(){
        dice_num = Math.floor(Math.random() * 6) + 1
        console.log(dice_num)
    }

//with Argument
    function greet(Name){
        Name = prompt("Say Your Name!!");
        console.log(`Hello, ${Name}`);
    }

// Return Keyword
    function Sum(num1,num2){
        return num1 + num2
    }
    answer = Sum(35,34);
    // console.log(answer)
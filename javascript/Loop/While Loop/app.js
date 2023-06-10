// While we are learning about while loop, I am simultaneously having a great coffee

// Example
    let i = 0 
    while(i<70){
        console.log(i)
        i++ 
    }

// Breaks are IMPORTANT when you have high aims::::

        // input = prompt("Hello enter anything")
        // while(true){
        //     input = prompt("Hello enter anything");
        //     if(input === "anything"){
        //         break;
        //     }
        // }
        // console.log("Alright Smarty Pants")


//Guess number
    
    let lucky_num = 69
    input = prompt("Enter your guess")
    while(true){
        if(input === lucky_num){
            break
        }
        else if(input < lucky_num){
            input = parseInt(prompt("Aim higher"))
        }
        else if(input > lucky_num){
            input = parseInt(prompt("Aim lower"))
        }
        else{
            input = parseInt(prompt("Enter a number bitch"))
        }
    }
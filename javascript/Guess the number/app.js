
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
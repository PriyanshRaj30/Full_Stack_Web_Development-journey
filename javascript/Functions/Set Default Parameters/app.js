// Set default Parameters

    function RollDice1(no_sides){
        console.log(Math.floor(Math.random() * 6) + 1);
    }
    // RollDice1()

    //It can be done in two ways: 
        //::::Old Way::::

            function RollDice2(no_sides){
                if(no_sides === undefined){
                    no_sides =6;
                };
                console.log(Math.floor(Math.random() * no_sides) + 1);
            };
            RollDice2()
        //::::New and Proper Way:::
            
            function RollDice3(no_sides = 6){
                console.log(Math.floor(Math.random() * no_sides ) + 1);
            };
            RollDice3()
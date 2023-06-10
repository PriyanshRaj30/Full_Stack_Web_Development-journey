// LOOPS

    // |Types|
        // :: For Loop ::
        // :: While Loop ::
        // :: For..of Loop ::
        // :: for..in Loop ::
    
        // :::For Loop:::
            // for(let i = 1; i<=10; i++){
            //     if(i%2===0){
            //         console.log(i)
            //     }
            // }
            // for(let i =1; i<=25; i++){
            //     console.log(i)
            // }
        
        // Looping over an array 
            // let array = ["How", "are", "you", "?"]
            // for(let i =0 ; i<array.length; i++){
            //     console.log(i, array[i]);
            // }
        
        // Nested Loop
            let student = [["harry", "Ron", "Hormione"], ["Cedric" ,"Luna", "Nyphadora"]];
            for(let i=0; i<student.length; i++){
                let array2 = student[i];
                for(let j = 0; j < array2.length; j++){
                    console.log(array2[j])
                }
            }
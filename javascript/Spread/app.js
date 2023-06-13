// Spread 

    /* 
        Spread allows an iterable such as array to be expanded in situation where zero
        or more arguments or element are expected.
    */


    // Without Spread 
        let Max_no = Math.max(1,2,34,56);
        console.log(Max_no);    // It would be 56

        // But what about arrays:::
        let nums = [1,2,3,4,5,676];
        let Max_no_in_nums = Math.max(nums);
        console.log(Max_no_in_nums) // It would be NaN

        // Here comes Spread into the play
    
    //With Spread
        // It can be applied with just three dots (...)
        let nums1 = [1,2,3,4,5,69];
        let Max_no_in_nums1 = Math.max(nums);
        console.log(Max_no_in_nums1) // It would be 69



    //
        let cats = ["scott", "Bluie"]
        let dogs = ["Doggo", "Luna"]
        
        let All_pets = [...cats, ...dogs]
        console.log(All_pets)
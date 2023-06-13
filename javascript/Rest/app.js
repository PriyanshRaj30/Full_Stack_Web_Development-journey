// Rest Params
    /* 
        -Collects all remaining arguments into an actual array
        -Looks similar to SPREAD
    */
    
    //
        function display(...nums){
            console.log(nums);
        };
        display(1,2,34,5);

    //
        function add(...nums){
            console.log(nums.reduce((accumulator,num) => accumulator + num))
        }
        add(34,35)


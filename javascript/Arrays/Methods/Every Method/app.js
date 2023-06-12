// Every Method
    /*
        -> test all element in array pass the provided function 
        -> If all element passes, it returns true
        -> Else false
        -> it only returns boolean value
    */

    const mix = [2,4,6,8,10];

    let even = mix.every( n => {
        return n%2===0;
    }) 
    console.log(even);
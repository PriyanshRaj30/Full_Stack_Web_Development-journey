// Some Method
    /*
        -> test all element in array pass the provided function 
        -> If ANY element passes, it returns true
        -> Else false
        -> it only returns boolean value
    */

    const mix = [2,4,6,8,10,11,22];

    let greater_than_10 = mix.some( n => {
        return n > 10;
    }) 
    console.log(greater_than_10);
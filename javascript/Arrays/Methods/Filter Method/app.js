//Filter Method 
    /*  Adds element in the new array, only if it passes the test implementated by the 
        provided function 
    */

    const mix = [1,2,3,4,5,6,7,8,9,10];

    let even = mix.filter(n => {
        return n%2 === 0;  // If the callback return true, then the element to added to the array.
    })
    console.log(even);
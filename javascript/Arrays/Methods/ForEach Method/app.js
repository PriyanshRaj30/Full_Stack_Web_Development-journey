// For-Each Method
    //It is a method of Array 

    const num = [1,2,3,4,5,6,7,8,9,10];

    function display(n){
        console.log(n);
    }

    greater_than_10.forEach(display);

    // OR

    const num1 = [10,9,8,7,6,5,4,3,2,1];
    num1.forEach(function (n){
        console.log(n);
    })
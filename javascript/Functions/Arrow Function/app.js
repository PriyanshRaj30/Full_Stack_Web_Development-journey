// Arrow function
    // It's a different way of defining a function::

    const add = (x,y) => {
        console.log(`The sum of ${x} and ${y} is equal to ${x+y}`);
    }
    add(35,34);

    const Shock1 = (string) => {
        return (string.toUpperCase() + "!!!");
    }
    let ans1 = Shock1("priyansh")
    console.log(ans1)


    //Implicit Return 
        // compact alternative to a regular function expression
        // Here we don't have to write return 
        // Note: in this we have use parathesis in writing function, to imply that it a return statement
    const Shock = (string) => (
        (string.toUpperCase() + "!!!")  //we have use parathesis in writing function, to imply that it a return statement
    )
    let ans2 = Shock("Raj");
    console.log(ans2);
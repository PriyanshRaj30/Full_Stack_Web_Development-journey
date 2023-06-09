let array1 = [1,2,3,4]; //Int array
let array2 = ["Hello", "World"]; //String Array
let array3 = [1, 2, 3, "Hello", "World"]; //Mixed Array

// print element using index
    // console.log(array1[0])  //1
    // console.log(array1[1])  //2
    // console.log(array1[43]) //UNDEFINED

//Change element using index
    // array[1] = 3
    // array[123] = 45 |||| This would create empty element between intial last index and 123

//PUSH and POP
    let successor = [];
        successor.push("KENDELL");
        successor.push("ROMAN");
        successor.push("SHIV");
        console.log(successor);

        successor.pop();
        successor.pop();
        successor.pop();
        console.log(successor);

//SHIFT AND UNSHIFT
    let CEO = ["MATSON"];
    CEO.unshift("SHIV");
    console.log("FIRST   ---");
    console.log(CEO);
    CEO.shift();
    CEO.unshift("TOM");
    console.log("SECOND   ---");
    console.log(CEO);

// Other usefull Array Methods
    //concat():
                // let Array1 = [1,2,3,4]; 
                // let Array2 = [5,6,7,8];
                // let array3 = Array1.concat(Array2);
                // console.log(array3); // = [1,2,3,4,5,6,7,8]
    //includes():
            //Tell us if array include a perticular value
                // let Array1 = [1,2,3,4]
                // let array1.includes(1) // Returns true
    //indexedof():
            //Tells Index of element
                //let Arr = [1,2,3,4]
                //Arr.indexedof(1)   //returns 0
                //Arr.indexedof(10) // returns -1
    //reverse():
            //reverse the array
                //let Accending = [2,5,8,41,56,100]
                //let Decending = Accending.reverse()
    //Slice()
        // let colors = ["red", "Yellow", "Blue", "Orange", "Green", "Violet"];
        // let primary_colors = colors.slice(0,3);
        // console.log(primary_colors);
        // let secondary_colors = colors.slice(3);
        // console.log(secondary_colors);
    //Splice()
        // let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // num.splice(5,5);
        // console.log(num )
    //sort():
        // let str = ["b", "c", "a"]
        // let num1 = [3,2,1]
        // str.sort()
        // num1.sort()
        // console.log(str)
        // console.log(num1)
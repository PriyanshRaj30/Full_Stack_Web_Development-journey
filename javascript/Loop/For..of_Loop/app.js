// For..of Loop
    // It is a easy way of iterating over the arrays

    // yeh hai aam zindagi
        let array1 = ["A", "B", "C", "D"];
        for(let i=0; i<array1.length; i++){
            console.log(array1[i])
        }
    // yeh hai mentos zindagi
        let array2 = ["A1", "B1", "C1", "D1"];
        for(char of array2){
            console.log(char);
        }

    // 
        let array3 = [[1,2,3],[4,5,6],[7,8,9]];
        for(num of array3){ 
            for(int of num){
                console.log(int)
            }
        }

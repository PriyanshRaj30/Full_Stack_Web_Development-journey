// Map 
    // :Creates a new Array with the result of calling a callback on every element in the Array::
                        
    const num = [1,2,3,4,5,6,7,8,9,10];

    const double_num = num.map(function(n){
        return n * 2;
    })
    console.log(double_num)

    const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
    const firstNames = fullNames.map(function(name){
        return name.first;
    });
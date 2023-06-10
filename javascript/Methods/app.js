//_____:Method:____
    //We can add function as properties on object, these are know as properties

    //Let's Define one then

    const Car = {
        color(){
            return "red";
        },
        wheels(){
            return 4;
        },
        sys(){
            return "Automatic";
        }
    }
    
    //Now what the hell is "this"
        // It is similar as self in Python,
        // It is used to access properties of same object.

        const Car2 = {
            color(){
                return "blue";
            },
            wheels(){
                return 4;
            },
            sys(){
                return "Manual";
            },
            saymtproperties(){
                console.log(this.color())
                console.log(this.wheels())
                console.log(this.sys())
            }
        }
        Car2.saymtproperties()

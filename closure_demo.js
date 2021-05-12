function add() {
    let counter = 0;
    function plus() {
      counter += 1; return counter
    }
    return plus
  }

let doaddition= add(); // add is invoked which returns reference to function plus
doaddition(); // doaddition is now a reference to plus 
// hence doaddition()=plus()
doaddition(); // doaddition() is essentially invoking plus()
// the counter is now 2
 
/*
The variable doaddition is assigned the return value of the  add function which is plus .
The  add function only runs once. It sets the counter to zero (0), and returns a function  plus .
This way doaddition becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The counter is protected by the scope of the add function, and can only be changed using the doaddition function.
*/
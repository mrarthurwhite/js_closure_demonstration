function aName() {
  let name = "Arthur";
  function displayName() {
      console.log(name);
  }
  displayName(); 
}

aNname(); // displays Arthur
 
/*.

displayName is a function. 
The "wonderful" part is that it can access the name variable in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The name variable is protected by the scope of the aName function, and can only be accessed using the aName() function.
You cannot in other words modify the inner variable "name".
*/
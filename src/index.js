// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
// running tests
// Object.keys(bob).length should return 6.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
// tests completed

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let nameArr = firstAndLast.split(" ");
  console.log(nameArr);
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return nameArr[0];
  };
  this.getLastName = function() {
    return nameArr[1];
  };
  // bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
  this.setFirstName = function(firstName) {
    nameArr[0] = firstName;
    return nameArr.join(" ");
  };
  // bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry")
  this.setLastName = function(lastName) {
    nameArr[1] = lastName;
    return nameArr.join(" ");
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Hi"));
console.log(bob.setLastName("Man"));

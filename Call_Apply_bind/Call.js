function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  const person = {
    name: 'Alice'
  };
  
  greet.call(person, 'Hello', '!'); // "Hello, Alice!"
  
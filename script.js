// 1. Function that prints a name
function printMyName() {
    console.log("Sarah Domson");
  }
  
  // 2. Function that combines first and last names
  function createFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
  }
  
  // 3. Function that adds two numbers
  function addTwoNumbers(number1, number2) {
    const sum = number1 + number2;
    return sum;
  }
  
  const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 
    'Ethiopia', 'Finland', 'Germany', 'Hungary', 
    'IceLand', 'Ireland', 'Japan', 'Kenya'
  ];
  
  const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const products = [
    { name: 'banana', price: 3 },
    { name: 'mango', price: 6 },
    { name: 'potato', price: ' ' },
    { name: 'avocado', price: 8 },
    { name: 'coffee', price: 10 },
    { name: 'tea', price: '' }
  ];
  
  
  // Printing each item in arrays
  console.log("All countries:");
  countries.forEach(function(country) {
    console.log(country);
  });
  
  console.log("\nAll names:");
  names.forEach(function(name) {
    console.log(name);
  });
  
  console.log("\nAll numbers:");
  numbers.forEach(function(number) {
    console.log(number);
  });
  
  // Creating new transformed arrays
  const uppercaseCountries = countries.map(function(country) {
    return country.toUpperCase();
  });
  
  const countryNameLengths = countries.map(function(country) {
    return country.length;
  });
  
  const squaredNumbers = numbers.map(function(number) {
    return number * number;
  });
  
  // Filtering arrays
  const countriesWithLand = countries.filter(function(country) {
    return country.includes('land');
  });
  
  const sixLetterCountries = countries.filter(function(country) {
    return country.length === 6;
  });
  
  const countriesStartingWithE = countries.filter(function(country) {
    return country.startsWith('E');
  });
  
  // ===== USING THE FUNCTIONS ===== //
  printMyName();
  
  const myFullName = createFullName("Sarah", "Domson");
  console.log("My full name is:", myFullName);
  
  const numberSum = addTwoNumbers(5, 7);
  console.log("The sum is:", numberSum);
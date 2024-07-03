//Normal function

function add(x, y) {
    return x + y;
  }
  
  console.log(add(4, 5));
  
  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
  
  let result = toCelsius(105);
  console.log(result);
  
  console.log();
  //Arrow Function
  
  let sum = (a,b) =>{
      return a+b;
  }
  console.log(sum(5,5));
  
  
  //Short Arrow Function
  
  let sum1 = (a,b) => a+b;
  
  console.log(sum1(5,5));
  
  // without round paranthesis
  
  let hello = name => "Hello "+ name;
  console.log(hello("Vishal"));

  let myFunc = {  
    showArgs(){ 
     console.log(arguments); 
    } 
   }; 
console.log(myFunc.showArgs(1, 2, 3, 4));

function sumation(x,x){
  return x+x;
}
  
console.log(sumation(6,23));
  
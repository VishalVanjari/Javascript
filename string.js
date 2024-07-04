//normal String
let name = "Vishal";
console.log(name);

let statement = "Hello my name is 'Vishal'";
console.log(statement);

//String literals

console.log(`Hello '${name}'`);

//Escape charcter

console.log("Hii, he is my new friend \"Nikhil\"");

//String with new Keyword

let grret = new String("Good morning");
console.log(grret);

console.log(typeof(grret));
console.log(typeof(name));

//String Methods

let string = "Hello Good morning from Vishal";

//1.length
console.log(string.length);

//2.charAt
console.log(string.charAt(0));

//3. charCodeAt
console.log((string.charCodeAt(0)));

//4. at
console.log(string.at(-1));
console.log(string[9]);
console.log(string[35]);

//5. slice
console.log(string.slice(2,5));  // exclude last index like 6
console.log(string.slice(6));
console.log(string.slice(-11,-5));

//6.subString
console.log(string.substring(2,6));   //include last index like 6
console.log(string.substring(-12));
console.log(string.substr(1,9));

//6. substr
console.log(string.substr(6,9)); // 6 is starting point and 9 is length of slice string
console.log(string.substr(3));   // go till last index of string

//7.toUpperCase
console.log(string.toUpperCase());

//8.toLowerCase
console.log(string.toLowerCase());

//9. concat
let str1 = "Nikhil"
console.log(string.concat(" and ", str1));

//10.trim
let trimStr = "     Hello World     ";
console.log(trimStr);
console.log(trimStr.trim());

//11.trimStart
console.log(trimStr.trimStart());

//12.trimEnd
console.log(trimStr.trimEnd());

//13. padStart
let text = "5";
let padded = text.padStart(4,"0");
console.log(padded);

let num = 5;    // for number we have to convert number to string first
console.log(num.toString().padStart(4,"0"));

//14. padEnd
console.log(text.padEnd(5,"X"));

console.log(num.toString().padEnd(5,"X"));


//15. repeat
console.log(string.repeat(3));

//16.replace

console.log(string.replace("Vishal","Nikhil"));

//17.repaceAll
let text1 = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text1.replace("cats","dogs"));

//18.indexof

console.log(string.indexOf("Vishal"));

//19.search
console.log(string.search("Vishal"));

//20. includes
console.log(string.includes("Vishal"));

//21.startsWith
console.log(string.startsWith("Hello"));

//22.endswith
console.log(string.endsWith("Vishal"));
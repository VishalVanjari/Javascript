//Custom String to implement the String DS

class CostumString {
  constructor(value) {
    this.value = value || "";
  }

  // give length of string
  length() {
    return this.value.length;
  }

  //conaate the string to another string

  concate(str) {
    this.value = this.value + str;
    return this.value;
  }

  //give char at specific index

  charAt(index) {
    if (index < 0 || index >= this.value.length) {
      return "index not found";
    }
    return this.value[index];
  }

  // reverse the string

  reverse() {
    let reversed = "";
    for (let i = this.value.length - 1; i >= 0; i--) {
      reversed = reversed + this.value[i];
    }
    this.value = reversed;
    return this.value;
  }

  //convert string to uppercase

  touppercase() {
    let str = "";
    for (let i = 0; i < this.value.length; i++) {
      let charCode = this.value.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
        charCode = charCode - 32;
      }
      str = str + String.fromCharCode(charCode);
    }
    this.value = str;
    return this.value;
  }

  //convert string to lowercase

  tolowercase() {
    let str = "";
    for (let i = 0; i < this.value.length; i++) {
      let charCode = this.value.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        charCode = charCode + 32;
      }
      str = str + String.fromCharCode(charCode);
    }
    this.value = str;
    return this.value;
  }

  //repeat the string

  repeat(repeatNum) {
    let str = "";
    for (let i = 0; i < repeatNum; i++) {
      str = str + this.value;
    }
    this.value = str;
    return this.value;
  }
}

let str = new CostumString("Hello");
console.log(str.length());
console.log(str.concate(" Vishal"));
console.log(str.charAt(0));
console.log(str.reverse());
console.log(str.touppercase());
console.log(str.tolowercase());
console.log(str.repeat(3));

class CostumMap {
  constructor() {
    this.data = {};
  }
  // Add element in map

  set(key, value) {
    const keystr = this.convertKeyToString(key);
    this.data[keystr] = { key, value };
  }

  //Get element from map

  get(key) {
    const keystr = this.convertKeyToString(key);
    return this.data[keystr] ? this.data[keystr].value : undefined;
  }

  //cheack it is present or not

  has(key) {
    const keyStr = this.convertKeyToString(key);
    return this.data.hasOwnProperty(keyStr);
  }

  //Delete the pair of key value

  delete(key) {
    const keyStr = this.convertKeyToString(key);
    if (this.has(key)) {
      delete this.data[keyStr];
      return true;
    }
    return false;
  }

  //to clear the map

  clear() {
    this.data = {};
  }

  //to get the size of map

  size() {
    return Object.keys(this.data).length;
  }

  //print all keys

  keys() {
    return Object.values(this.data).map((item) => item.key);
  }

  //pRINT all Values

  values() {
    return Object.values(this.data).map((item) => item.value);
  }
  //convert key to string

  convertKeyToString(key) {
    if (typeof key === "object" && key !== null) {
      return JSON.stringify(key);
    }
    return String(key);
  }
}

let map = new CostumMap();
map.set("firstname", "Vishal");
map.set("lastName", "Vanjari");
map.set("Marks", 95);
map.set("age", 21);
map.set(25, "number");
map.set(true, "Boolean");
console.log(map.get("firstname"));
console.log(map.get(true));
console.log(map.size());
console.log(map.delete("age"));
console.log(map.size());
console.log(map.keys());
console.log(map.values());

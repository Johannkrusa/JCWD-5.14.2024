// =================== map / hashtable ========================

let myMap = new Map();

myMap.set("name", "Ayaya");
myMap.set("age", 20);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.values());

for(let [key, value] of myMap){
    console.log("key ---->", key,", value ----?", value)
}
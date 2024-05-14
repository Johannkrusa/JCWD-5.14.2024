// ========= set ==========

// doesnt allow any duplicate values, only unique value 

const fruits  = ["banana", "apple", "jackfruit", "apple"];

const  newFruits = new Set(fruits);

const uniqueFruitsArray = [...newFruits];

console.log(newFruits);

console.log(uniqueFruitsArray);
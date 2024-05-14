// ========= stack =========

let arr = [1,2,3,4];

arr.push(5);

console.log(arr);

arr.pop();

console.log(arr)

class Stack{
    #maxSize;
    #container = [];
    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }

    getContainer(){
        return this.#container;
    }

    push(element){
        if(this.#container.length < this.#maxSize){
            this.#container.push(element);
        }else{
            console.log("stack overflow");
        }
    }

    pop(){
        if(this,this.#container.length > 0){
            this.#container.pop();
        }
        else{
            console.log("stack underflow");
        }
    }
}

var object = new Stack(4);

object.push(1);
object.push(2);
object.push(3);
object.push(4);

object.getContainer();
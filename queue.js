// ========= queue ==========

class Queue{
    #container= [];
    
    enqueue(element){
        this.#container.push(element);
    }

    dequeue(){
        this.#container.shift();
    }

    getContainer(){
        console.log(this.#container);
    }
}

let q = new Queue;

q.enqueue(1);
q.enqueue(2);

q.getContainer();
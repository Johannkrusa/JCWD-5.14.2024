var arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

// [ [0,1] [0,2] ], [ [0,3] [0,4] ] 


function matrix(n){
    var k = 0;
    var result = [];
    for(var i = 0 ; i < n ; i++){
        var tempArr = [];
        for(var j = 0; j < n; j++){
            tempArr.push(arr[0][k]);
            k++;
        }
        result.push(tempArr);
    }
    return result;
}

console.log(matrix(2));


function matrix2(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        var tempArr = [];
        for (var j = 1; j <= n; j++){
            if (i % 2 == 1){
                var num = (i - 1) * n + j;
                tempArr.push(num);
            } else{
                var num = i * n - j + 1;
                tempArr.push(num);
            }
        }
        result.push(tempArr);
    }
    return result;
}


console.log(matrix2(4))
// 1,2,3,4  (i - 1) * n + j;
// 8,7,6,5  i * n - j + 1;
// 9,10,11,12 
// 16,15,14,13 

function matrix3(n) {
    var counter = 1;
    var result = [];
    for (var i = 0; i < n; i++) {
        var tempArr = [];
        var reverseStart = counter + n - 1;

        for (var j = 0; j < n; j++){
            if (i % 2 == 0) {
                tempArr.push(counter);
            } else{
                tempArr.push(reverseStart);
                reverseStart--;
            }
            counter++;
        }
        result.push(tempArr);
    }
    return result;
}

console.log(matrix3(4));

function combinedArray(arr){
    var result = []
    for(var i = 0; i < arr.length/2; i++ ){
        var combined = [arr[i]];
        if( i === arr.length -i -1){
            combined.push("Instructor");
        }
        else {
            combined.push(arr[arr.length-i-1]);
        }
        result.push(combined)
    }
    return result;
}

var arr = ['a','b','c','d','e']

console.log(combinedArray(arr));

class TwoDimensionalShapes{
    color="";
    constructor(color){
        this.color = color;
    }

    circumference(){
        return 2*2;
    }

    area(){
        return 2+2;
    }
}

class Triangle extends TwoDimensionalShapes{
    constructor(){
        
    }
}

class Square extends TwoDimensionalShapes{
    side = 0;
    constructor(color){
        super(color);
    }
    area(){
        return (this.side * this.side);
    }
    circumference(){
        return 4*this.side;
    }
}

class Circle extends TwoDimensionalShapes {
    radius = 0;
    constructor(color){
        super(color);
    }
    
    area() {
        return Math.PI * (this.radius ** 2);
    }
    
    circumference() {
        return Math.PI * this.radius * 2;
    }
}

let newCircle = new Circle;
newCircle.radius = 14;
newCircle.color = "you're colorblind dumbass"
console.log(newCircle.area());
console.log(newCircle.color)

class UnknownShape extends TwoDimensionalShapes{
    circumference(){
        return super.circumference()*5;
    }
}
let shapeless = new UnknownShape;
console.log(shapeless.circumference());

function pyramid(n){
    for(var i = 0; i < n; i++){
        var str="";
        var counter = 0;
        for(let j = 0; j < n - i - 1; j++){
            str += "_";
            counter ++;
        }
        for(let j = 0; j < (2*i+1); j++){
            str += "*";
        }
        for(let j = 0; j < counter; j++){
            str += "_";
        }
    console.log(str)
    }
    
}


pyramid(7);
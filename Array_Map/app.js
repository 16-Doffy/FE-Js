// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = arr.map( (item) => item * 2);
// console.log(arr2);
//implement 
Array.prototype.mapArray = function() {
    console.log(this);
    let newArr = this; 
    for(let i = 0; i < this.length; i++) {
        const element = this[i];
        newArr[i] = fn(newArr[i]);
    }
    return newArr;
};
let arr = [1,2,3,4,5,6,7];
arr.mapArray( (item) => item * 5);
console.log("arr",arr);
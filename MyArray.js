"use strict";
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
    get(index) {
        return this.data[index];
    }
    clear() {
        this.data = {};
        this.length = 0;
    }
    print() {
        console.log(this.data);
    }
}
const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.delete(2);
myArray.print();

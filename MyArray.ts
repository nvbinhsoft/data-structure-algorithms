class MyArray<T> {
    private length: number;
    private data: { [index: number]: T };

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item: T) {
        this.data[this.length] = item;
        this.length++;
    }

    pop(): T {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;
    }

    private shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }

    get(index: number): T {
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

const myArray = new MyArray<string>();

myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.delete(1);
myArray.print()

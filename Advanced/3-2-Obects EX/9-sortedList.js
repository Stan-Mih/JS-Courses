function createSortedList() {
    let obj = {
        arr : [],
        add : function (input) {
            this.arr.push(input);
        },
        remove : function (index) {
            this.arr.splice(index,1)
        },
        get : function (index) {
           return this.arr[index];
        },
        size : this.arr.length
    }
    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.arr);
console.log(list.get(1)); 
list.remove(1);
console.log(list.arr);
console.log(list.get(1));
console.log(list.size);

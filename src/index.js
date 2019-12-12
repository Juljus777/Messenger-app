
let funcs = {
    sum(a,b){
        return a+b;;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(funcs.sum(5,5));
console.log(funcs.sub(1,21));

class Cat {
    constructor(name){
        this.age = 0;
        this.name = name;
    }
    getOlder(){
        this.age++;
    }
}
let cat = new Cat('Nuustik');
console.log(cat)
cat.getOlder();
console.log(cat);
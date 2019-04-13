var a = {};

a.valueOf = function(){
    if (!this.i) {
        this.i = 0;
    }
    this.i++;
    return this.i;
};

console.log('a == a', a == a); // true
console.log('a < a', a < a); // true

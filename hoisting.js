var f;
console.log('1', f); // f.toString(), coz of hoisting
function f(){
    console.log('2', f); // never be fired, coz no execution in code
}

var f = 1;

console.log('3', f); // 1, coz redeclared on line 7

var arr = ['apa', 'orangutang', 'gorilla', 'get', 'giraff',];
console.log(arr);
var person = {
    name: "anton",
    age: 3,
    canDrink: false
};
console.log(person);
function stringreturn(x) {
    console.log("Hej ".concat(x));
}
stringreturn(person.name);
for (var i = 0; i <= (arr.length - 1); i++) {
    stringreturn(arr[i]);
}

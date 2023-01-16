const arr = ['apa', 'orangutang', 'gorilla', 'get', 'giraff',];

console.log(arr)

interface objInterface {
    name: string;
    age: number;
    canDrink: boolean;
}

const person: objInterface = {
    name: "anton",
    age: 3,
    canDrink: false,
}

console.log(person)



function stringreturn(x: any) {
    console.log(`Hej ${x}`)
}
stringreturn(person.name)


for (let i = 0; i <= (arr.length - 1); i++) {
    stringreturn(arr[i])
}
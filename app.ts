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



function stringtest(x) {
    console.log(`Hejsan ${x}`)
}
stringtest(person.name)


for (let i = 0; i <= (arr.length - 1); i++) {
    console.log(arr[i])
}
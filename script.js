let subTotal = 200;//document.getElementById("subTotal");
let tipPer = 20 / 100;//document.getElementById('tipP') / 100;
let people = 2;//document.getElementById('totalPeople');
let outPut //= document.getElementById('output');
//global variables

function calcTip(sub, per){
    return sub * per;
};

let tip = calcTip(subTotal, tipPer);

console.log(tip);

function withTip(tip, sub){
    return tip + sub;
};
let total = withTip(tip, subTotal);

console.log(total);

function perPerson(total, people){
    return total / people;
};

let totalPerPerson = perPerson(total, people);

console.log(totalPerPerson);
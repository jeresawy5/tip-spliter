
let subTotal;
let tipPer;
let people;
let tip;
let total;
let outPut = document.getElementById('output');
let submit = document.getElementById('submit');
//global variables


const calcTip = () => {
    tip = subTotal * tipPer;
};

const withTip = () => {
    tip + subTotal;
};

const perPerson = (total, people) => {
    total / people;
};

submit.addEventListener("click", function final(){
    subTotal = document.getElementById("subTotal").value
    tipPer = document.getElementById('tipP').value / 100
    people = document.getElementById('totalPeople').value
    calcTip();
    withTip();
    perPerson();
    outPut.innerHTML = perPerson;
});
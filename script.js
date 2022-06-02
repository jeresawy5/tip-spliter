
let subTotal = 0;
let tipPer = 0;
let people = 0;
let tip = 0;
let total = 0;
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

submit.addEventListener("click", final());

function final(){
    subTotal = document.getElementById("subTotal").value;
    tipPer = document.getElementById('tipP').value;
    people = document.getElementById('totalPeople').value;
    calcTip();
    withTip();
    perPerson();
    outPut.innerHTML = perPerson;
};
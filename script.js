
let subTotal;
let tipPer;
let people;
let tip;
let total;
const outPut = document.getElementById('output');
let submit = document.getElementById('submit')
//global variables

function calcTip(tipPer, subTotal){
    tip = tipPer/100 * subTotal;
};

function withTip(tip, subTotal){
    tip + subTotal;
};

function perPerson(total, people){
    total / people;
};

function getVal(){
    subTotal = document.getElementById("subTotal").value;
    tipPer = document.getElementById('tipP').value;
    people = document.getElementById('totalPeople').value;
};

let 
submit.addEventListener("click", function(){
    getVal();
    total = calcTip(tipPer, subTotal) + withTip(tip, subTotal);
    perPerson();
    outPut.innerHTML = '$ ' + perPerson(total, people);
});


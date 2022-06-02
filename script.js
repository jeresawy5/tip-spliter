
let subTotal;
let tipPer;
let people;
let tip;
let total;
let outPut = document.getElementById('outPut');
let submit = document.getElementById('submit');
//global variables

function calcTip(tipPer, subTotal){
    tip = tipPer/100 * subTotal;
};

function withTip(tip, subTotal){
   total = tip + subTotal;
};

function perPerson(total, people){
    return total / people;
};

function getVal(){
    subTotal = document.getElementById("subTotal").value;
    tipPer = document.getElementById('tipPer').value;
    people = document.getElementById('totalPeople').value;
};
submit.addEventListener("click",final());

function final(){
    getVal();
    perPerson();
    outPut.innerHTML = '$ ' + perPerson(total, people);
};
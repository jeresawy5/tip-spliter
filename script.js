
let global_data = {
    subTotal,
    tipPer,
    people: undefined,
    tip: undefined,
    total: undefined,
    output: document.getElementById('output'),
    submit: document.getElementById('submit'),
}

function calcTip(tipPer, subTotal){
    global_data.tip = tipPer/100 * subTotal;
};
    
function withTip(tip, subTotal){
    global_data.total = tip + subTotal;
};
    
function perPerson(total, people){
    console.log(total, typeof total, people, typeof people);
    return total / people;
};

function getVal(){
    global_data.subTotal = parseInt(document.getElementById("subTotal").value);
    global_data.tipPer = parseInt(document.getElementById('tipPer').value);
    global_data.people = parseInt(document.getElementById('totalPeople').value);
};

function split_tip(){
    getVal();
    calcTip(global_data.tipPer, global_data.subTotal);
    withTip(global_data.tip, global_data.subTotal);
    output.innerHTML = '$ ' + perPerson(global_data.total, global_data.people);
};
    submit.addEventListener("click",split_tip());
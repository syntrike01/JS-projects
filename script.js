const plusBtn = document.getElementById('button__add');
const subBtn = document.getElementById('button__sub');
const resetBtn = document.getElementById('button__reset');
const displayNum = document.getElementById('counter__display');
let count = 0;

function add(){
    count += 1;
    displayNum.textContent = count;
}

function sub(){
    count -= 1;
    displayNum.textContent = count;
}

function reset(){
    count = 0;
    displayNum.textContent = count;
}



plusBtn.addEventListener('click', add);

subBtn.addEventListener('click', sub);

resetBtn.addEventListener('click', reset);

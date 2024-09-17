let input = document.querySelector('.CGPA');
let btn = document.querySelector('.button');
let underline = document.querySelector('.underline');
let label = document.querySelector('.label');
let result = document.querySelector('.result');
let oneheading = document.querySelector('.one');
let twoheading = document.querySelector('.two');let input = document.querySelector('.CGPA');
let btn = document.querySelector('.button');
let underline = document.querySelector('.underline');
let label = document.querySelector('.label');
let result = document.querySelector('.result');
let result1 = document.querySelector('.result1');
let oneheading = document.querySelector('.one');
let twoheading = document.querySelector('.two');


oneheading.addEventListener('click',()=>{
    underline.classList.remove('translate');
    input.placeholder = 'Enter the CGPA';
    label.innerText = 'CGPA';
    result.style.display='none';
    result1.style.display='block';
    btn.classList.add('active');
})

twoheading.addEventListener('click',()=>{
    underline.classList.add('translate');
    input.placeholder = 'Enter the GPA';
    label.innerText = 'GPA';
    result1.style.display='none';
    result.style.display='block';
    btn.classList.remove('active');
})
btn.addEventListener('click',()=>{
    if(input.value==''){
        alert('Please fill the input field !');
    }
    else{

        if(btn.classList.contains('active')){
            gpa();
        }
        else{
            cgpa();
        }
    }
        clearinput()
    
})
function cgpa(){
    let value=Number(input.value);
    let cgpa=(value*2.5).toFixed(2);
    result.innerText=`Your CGPA is :${cgpa}`;
    setTimeout(() => {
        result.innerText='';
    }, 2000);
}
function gpa(){
    let value=Number(input.value);
    let gpa=(value/2.5).toFixed(2);
    result1.innerText=`Your GPA is :${gpa}`;
    setTimeout(() => {
        result1.innerText='';
    }, 2000);
}

function clearinput(){
    input.value='';
}


twoheading.addEventListener('click', () => {
    underline.classList.add('translate');
    input.placeholder = 'Enter the GPA';
    label.innerText = 'GPA';
    btn.addEventListener('click', cgp)
})
oneheading.addEventListener('click', () => {
    underline.classList.remove('translate');
    input.placeholder = 'Enter the CGPA';
    label.innerText = 'CGPA';
    btn.addEventListener('click', gpa)
})
function clear() {
    input.value = '';
}
// finding gpa
btn.addEventListener('click', gpa);


function cgp() {
    let num = Number(input.value);
    let cgpa = num * 2.5;
    result.innerText = cgpa;
    clear();
}
// gpa
function gpa() {
    let value = Number(input.value);
    let gp = (value * 4) / 10;
    result.innerText = gp;
    clear();
}

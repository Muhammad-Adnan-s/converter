let input = document.querySelector('.CGPA');
let btn = document.querySelector('.button');
let underline = document.querySelector('.underline');
let label = document.querySelector('.label');
let result = document.querySelector('.result');
let oneheading = document.querySelector('.one');
let twoheading = document.querySelector('.two');


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
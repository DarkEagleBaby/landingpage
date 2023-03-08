const relForm = document.querySelector('form');
const subBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('.main-form input')
const pass = document.querySelector('#pass')
const passConf = document.querySelector('#passConf')
const passDiv = document.querySelector('.passDiv')
const passErrMsg = document.querySelector('.passDiv>p')

subBtn.addEventListener('click',(e)=>{
    if(pass.value!==passConf.value){
        e.preventDefault();
        passErrMsg.classList.remove('hidden')
    }
})
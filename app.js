let eyeBtn = document.querySelector(`.passToggle .eyeBtn`);
let passInput = document.querySelector(`.passToggle input[Type = password]`);



eyeBtn.addEventListener(`click`, () => {
    if(passInput.type == `password`){
        passInput.type = `text`;
        eyeBtn.innerHTML = `<i class="bi bi-eye"></i>`
        
    } else{
        passInput.type = `password`;
        eyeBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`
    }
    
})

let submitBtn = document.querySelector(`.passToggle .submit`)





submitBtn.addEventListener(`click` , () => {
if(passInput.value.length <= 0) {
        alert(`Please fill in the password`);
    } else if(passInput.value.length <= 6){
        alert(`Please give a strong Password`)
} else{
    alert(`Password is submitted successfully`)
}

})
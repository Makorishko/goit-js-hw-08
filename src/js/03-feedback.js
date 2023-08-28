
import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

const savedValues = localStorage.getItem("feedback-form-state");
if (savedValues) {
    const values = JSON.parse(savedValues);
    form.elements[0].value = values.email;
    form.elements[1].value = values.message;
}


form.addEventListener("input", throttle(function (event){
    const values = {
        email: form.elements[0].value,
        message: form.elements[1].value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(values));
},500));



form.addEventListener('submit', event => {
    event.preventDefault();
    
    console.log({
        email: form.elements[0].value,
        message: form.elements[1].value
    })
    localStorage.clear();
    form.reset();
})
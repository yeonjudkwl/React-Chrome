let user_form = document.querySelector('.user_form');
let input = user_form.querySelector("input");
let greetings = document.querySelector(".greetings");

const CURRENT_USER = "currentUser";
const SHOWING = "showing"
const userName = localStorage.getItem(CURRENT_USER);

let today = new Date();
let h = today.getHours();

function loadName(){
    if (userName){
        greetings.setAttribute('class', SHOWING);
        if (h > 6 && h < 12){
            text = "Good Morning"
        }
        else if (h < 18){
            text = "Good Afternoon"
        }else{
            text = "I'm rooting for you"
        }
        greetings.innerText = `${text}, ${userName}`;
    }else{
        user_form.setAttribute('class', SHOWING);
        user_form.addEventListener("submit",function(e){
            // e.preventDefault();
            localStorage.setItem(CURRENT_USER, input.value); 
        })
    }
}
loadName();
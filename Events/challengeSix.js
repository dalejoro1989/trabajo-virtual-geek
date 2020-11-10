//call screem clean with his name class
const body = document.querySelector('.body');
var key;
//ascci code to keys of the keyboard r: 114 p:112
//event chmge class css 
const changeClass = (event) => {
    key = event.keyCode;
// conditional if we touch red or purple 
    if (key == 114) {
        body.classList.add('red');
        body.classList.remove('purple');
    }
    else if (key == 112) {
        //change screem in class css add and remove
        body.classList.add('purple');
        body.classList.remove('red');
    }
}
//even if keypress change color
body.addEventListener('keypress', changeClass);
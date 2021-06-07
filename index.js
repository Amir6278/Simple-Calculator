let screen = document.getElementById("screen");

let btns = document.querySelectorAll('button')
let screenValue = ''
for (item of btns) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText


        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue
        } else if (buttonText == 'C') {
            screenValue = ""
            screen.value = screenValue
        } else if (buttonText == '=') {

            screen.value = eval(screenValue)

        } else {
            screenValue += buttonText
            screen.value = screenValue
        }




    })

}

function myFunction() {
    this.classList.add('playing')
}
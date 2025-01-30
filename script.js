const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let user set the password lenght 
let passwordLenght = 0;
const inputLenght = document.querySelector('#pass-lenght');
inputLenght.addEventListener('change', () => {
  passwordLenght = inputLenght.value;
  ;
})

let input = document.getElementById("pass-lenght")
let displayLenght = document.getElementById("display-lenght")
input.oninput = function (e) {
	displayLenght.innerHTML = this.value;
}


let passEl1 = document.getElementById("pas1")
let passEl2 = document.getElementById("pas2")


function generate() {
let password1 = []
let password2 = []

if (passwordLenght >= 8 && passwordLenght <=32) {
       for (let i=0; i < passwordLenght; i++) {
        const length = characters.length
        let randomNum1 = Math.floor(Math.random() * 91)
        let randomCharacter1 = characters[randomNum1]
        let randomNum2 = Math.floor(Math.random() * 91)
        let randomCharacter2 = characters[randomNum2]
        password1 += randomCharacter1 
        password2 += randomCharacter2
        passEl1.innerText = password1
        passEl2.innerText = password2
       }           
   }
  else {
    passEl1.innerText = "Wrong lenght of password"
    passEl2.innerText = "Wrong lenght of password"
   } 
}

function copyPass1() {
  navigator.clipboard.writeText(passEl1.innerText)
  }

function copyPass2() {
  navigator.clipboard.writeText(passEl2.innerText)
    }



    
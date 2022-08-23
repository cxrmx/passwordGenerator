const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateBtn = document.querySelector("#generate-pass")
let firstPass = document.querySelector(".password1")
let secondPass = document.querySelector(".password2")

generateBtn.addEventListener("click", randomPassword)

function randomPassword() {
    let password = "";
    let password2 = "";
    for (let i = 0; i < 15; i++) {
        const idx = Math.floor(Math.random() * characters.length)
        password += characters[idx]
        const secondIdx = Math.floor(Math.random() * characters.length)
        password2 += characters[secondIdx]
    }
    firstPass.textContent = password
    secondPass.innerText = password2
}


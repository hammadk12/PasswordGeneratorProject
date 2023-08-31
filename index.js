const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord = document.getElementById("grid-item1")
let passWord2 = document.getElementById("grid-item2")


//Generate two random passwords, each must be 15 characters long

function getRandomPassword() {
    const n = 15  // number of elements we want to get
    let shuffledArray = characters.sort(() => 0.5 - Math.random()) // shuffles array
    let pass = shuffledArray.slice(0, n) // gets first n elements after shuffle
    let final =  ''.concat(...pass) //spread operator used
    passWord.textContent = final
}

function getRandomPassword2() {
    const n = 15  // number of elements we want to get
    let shuffledArray = characters.sort(() => 0.5 - Math.random()) // shuffles array
    let pass = shuffledArray.slice(0, n) // gets first n elements after shuffle
    let final =  ''.concat(...pass) //spread operator used
    passWord2.textContent = final
}


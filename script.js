let allButtons = document.getElementById("buttons")
let buttonCount = 25
let GenerateButtons = () => {
    for (let index = 0; index < buttonCount; index++) {
        allButtons.innerHTML += "<button class= \"tile\">_</button>"
    }
}
GenerateButtons()
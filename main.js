const number = document.querySelector(".number")
const btn = document.querySelector(".generate")

function generate(){
    number.innerHTML = Math.floor(Math.random() * 10 + 1)
}
generate()
btn.addEventListener("click",generate)

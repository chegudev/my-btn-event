const BTN = document.querySelector("#btn");
const TEXT = document.querySelector("#text");

BTN.classList.remove("hidden");
TEXT.classList.add("hidden");

function reveal(e)
{
    e.preventDefault();
    BTN.classList.toggle("hidden");
    TEXT.classList.toggle("hidden");
}

BTN.onclick = reveal;
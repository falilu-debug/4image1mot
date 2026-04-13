
function addLetter(button, letter) {
    let level = button.closest(".level");
    let slots = level.querySelectorAll(".word span");

    for (let slot of slots) {
        if (slot.textContent === "") {
            slot.textContent = letter;
            button.disabled = true;
            break;
        }
    }
}

function checkWord(correctWord, levelNum) {
    let level = document.getElementById("level" + levelNum);
    let slots = level.querySelectorAll(".word span");
    let word = "";

    slots.forEach(s => word += s.textContent);

    let msg = document.getElementById("msg" + levelNum);

    if (word === correctWord) {
        msg.textContent = "✅ Bravo !";

        setTimeout(() => {
            level.style.display = "none";
            let next = document.getElementById("level" + (levelNum + 1));
            if (next) next.style.display = "block";
        }, 1000);

    } else {
        msg.textContent = "❌ Mauvais mot";
    }
}
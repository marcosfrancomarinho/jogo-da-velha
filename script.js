const square = document.querySelectorAll(".content-game")
let counter = 0
const game = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
]
document.querySelector("button").addEventListener("click", clear)
window.onload = () => {
    for (idx in game) {
        square[idx].addEventListener("click", gaming)
    }
}

function gaming() {
    if (counter % 2 == 0) {
        this.innerHTML = "❌"
        const x = this.dataset.num
        game[x] = "X"
        check()
    } else {
        this.innerHTML = "⚪"
        const x = this.dataset.num
        game[x] = "O"
        check()
    }
    counter++
}

function check() {
    if (game[0] === "X" && game[1] === "X" && game[2] === "X" || game[0] === "O" && game[1] === "O" && game[2] === "O") {
        color([1, 2, 0])
    }
    else if (game[3] === "X" && game[4] === "X" && game[5] === "X" || game[3] === "O" && game[4] === "O" && game[5] === "O") {
        color([3, 4, 5])
    }
    else if (game[6] === "X" && game[7] === "X" && game[8] === "X" || game[6] === "O" && game[7] === "O" && game[8] === "O") {
        color([6, 7, 8])
    }
    else if (game[0] === "X" && game[3] === "X" && game[6] === "X" || game[0] === "O" && game[3] === "O" && game[6] === "O") {
        color([0, 3, 6])
    }
    else if (game[1] === "X" && game[4] === "X" && game[7] === "X" || game[1] === "O" && game[4] === "O" && game[7] === "O") {
        color([1, 4, 7])
    }
    else if (game[2] === "X" && game[5] === "X" && game[8] === "X" || game[2] === "O" && game[5] === "O" && game[8] === "O") {
        color([2, 5, 8])
    }
    else if (game[0] === "X" && game[4] === "X" && game[8] === "X" || game[0] === "O" && game[4] === "O" && game[8] === "O") {
        color([0, 4, 8])
    }
    else if (game[2] === "X" && game[4] === "X" && game[6] === "X" || game[0] === "O" && game[4] === "O" && game[6] === "O") {
        color([2, 4, 6])
    }
    else if (game[0] != 1 && game[1] != 1 && game[2] != 1 && game[3] != 1 && game[4] != 1 && game[5] != 1 && game[6] != 1 && game[7] != 1 && game[8] != 1) {
        setTimeout(() => {
            alert("DEU VELHA !")
            clear()
        }, 200)
    }
}

function color(value) {
    value.map(data => {
        square[data].classList.add("animation")
    })
    for (idx in game) {
        square[idx].removeEventListener("click", gaming)
    }
}

function clear() {
    for (idx in game) {
        game[idx] = 1
        square[idx].classList.remove("animation")
        square[idx].innerHTML = ""
        square[idx].addEventListener("click", gaming)
    }
}
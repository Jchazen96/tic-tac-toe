let a1, a2, a3, b1, b2, b3, c1, c2, c3, p1Wins, p2Wins, p1WinCount, p2WinCount, winner
p1Wins = document.getElementById('p1-wins')
p2Wins = document.getElementById('p2-wins')
winner = document.getElementById('winner')
a1 = document.getElementById('a1')
a2 = document.getElementById('a2')
a3 = document.getElementById('a3')
b1 = document.getElementById('b1')
b2 = document.getElementById('b2')
b3 = document.getElementById('b3')
c1 = document.getElementById('c1')
c2 = document.getElementById('c2')
c3 = document.getElementById('c3')
p1WinCount = 0
p2WinCount = 0

let player = 1

const a1Action = () => {
    if (player === 1) {
        a1.value = "X"
        a1.disabled = true
        player = 2
    }
    else {
        a1.value = "0"
        a1.disabled = true
        player = 1
    }
}

const a2Action = () => {
    if (player === 1) {
        a2.value = "X"
        a2.disabled = true
        player = 2
    }
    else{
        a2.value = "0"
        a2.disabled = true
        player = 1
    }
}
const a3Action = () => {
    if (player === 1) {
        a3.value = "X"
        a3.disabled = true
        player = 2
    }
    else{
        a3.value = "0"
        a3.disabled = true
        player = 1
    }
}
const b1Action = () => {
    if (player === 1) {
        b1.value = "X"
        b1.disabled = true
        player = 2
    }
    else{
        b1.value = "0"
        b1.disabled = true
        player = 1
    }
}
const b2Action = () => {
    if (player === 1) {
        b2.value = "X"
        b2.disabled = true
        player = 2
    }
    else{
        b2.value = "0"
        b2.disabled = true
        player = 1
    }
}
const b3Action = () => {
    if (player === 1) {
        b3.value = "X"
        b3.disabled = true
        player = 2
    }
    else{
        b3.value = "0"
        b3.disabled = true
        player = 1
    }
}
const c1Action = () => {
    if (player === 1) {
        c1.value = "X"
        c1.disabled = true
        player = 2
    }
    else{
        c1.value = "0"
        c1.disabled = true
        player = 1
    }
}
const c2Action = () => {
    if (player === 1) {
        c2.value = "X"
        c2.disabled = true
        player = 2
    }
    else{
        c2.value = "0"
        c2.disabled = true
        player = 1
    }
}
const c3Action = () => {
    if (player === 1) {
        c3.value = "X"
        c3.disabled = true
        player = 2
    }
    else{
        c3.value = "0"
        c3.disabled = true
        player = 1
    }
}

const checkWin = () => {
    if ((a1.value == 'X') && (a2.value == 'X') && (a3.value == 'X')) {
        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        c1.disabled = true
        c2.disabled = true
        c3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((b1.value == 'X') && (b2.value == 'X') && (b3.value == "X")) {
        a1.disabled = true
        a2.disabled = true
        a3.disabled = true
        c1.disabled = true
        c2.disabled = true
        c3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((c1.value == 'X') && (c2.value == 'X') && (c3.value == "X")) {
        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        a1.disabled = true
        a2.disabled = true
        a3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a1.value == 'X') && (b1.value == 'X') && (c1.value == "X")) {
        a2.disaled = true
        a3.disabled = true
        b2.disabled = true
        b3.disabled = true
        c2.disabled = true
        c3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a2.value == 'X') && (b2.value == 'X') && (c2.value == "X")) {
        a1.disabled = true
        a3.disabled = true
        b1.disabled = true
        b3.disabled = true
        c1.disabled = true
        c3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a3.value == 'X') && (b3.value == 'X') && (c3.value == "X")) {
        a1.disabled = true
        a2.disabled = true
        b1.disabled = true
        b2.disabled = true
        c1.disabled = true
        c2.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a1.value == 'X') && (b2.value == 'X') && (c3.value == "X")) {
        a2.disabled = true
        a3.disabled = true
        b1.disabled = true
        b3.disabled = true
        c1.disabled = true
        c2.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a3.value == 'X') && (b2.value == 'X') && (c1.value == "X")) {
        a1.disabled = true
        a2.disabled = true
        b1.disabled = true
        b3.disabled = true
        c2.disabled = true
        c3.disabled = true
        p1WinCount += 1
        p1Wins.innerHTML = `Player 1: ${p1WinCount}`
        winner.innerHTML = "Winner: Player 1!"
        window.alert('Player 1 Wins')
    }
    else if ((a1.value == '0') && (a2.value == '0') && (a3.value == '0')) {
        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        c1.disabled = true
        c2.disabled = true
        c3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((b1.value == '0') && (b2.value == '0') && (b3.value == "0")) {
        a1.disabled = true
        a2.disabled = true
        a3.disabled = true
        c1.disabled = true
        c2.disabled = true
        c3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((c1.value == '0') && (c2.value == '0') && (c3.value == "0")) {
        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        a1.disabled = true
        a2.disabled = true
        a3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((a1.value == '0') && (b1.value == '0') && (c1.value == "0")) {
        a2.disaled = true
        a3.disabled = true
        b2.disabled = true
        b3.disabled = true
        c2.disabled = true
        c3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((a2.value == '0') && (b2.value == '0') && (c2.value == "0")) {
        a1.disabled = true
        a3.disabled = true
        b1.disabled = true
        b3.disabled = true
        c1.disabled = true
        c3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((a3.value == '0') && (b3.value == '0') && (c3.value == "0")) {
        a1.disabled = true
        a2.disabled = true
        b1.disabled = true
        b2.disabled = true
        c1.disabled = true
        c2.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((a1.value == '0') && (b2.value == '0') && (c3.value == "0")) {
        a2.disabled = true
        a3.disabled = true
        b1.disabled = true
        b3.disabled = true
        c1.disabled = true
        c2.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }
    else if ((a3.value == '0') && (b2.value == '0') && (c1.value == "0")) {
        a1.disabled = true
        a2.disabled = true
        b1.disabled = true
        b3.disabled = true
        c2.disabled = true
        c3.disabled = true
        p2WinCount += 1
        p2Wins.innerHTML = `Player 2: ${p2WinCount}`
        winner.innerHTML = "Winner: Player 2!"
        window.alert('Player 2 Wins')
    }

}

const reset = () => {
    a1.value = ""
    a2.value = ""
    a3.value = ""
    b1.value = ""
    b2.value = ""
    b3.value = ""
    c1.value = ""
    c2.value = ""
    c3.value = ""
    a1.disabled = false
    a2.disabled = false
    a3.disabled = false
    b1.disabled = false
    b2.disabled = false
    b3.disabled = false
    c1.disabled = false
    c2.disabled = false
    c3.disabled = false
    player = 1
}
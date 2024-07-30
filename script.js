let currentPlayer = "X"
const arr = Array(9).fill(null)

// for madal to show 
let modal = document.getElementById('modal')

const closeModal = document.getElementById('close')


function boxHandler(element) {
    const id = element.id
    if (arr[id] === null) {
        arr[id] = currentPlayer
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
        return
    }
    element.textContent = currentPlayer
    checkWinner()

}

// function to check winner
function checkWinner(element) {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8])
    ) {
        modal.style.display = 'block'
        modal.innerHTML = `${currentPlayer} Won !!!`
        
    }
}


closeModal.addEventListener("click", () => {
    modal.style.display = 'none'
})

// window.addEventListener("click",function (event) {
//     if (modal && event.target === modal) {
//         modal.style.display = "none";
//     }
// })
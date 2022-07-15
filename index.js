const changeSize = document.getElementById('changeSize')
const grid = document.getElementById('grid')
changeSize.addEventListener('click', getSizeFromUser)
const square = document.createElement('div').classList.add('square')

var gridSize = 16

function getSizeFromUser() {
	let input = parseInt(prompt('How big do you want the new grid? (2-100)'))
	if (2 <= input && input <= 100) {
		setSize(input)
	} else {
		alert('Size must be a whole number between 2 and 100')
	}
}

function setSize(size) {
	gridSize = size
	grid.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`
	grid.innerHTML = '<div class="square"></div>'.repeat(gridSize * gridSize)
}

setSize(gridSize)

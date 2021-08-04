'use strict'
const puzzleObj = [
    {
        id: 1,
        data: 1,
        className: 'light-blue'
    }, {
        id: 2,
        data: 2,
        className: 'medium-blue'
    }, {
        id: 3,
        data: 3,
        className: 'dark-blue'
    }, {
        id: 4,
        data: 4,
        className: 'medium-blue'
    }, {
        id: 5,
        data: 5,
        className: 'dark-blue'
    }, {
        id: 6,
        data: 6,
        className: 'grey'
    }, {
        id: 7,
        data: 7,
        className: 'grey'
    }, {
        id: 8,
        data: 8,
        className: 'light-blue'
    }, {
        id: 9,
        data: 9,
        className: 'dark-blue'
    }
]

const puzzleContainer = document.querySelector('.puzzle-box')
const shuffleButton = document.querySelector('.shuffle-puzzle');
const sortButton = document.querySelector('.sort-puzzle');

class Puzzle {
    constructor(data = []) {
        this.puzzle = data;
    }
    createPuzzle() {
        this.puzzle.forEach(block => {
            const {className, data, id} = block
            this.#renderPuzzleBlock(className, data)
        })
    }
    shuffle() {
        this.#removePuzzleBlocks()
        this.puzzle = this.puzzle.sort(() => 0.5 - Math.random());
        this.createPuzzle()
    }
    sort() {
        this.#removePuzzleBlocks()
        this.puzzle = this.puzzle.sort((a, b) => a.data - b.data);
        this.createPuzzle()
    }
    #renderPuzzleBlock(className, data) {
        const puzzleBlock = document.createElement('p');
        puzzleBlock.textContent = data;
        puzzleBlock.classList.add(className)
        puzzleContainer.appendChild(puzzleBlock)
    }
    #removePuzzleBlocks() {
        while (puzzleContainer.firstChild) {
            puzzleContainer.removeChild(puzzleContainer.lastChild);
        }
    }
}
const puzzle = new Puzzle(puzzleObj)

puzzle.createPuzzle()

const shufflePuzzle = () => puzzle.shuffle()

const sortPuzzle = () => puzzle.sort()

shuffleButton.addEventListener('click', shufflePuzzle)
sortButton.addEventListener('click', sortPuzzle)


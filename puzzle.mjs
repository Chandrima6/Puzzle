const puzzleContainer = document.querySelector('.puzzle-box')
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

export default Puzzle

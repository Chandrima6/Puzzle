'use strict'
import Puzzle from './puzzle.mjs';

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

const shuffleButton = document.querySelector('.shuffle-puzzle');
const sortButton = document.querySelector('.sort-puzzle');


const puzzle = new Puzzle(puzzleObj)

puzzle.createPuzzle()

const shufflePuzzle = () => puzzle.shuffle()

const sortPuzzle = () => puzzle.sort()

shuffleButton.addEventListener('click', shufflePuzzle)
sortButton.addEventListener('click', sortPuzzle)


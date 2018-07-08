import C from '../constants'

const randomScalar = () => Math.floor(Math.random() * C.BOARD_LENGTH)
const randomPosition = () => [randomScalar(), randomScalar()]


// Represents the chicken/fox on the game board
export default class Actor {
  constructor(value, board) {
    this.value = value
    this.nextAction = null
    this.board = board
    this.reset()
  }

  runPolicy = () => {
    // To be implemented by child class
  }

  reset = () => {
    this.pos = randomPosition()
    this.board.addActor(this)
  }

  getActions = () => {
    return this.board.getActions(this.pos[0], this.pos[1])
  }
}
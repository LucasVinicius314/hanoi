import { Program } from './program'

const program = new Program({ autoDraw: true, height: 3 })

program.move(0, 1)
program.move(0, 1)
program.move(0, 2)
program.move(1, 2)
program.move(1, 2)

console.log(program.getState())

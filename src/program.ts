import { Stack } from './stack'

export class Program {
  autoDraw: boolean
  height: number
  width: number
  #stacks: Stack<number>[]

  constructor({
    autoDraw = false,
    height = 3,
    width = 3,
  }: {
    autoDraw?: boolean
    height?: number
    width?: number
  }) {
    this.autoDraw = autoDraw
    this.height = height
    this.width = width
    this.#stacks = new Array(width).fill(1).map(() => new Stack())
    new Array(height)
      .fill(1)
      .forEach((v, k) => void this.#stacks[0].push(height - k))
    if (this.autoDraw) {
      this.draw()
    }
  }

  /**
   * Returns the state as a string
   */
  getState(): string {
    return JSON.stringify(this.#stacks.map((v) => v.toArray()))
  }

  /**
   * Moves an item from index {from} to index {to}
   *
   * @param from Index of the tower to move from
   * @param to Index of the tower to move to
   */
  move(from: number, to: number): void {
    this.#stacks[to].push(this.#stacks[from].pop())
    if (this.autoDraw) {
      this.draw()
    }
  }

  /**
   * Draws a visual representation of the state to the console
   */
  draw(): void {
    console.log(`  |    |    |  `)
    new Array(this.height).fill(1).forEach((v, k) => {
      console.log(
        `  ${new Array(this.width)
          .fill(1)
          .map((v, k2) =>
            (this.#stacks[k2].get(this.height - k - 1) ?? '|').toString()
          )
          .join('    ')}`
      )
    })
    console.log(`---------------\n`)
  }
}

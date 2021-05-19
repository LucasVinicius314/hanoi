/**
 * # Stack
 *
 * An implementation of a simple Stack.
 *
 * Example:
 *
 * ```ts
 * const stack = new Stack<number>([1, 2, 3])
 *
 * stack.push(4)
 * stack.push(5)
 *
 * const item = stack.pop()
 *
 * console.log(item) // 5
 * ```
 */
export class Stack<T> {
  #items: T[]

  /**
   * Constructor for the Stack class
   *
   * @param items Array used as the initial value for the stack
   */
  constructor(items?: T[]) {
    this.#items = items ?? []
  }

  /**
   * Clears the stack
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack()
   *
   * stack.clear()
   * ```
   */
  clear(): void {
    return void (this.#items.length = 0)
  }

  /**
   * Returns true if the stack is empty
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack()
   *
   * stack.empty()
   * ```
   */
  empty(): boolean {
    return this.#items.length === 0
  }

  /**
   * Returns an element from the stack, without removing it
   *
   * @param index The index of the item to be returned
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack([10, 20])
   *
   * stack.get(2) // 20
   * ```
   */
  get(index: number): T | undefined {
    return this.#items[index]
  }

  /**
   * Pops an element from the stack, returning and removing it
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack([10, 20])
   *
   * stack.pop() // 20
   * ```
   */
  pop(): T | undefined {
    return this.#items.pop()
  }

  /**
   * Adds an element to the end of the stack
   *
   * @param item The item to be pushed into the stack
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack()
   *
   * stack.push(10) // [10]
   * ```
   */
  push(item: T): void {
    return void this.#items.push(item)
  }

  /**
   * Returns the current size of the stack
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack([10, 20])
   *
   * stack.size() // 2
   * ```
   */
  size(): number {
    return this.#items.length
  }

  /**
   * Returns the string representation of the stack
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack([10, 20])
   *
   * stack.toString() // 10, 20
   * ```
   */
  toString(): string {
    return this.#items.join(', ')
  }

  /**
   * Returns the array representation of the stack
   *
   * Example:
   *
   * ```ts
   * const stack = new Stack([10, 20])
   *
   * stack.toArray() // [10, 20]
   * ```
   */
  toArray(): T[] {
    return Array.from(this.#items)
  }
}

import {RULES, Rule} from "../Game/rules";


export default interface Game {
    id: number
    name: string,
    drawnNumbers: {
      range: number,
      countOfNumber: number
    }[],
    drawDay: string,
    drawTime: string,
    winingCount: number
    validate: (this: Game, bet: any) => boolean
    rules: Rule[]
  }
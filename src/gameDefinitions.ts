import Game from "./interfaces/GameInterface";
import {RULES, Rule} from "./Game/rules";


type Bet = {numbers: number[], game: Game};

const commonValidation = (e: Game, bet: Bet) =>
   e.drawnNumbers.every((x: {range:Number, countOfNumber:number}) => 
    x.countOfNumber === bet.numbers.length &&
    x.range >= Math.max(...bet.numbers)
  )


const gameDefinitions: Game[] = [
    {
      id: 0,
      name: "Skandináv lottó",
      drawnNumbers: [
        {
          range: 35,
          countOfNumber: 7
        },
        {
          range: 35,
          countOfNumber: 7
        },
      ],
      drawDay: "Szerda",
      drawTime: "19:00",
      winingCount: 3,
      validate: function (this, bet: Bet) {
        return commonValidation(this, bet)
      },
      rules: [
        RULES.COUNT_OF_NUMBER,
        RULES.NUMBERS_IN_RANGE
      ]
    },
    {
      id: 1,
      name: "Ötös lottó",
      drawnNumbers: [
        {
          range: 90,
          countOfNumber: 5
        }
      ],
      drawDay: "Szombat",
      drawTime: "17:00",
      winingCount: 2,
      validate: function (this, bet: Bet) {
        return commonValidation(this, bet)
      },
      rules: [
        RULES.COUNT_OF_NUMBER,
        RULES.NUMBERS_IN_RANGE
      ]
    },
  ]

  export default gameDefinitions
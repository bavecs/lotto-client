import Game from "./Game.class";

export type Rule = (
        numberStack:{countOfNumber:number, range: number},
        numbers:number[]
    ) => Boolean;


type RuleCollection = {
    [RULE:string]: Rule
}



export const RULES:RuleCollection = {
    "COUNT_OF_NUMBER": (numberStack, numbers) => numberStack.countOfNumber === numbers.length,
    "NUMBERS_IN_RANGE": (numberStack, numbers) => numberStack.range >= Math.max(...numbers)
}



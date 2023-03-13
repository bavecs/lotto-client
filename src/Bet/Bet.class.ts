import gameDefinitions from "../gameDefinitions";
import Game from "../interfaces/GameInterface";
import {RULES, Rule} from "../Game/rules";



const numberFinder = (numArray: number[], winnerNumbers: number[]) =>
    numArray.filter(number => winnerNumbers.includes(number));

type Draw = {
    game: Game,
    numbers: number[][]
}
    
class Bet {
    numbers: number[];
    game: Game;
    won: boolean = false;
    result: number[][] = [];

    constructor(numbers: number[] | string, game: Game) {

        if(numbers === '') 
            throw Error("Numbers input is empty") 

        if(typeof numbers === 'string') 
            numbers = numbers.split(" ").map(n => parseInt(n))
        

        this.numbers = numbers;
        this.game = game;
    }

    takeBet() {

    }

    setWin() {
        this.won = true;
    }

    validate(): boolean {
        const rules:Rule[] = this.game.rules;

        return this.game.drawnNumbers.every(numberStack => 
            rules.every((rule:Rule) => 
                    rule(numberStack, this.numbers)
                )
            );
    }

    checkWin(draw: Draw): boolean {
        if( draw.game !== this.game)
         return false;
        
        draw.numbers.forEach((numList:number[], i) => {
            let result = numberFinder(this.numbers, numList)
            this.result.push(result)
            if (result.length >= this.game.winingCount)
                this.setWin();
        }
        );
        
        return this.won;
        
    }
}

export default Bet;
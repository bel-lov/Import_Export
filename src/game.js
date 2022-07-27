import defoultCharacter from './domain.js';//импорт класса Character
console.log(defoultCharacter);

export default class Game {
    start() {
        console.log('game started');
    }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}
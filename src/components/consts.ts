export const POSSIBLE_THEMES = ["halloween", "fruits"]
export const SPRITE_SIZE = 128;

type GameState = {
    value: "Initial" | "Ready" | "NoWin" | "NormalWin" | "BonusWin";
}

export const gameState: GameState = {value: "Initial"}

export const numberOfChestsOpened = {value: 0};
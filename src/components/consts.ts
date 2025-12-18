export const POSSIBLE_THEMES = ["halloween", "fruits"]

type GameState = {
    value: "Initial" | "Ready" | "NoWin" | "NormalWin" | "BonusWin";
}

export const gameState: GameState = {value: "Initial"}

export const numberOfChestsOpened = {value: 0};
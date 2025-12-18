export const POSSIBLE_THEMES = ["halloween", "fruits"]

type GameState = {
    value: "Initial" | "On" | "WinOff" | "WinOn" | "BigWin";
}

export const gameState: GameState = {value: "Initial"}

export const numberOfChestsOpened = {value: 0};
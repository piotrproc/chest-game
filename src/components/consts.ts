export const POSSIBLE_THEMES = ["halloween", "fruits"]

type GameState = {
    value: "Initial" | "On" | "Win";
}

export const gameState: GameState = {value: "Initial"}
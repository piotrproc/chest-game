type GameState = {
    value: "Initial" | "Ready" | "NoWin" | "NormalWin" | "BonusWin";
}

export const gameState: GameState = {value: "Initial"}

export const numberOfChestsOpened = {value: 0};

export const yourWin = {value: 0};
export const yourBalance = {value: 1000};

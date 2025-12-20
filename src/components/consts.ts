export const SPRITE_SIZE = 128;

type GameState = {
    value: "Initial" | "Ready" | "NoWin" | "NormalWin" | "BonusWin";
}

export const gameState: GameState = {value: "Initial"}

export const numberOfChestsOpened = {value: 0};

export const yourBalance = {value: 0};

export const YOU_WIN_TEXT = "Your win: ";

export const NORMAL_WIN = 10;

export const BONUS_WIN = 1000;
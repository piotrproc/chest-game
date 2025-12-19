import { Sprite, Texture } from "pixi.js";
import { gameState, numberOfChestsOpened } from "./consts.ts";
import { disableChests } from "./chest.ts";

export function startGame(playButton: Sprite, playButtonOff: Sprite, chests: Sprite[]) {
    togglePlayButton(playButton, playButtonOff);

    changeChestsTexture(chests);
    gameState.value = "Ready";
}

export function togglePlayButton(playButton: Sprite, playButtonOff: Sprite) {
    playButton.visible = !playButton.visible;
    playButtonOff.visible = !playButtonOff.visible;
}

function changeChestsTexture(chests: Sprite[]) {
    const normalTexture = Texture.from('assets/treasure-chest.png');
    const offTexture = Texture.from('assets/treasure-chest-off.png');
    const winTexture = Texture.from('assets/treasure-chest-win.png');

    chests.forEach(chest => {
        if (gameState.value === "Initial") {
            chest.alpha = 1;
            chest.texture = normalTexture;
            chest.eventMode = 'static';
            chest.cursor = 'pointer';
        } else if (gameState.value === "Ready" || gameState.value === "NoWin") {
            chest.texture = offTexture;
            chest.alpha = 1;
            chest.eventMode = 'static';
            chest.cursor = 'pointer';
        } else if (gameState.value === "NormalWin" || gameState.value === "BonusWin") {
            chest.texture = winTexture;
            chest.cursor = 'auto';
        }
    })
}

function changeChestsMarking(chest: Sprite, otherChests: Sprite[]) {
    chest.alpha = 1;
    otherChests.forEach(chest => {
        chest.alpha = 0.5;
    });
}

export function onChestClick(chest: Sprite, otherChests: Sprite[], onComplete: () => void) {
    if (chest["used"] === true) {
        return;
    }

    numberOfChestsOpened.value++;

    const winType = generateWin();

    if (winType === "NoWin") {
        gameState.value = "NoWin";
    } else if (winType === "NormalWin") {
        gameState.value = "NormalWin";
    } else if (winType === "BonusWin") {
        gameState.value = "BonusWin";
    }

    changeChestsTexture([chest]);
    chest["used"] = true;
    changeChestsMarking(chest, otherChests)

    if (numberOfChestsOpened.value === 6) {
        onComplete();
        numberOfChestsOpened.value = 0;
        restoreChests([chest, ...otherChests]);
        disableChests([chest, ...otherChests]);

        [chest, ...otherChests].forEach(chest => {
            chest.eventMode = 'none';
            chest.cursor = 'none';
        })
    }
}

function restoreChests(chests: Sprite[]) {
    chests.forEach(chest => {
        chest["used"] = false
    })
}

type WinType = "NoWin" | "NormalWin" | "BonusWin"

export function generateWin(): WinType {
    // Return a random integer between 1 and 10 (both included):
    const draw = Math.floor(Math.random() * 10) + 1;

    if (draw > 7)
        return "BonusWin";

    if (draw > 4) {
        return "NormalWin"
    }

    return "NoWin"
}
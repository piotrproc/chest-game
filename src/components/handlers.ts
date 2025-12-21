import { gameState } from "./states.ts";
import { handleChestClick, startGame } from "./game.ts";
import { restoreChestWidth, restoreUsedChests } from "./chest.ts";
import { Application, Sprite, Text } from "pixi.js";
import { togglePlayButton } from "./playButton.ts";

export function onPlayButtonClicked(playButton: Sprite, playButtonOff: Sprite, chests: Sprite[]) {
    gameState.value = "Initial";
    startGame(playButton, playButtonOff, chests)
    restoreChestWidth(chests)
    restoreUsedChests(chests);
}

export function onChestClicked(app: Application, chest: Sprite, allChests: Sprite[],
                               balanceSprite: Text, playButton: Sprite, playButtonOff: Sprite) {
    const otherChests = allChests.filter(_chest => _chest.uid !== chest.uid)
    handleChestClick(app, chest, otherChests, balanceSprite, () => {
        gameState.value = "Initial";
        togglePlayButton(playButton, playButtonOff);
    })
}
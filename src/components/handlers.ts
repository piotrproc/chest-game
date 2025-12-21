import { gameState, yourBalance } from "./globalVariables/states.ts";
import { handleChestClick, startGame } from "./game.ts";
import { restoreChestWidth, restoreUsedChests } from "./chest.ts";
import { Application, Sprite } from "pixi.js";
import { togglePlayButton } from "./gui/playButton.ts";
import { IMONEY_INFO } from "./gui/texts.ts";
import { COST_OF_ROUND, YOUR_BALANCE_TEXT } from "./globalVariables/consts.ts";

export function onPlayButtonClicked(playButton: Sprite, playButtonOff: Sprite, chests: Sprite[], moneyInfo: IMONEY_INFO) {
    gameState.value = "Initial";
    startGame(playButton, playButtonOff, chests);
    restoreChestWidth(chests);
    restoreUsedChests(chests);

    yourBalance.value -= COST_OF_ROUND;
    moneyInfo.balanceHolder.text = YOUR_BALANCE_TEXT + yourBalance.value;
}

export function onChestClicked(app: Application, chest: Sprite, allChests: Sprite[],
                               moneyInfo: IMONEY_INFO, playButton: Sprite, playButtonOff: Sprite) {
    const otherChests = allChests.filter(_chest => _chest.uid !== chest.uid)
    handleChestClick(app, chest, otherChests, moneyInfo, () => {
        gameState.value = "Initial";
        togglePlayButton(playButton, playButtonOff);
    })
}
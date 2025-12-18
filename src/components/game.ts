import { Sprite, Texture } from "pixi.js";
import { gameState } from "./consts.ts";

export function startGame(playButton: Sprite, playButtonOff: Sprite, chests: Sprite[]) {
    playButton.visible = !playButton.visible;
    playButtonOff.visible = !playButtonOff.visible;

    changeChestsTexture(chests);
    gameState.value = "On";
}

function changeChestsTexture(chests: Sprite[]) {
    const texture01 = Texture.from('assets/treasure-chest.png');
    const texture02 = Texture.from('assets/treasure-chest-off.png');
    chests.forEach(chest => {
        if(gameState.value === "Initial") {
            chest.texture = texture01
            chest.eventMode = 'static';
            chest.cursor = 'pointer';
        }
        else if (gameState.value === "On") {
            chest.texture = texture02
            chest.cursor = 'auto';
        }
    })
}

export function onChestClick(chest: Sprite, otherChests: Sprite[]) {

}
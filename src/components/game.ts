import { Sprite } from "pixi.js";

export function startGame(playButton: Sprite, playButtonOff: Sprite) {
    // console.log(playButton.texture)
    playButton.visible = !playButton.visible;
    playButtonOff.visible = !playButtonOff.visible;
}
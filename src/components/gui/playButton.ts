import { Application, Container, Sprite } from "pixi.js";

export function addPlayButtons(app: Application, mainPage: Container) {
    const playButton = addPlayButtonTemplate(app, mainPage, "playButton");
    const playButtonOff = addPlayButtonTemplate(app, mainPage, "playButtonOff");
    playButtonOff.visible = false;

    return {
        playButton,
        playButtonOff
    };
}

function addPlayButtonTemplate(app: Application, mainPage:Container, texture: string) {
    const playButton = Sprite.from(texture);

    stylePlayButton(app, playButton);

    // Set the interactivity.
    playButton.eventMode = texture === "playButton" ? "static" : "none";
    playButton.cursor = texture === "playButton" ? "pointer" : "none";

    mainPage.addChild(playButton);
    return playButton;
}

function stylePlayButton(app: Application, playButton: Sprite) {
    playButton.anchor.set(0.5);

    playButton.x = app.screen.width / 2;
    playButton.y = app.screen.height * (5 / 6);

    playButton.eventMode = 'static';
    playButton.cursor = 'pointer';
}

export function togglePlayButton(playButton: Sprite, playButtonOff: Sprite) {
    playButton.visible = !playButton.visible;
    playButtonOff.visible = !playButtonOff.visible;
}
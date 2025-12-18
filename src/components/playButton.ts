import { Application, Sprite } from "pixi.js";

export function addPlayButton(app: Application) {
    const playButton = Sprite.from("playButton");

    stylePlayButton(app, playButton);

    // Set the interactivity.
    playButton.eventMode = 'static';
    playButton.cursor = 'pointer';

    app.stage.addChild(playButton);
    return playButton;
}

function stylePlayButton(app: Application, playButton: Sprite) {
    playButton.anchor.set(0.5);

    playButton.x = app.screen.width / 2;
    playButton.y = app.screen.height * (5 / 6);

    playButton.eventMode = 'static';
    playButton.cursor = 'pointer';
}
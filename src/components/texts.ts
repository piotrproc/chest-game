import { Application, Text } from "pixi.js";

export function addMainPageTitle(app: Application) {
    const winText = new Text('Main game Screen');

    winText.anchor.set(0.5);
    winText.x = app.screen.width / 2;
    winText.y = app.screen.height * (1 / 7);

    app.stage.addChild(winText);
    return winText;
}
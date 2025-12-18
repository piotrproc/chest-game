import { Application, Sprite } from "pixi.js";

export function addChests(app: Application) {
    for(let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            addChest(app, i, j);
        }
    }
}

function addChest(app:Application, column: number, row: number) {
    const chest = Sprite.from("chestOff");

    styleChest(app, chest, column, row);

    app.stage.addChild(chest);
}

function styleChest(app: Application, chest: Sprite, column: number, row: number) {
    chest.anchor.set(0.5);

    chest.x = app.screen.width / 2;
    chest.x += (column % 2 === 1) ? app.screen.width / 4 : -app.screen.width / 4;
    chest.y = app.screen.height * (2 / 6);
    chest.y += row * app.screen.height * (1 / 6)

    chest.eventMode = 'static';
    chest.cursor = 'pointer';
}
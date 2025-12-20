import { Application, Container, Sprite, Text, Ticker } from "pixi.js";
import { SPRITE_SIZE, YOU_WIN_TEXT } from "./consts.ts";
import { yourBalance } from "./states.ts";

export function createRotationAnimation(sprite: Sprite, speed: number, onComplete) {
    // Basic ticker usage with different time units
    const ticker = new Ticker();
    ticker.add((ticker) => {
        // Frame-independent animation using dimensionless deltaTime
        sprite.rotation += speed * ticker.deltaTime;
    });
    ticker.start();

    setTimeout(function () {
        ticker.stop()
        sprite.rotation = 0;
        onComplete()
    }, 1000)
}

export function createReductionAnimation(sprite: Sprite, onComplete) {

    const initialWidth = SPRITE_SIZE;

    const ticker = new Ticker();
    ticker.add((ticker) => {
        if (sprite.width >= initialWidth / 2) {
            sprite.width -= ticker.deltaTime
        }
    });
    ticker.start();

    setTimeout(function () {
        ticker.stop();
        onComplete()
    }, 1000)
}

export function addBalanceHolder(app: Application, mainPage: Container): Text {
    const balanceText = new Text({text: YOU_WIN_TEXT + yourBalance.value});

    balanceText.anchor.set(0.5);
    balanceText.x = app.screen.width * (1 / 2);
    balanceText.y = app.screen.height * (5 / 7) + 25;

    mainPage.addChild(balanceText);
    return balanceText;
}
import { Sprite, Ticker } from "pixi.js";
import { ANIMATION_TIME, SPRITE_SIZE } from "./consts.ts";

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
    }, ANIMATION_TIME)
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
    }, ANIMATION_TIME)
}
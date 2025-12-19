import { Sprite, Ticker } from "pixi.js";

export function createRotationAnimation(sprite: Sprite, onComplete) {
    // Basic ticker usage with different time units
    const ticker = new Ticker();
    ticker.add((ticker) => {
        // Frame-independent animation using dimensionless deltaTime
        sprite.rotation += 0.1 * ticker.deltaTime;
    });
    ticker.start();

    setTimeout(function () {
        ticker.stop()
        sprite.rotation = 0;
        onComplete()
    }, 1000)
}

export function createReductionAnimation(sprite: Sprite, onComplete) {

    const initialWidth = sprite.width;

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
    }, (1000))
}
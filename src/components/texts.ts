import { Application, Container, Text } from "pixi.js";

export function addMainPageTitle(app: Application, container: Container, text: string): Text {
    const winText = new Text({
        text: text,
        style: {
            fontSize: 40
        }
    });

    winText.anchor.set(0.5);
    winText.x = app.screen.width / 2;
    winText.y = app.screen.height * (1 / 7);

    container.addChild(winText);
    return winText;
}

export function addBonusPageContent(app: Application, container: Container, text: string): Text {
    const winText = new Text({
        text: text,
        style: {
            fontSize: 70
        }
    });

    winText.anchor.set(0.5);
    winText.x = app.screen.width / 2;
    winText.y = app.screen.height * (3 / 7);

    container.addChild(winText);
    return winText;
}
import { Application, Container, Text } from "pixi.js";
import { YOU_WIN_TEXT } from "./consts.ts";
import { yourBalance } from "./states.ts";

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

export function addBalanceHolder(app: Application, mainPage: Container): Text {
    const balanceText = new Text({text: YOU_WIN_TEXT + yourBalance.value});

    balanceText.anchor.set(0.5);
    balanceText.x = app.screen.width * (1 / 2);
    balanceText.y = app.screen.height * (5 / 7) + 25;

    mainPage.addChild(balanceText);
    return balanceText;
}
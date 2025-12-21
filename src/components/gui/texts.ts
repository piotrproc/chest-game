import { Application, Container, Text } from "pixi.js";
import { YOUR_WIN_TEXT, YOUR_BALANCE_TEXT } from "../globalVariables/consts.ts";
import { yourBalance, yourWin } from "../globalVariables/states.ts";

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

export type IMONEY_INFO = {
    winHolder: Text,
    balanceHolder: Text
}

export function addMoneyInfo(app: Application, mainPage: Container):IMONEY_INFO {
    return {
        winHolder: addWinHolder(app, mainPage),
        balanceHolder: addBalanceHolder(app, mainPage)
    }
}

function addWinHolder(app: Application, mainPage: Container): Text {
    const balanceText = new Text({text: YOUR_WIN_TEXT + yourWin.value});

    balanceText.anchor.set(0.5);
    balanceText.x = app.screen.width * (1 / 2) + 100;
    balanceText.y = app.screen.height * (5 / 7) + 25;

    mainPage.addChild(balanceText);
    return balanceText;
}

function addBalanceHolder(app: Application, mainPage: Container) {
    const balanceText = new Text({text: YOUR_BALANCE_TEXT + yourBalance.value});

    balanceText.anchor.set(0.5);
    balanceText.x = app.screen.width * (1 / 2) - 100;
    balanceText.y = app.screen.height * (5 / 7) + 25;

    mainPage.addChild(balanceText);
    return balanceText;
}
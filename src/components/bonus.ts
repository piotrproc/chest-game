import { Application, Container } from "pixi.js";
import { addBonusPageContent, addMainPageTitle } from "./texts.ts";
import { BONUS_WIN } from "./consts.ts";

export function hideMainPage(app: Application) {
    app.stage.children[0].visible = false;
}

export function createBonusPage(app:Application, bonusPage: Container) {
    addMainPageTitle(app, bonusPage, "Bonus Screen");

    addBonusPageContent(app, bonusPage, `Win Amount ${BONUS_WIN}`);
}
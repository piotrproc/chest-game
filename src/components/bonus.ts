import { Application, Container } from "pixi.js";
import { addBonusPageContent, addMainPageTitle } from "./texts.ts";
import { BONUS_WIN } from "./consts.ts";
import { createParticles } from "./particles.ts";

export function hideMainPageAndShowBonus(app: Application) {
    app.stage.children[0].visible = false;
    app.stage.children[1].visible = true;
    moveParticles(app, app.stage.children[1])
}

export function createBonusPage(app:Application, bonusPage: Container) {
    addMainPageTitle(app, bonusPage, "Bonus Screen");
    addBonusPageContent(app, bonusPage, `Win Amount: ${BONUS_WIN}`);
}

export function moveParticles(app:Application, bonusPage: Container) {
    const ticker = createParticles(app, bonusPage)

    setTimeout(function (){
        ticker.stop();
        app.stage.children[1].visible = false;
        app.stage.children[0].visible = true;
        bonusPage.children[2].destroy();
    }, 2000)
}


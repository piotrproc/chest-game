import { Application, Assets, Container } from 'pixi.js';
import { addPlayButtons, togglePlayButton } from "./components/playButton.ts";
import { addMainPageTitle } from "./components/texts.ts";
import { addChests, restoreChestWidth } from "./components/chest.ts";
import { onChestClick, startGame } from "./components/game.ts";
import { gameState } from "./components/consts.ts";
import { addBalanceHolder } from "./components/win.ts";
import { createBonusPage } from "./components/bonus.ts";

(async () => {
    const app = new Application();

    globalThis.__PIXI_APP__ = app;

    await app.init({
        background: "#06a159",
        height: 1050,
        width: 1200,
    });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Load the textures
    await Assets.load([
        {alias: "playButton", src: "assets/play-button-on.png"},
        {alias: "playButtonOff", src: "assets/play-button-off.png"},
        {alias: "chest", src: "assets/treasure-chest.png"},
        {alias: "chestOff", src: "assets/treasure-chest-off.png"},
        {alias: "chestWin", src: "assets/treasure-chest-win.png"},
        {alias: "chestBonus", src: "assets/treasure-chest-bonus.png"}
    ]);

    gameState.value = "Initial";

    const mainPage = new Container();

    const balanceSprite = addBalanceHolder(app, mainPage);
    addMainPageTitle(app, mainPage, "Main game Screen");
    const chests = addChests(app, mainPage);
    const {playButton, playButtonOff} = addPlayButtons(app, mainPage);

    mainPage.visible = true;

    app.stage.addChild(mainPage);

    playButton.addListener('pointerdown', () => {
        gameState.value = "Initial";
        startGame(app, playButton, playButtonOff, chests)
        restoreChestWidth(chests)
    });

    chests.forEach(chest => {
        chest.addListener('pointerdown', () => {
            const otherChests = chests.filter(_chest => _chest.uid !== chest.uid)
            onChestClick(app, chest, otherChests, balanceSprite, () => {
                gameState.value = "Initial";
                togglePlayButton(playButton, playButtonOff);
            })
        })
    })

    const bonusPage = new Container();
    bonusPage.visible = false;
    createBonusPage(app, bonusPage)

    app.stage.addChild(bonusPage);

})();

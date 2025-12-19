import { Application, Assets } from 'pixi.js';
import { addPlayButtons, togglePlayButton } from "./components/playButton.ts";
import { addMainPageTitle } from "./components/texts.ts";
import { addChests } from "./components/chest.ts";
import { onChestClick, startGame } from "./components/game.ts";
import { gameState } from "./components/consts.ts";

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
        {alias: "chestWin", src: "assets/treasure-chest-win.png"}
    ]);

    gameState.value = "Initial";

    addMainPageTitle(app);
    const chests = addChests(app);
    const {playButton, playButtonOff} = addPlayButtons(app);

    playButton.addListener('pointerdown', () => {
        gameState.value = "Initial";
        startGame(playButton, playButtonOff, chests)
    });

    chests.forEach(chest => {
        chest.addListener('pointerdown', () => {
            const otherChests = chests.filter(_chest => _chest.uid !== chest.uid)
            onChestClick(chest, otherChests, () => {
                gameState.value = "Initial";
                togglePlayButton(playButton, playButtonOff);
            })
        })
    })

})();

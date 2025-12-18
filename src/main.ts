import { Application, Assets } from 'pixi.js';
import { addPlayButton } from "./components/playButton.ts";
import { addMainPageTitle } from "./components/texts.ts";
import { addChests } from "./components/chest.ts";

(async () => {
    const app = new Application();

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
        {alias: "chestOff", src: "assets/treasure-chest-off.png"}
    ]);

    // const {reels} = addReels(app, slotTextures);
    const spinButton = addPlayButton(app);
    const mainPageTitle = addMainPageTitle(app);
    const chest = addChests(app);
})();

import { Application, Assets } from 'pixi.js';
import { addPlayButton } from "./components/playButton.ts";
import { addMainPageTitle } from "./components/texts.ts";

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
        {alias: "playButton", src: "assets/play-button-on.png"}
    ]);

    // const {reels} = addReels(app, slotTextures);
    const spinButton = addPlayButton(app);
    const mainPageTitle = addMainPageTitle(app);
})();

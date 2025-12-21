import { Application, Container, Particle, ParticleContainer, Texture, Ticker } from 'pixi.js';

export function createParticles(app: Application, bonusPage: Container) {
    // Create a particle container with default options
    const container = new ParticleContainer({
        // this is the default, but we show it here for clarity
        dynamicProperties: {
            position: true, // Allow dynamic position changes (default)
            scale: true, // Static scale for extra performance
            rotation: true, // Static rotation
            color: true, // Static color
        },
    });

    // Add particles
    const texture = Texture.from('assets/heart.png');

    for (let i = 0; i < 25; ++i) {
        const particle = new Particle({
            texture,
            x: Math.random() * app.screen.width,
            y: Math.random() * app.screen.height,
        });

        particle.tint = Math.random() * 0xffffff;

        // create a random direction in radians
        particle.direction = Math.random() * Math.PI * 2;

        // this number will be used to modify the direction of the sprite over time
        particle.turningSpeed = Math.random() - 0.8;

        // create a random speed between 0 - 2, and these maggots are slooww
        particle.speed = (2 + Math.random() * 2) * 0.5;

        particle.offset = Math.random() * 100;

        container.addParticle(particle);
    }

    // Add container to the Pixi stage
    bonusPage.addChild(container);

    const ticker = new Ticker();

    ticker.add(function () {

        // iterate through the sprites and update their position
        for (let i = 0; i < container.particleChildren.length; i++) {

            const sprite = container.particleChildren[i];

            if (sprite.x > app.screen.width || sprite.y > app.screen.height) {
                sprite.x = Math.random() * app.screen.width;
                sprite.y = -10;
            }

            //sprite.direction += sprite.turningSpeed * 0.01;
            sprite.x += Math.sin(sprite.direction) * sprite.speed;
            sprite.y += Math.cos(sprite.direction) * sprite.speed;
            sprite.rotation += sprite.turningSpeed / 100;
        }
    });

    ticker.start();
    return ticker;
}


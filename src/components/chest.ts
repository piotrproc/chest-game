import { Application, Container, Sprite } from "pixi.js";
import { SPRITE_SIZE } from "./globalVariables/consts.ts";

export function addChests(app: Application, mainPage: Container) {
    const chests: Sprite[] = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            chests.push(addChest(app, mainPage, i, j));
        }
    }

    return chests;
}

function addChest(app: Application, mainPage: Container, column: number, row: number) {
    const chest = Sprite.from("chest");

    chest.alpha = 0.5;
    styleChest(app, chest, column, row);

    mainPage.addChild(chest);

    return chest;
}

function styleChest(app: Application, chest: Sprite, column: number, row: number) {
    chest.anchor.set(0.5);

    chest.x = app.screen.width / 2;
    chest.x += (column % 2 === 1) ? app.screen.width / 4 : -app.screen.width / 4;
    chest.y = app.screen.height * (2 / 6);
    chest.y += row * app.screen.height * (1 / 6)
}

export function disableChests(chests: Sprite[]) {
    chests.forEach(chest => {
        chest.alpha = 0.5;
    })
}

export function enableChests(chests: Sprite[]) {
    chests.forEach(chest => {
        chest.alpha = 1;
    })
}

export function changeChestsMarking(chest: Sprite, otherChests: Sprite[]) {
    chest.alpha = 1;
    otherChests.forEach(chest => {
        chest.alpha = 0.5;
    });

    otherChests.forEach(chest => {
        chest.eventMode = 'none';
        chest.cursor = 'none';
    })
}

export function restoreUsedChests(chests: Sprite[]) {
    chests.forEach(chest => {
        chest["used"] = false;
    })
}

function getNotUsedChests(otherChests: Sprite[]) {
    return otherChests.filter(chest => chest["used"] !== true);
}

export function enableNotUsedChests(otherChests: Sprite[]) {
    const notUsedChests = getNotUsedChests(otherChests);
    enableChests(notUsedChests);

    notUsedChests.forEach(chest => {
        chest.eventMode = 'static';
        chest.cursor = 'pointer';
    })
}

export function restoreChestWidth(chests: Sprite[]) {
    chests.forEach(chest => {
        chest.width = SPRITE_SIZE
    })
}
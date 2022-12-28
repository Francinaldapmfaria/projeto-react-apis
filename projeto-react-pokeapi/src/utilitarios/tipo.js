import tagGrass from "../img/grass.svg"
import tagPoison from "../img/poison.svg"
import tagWater from "../img/water.svg"
import tagBug from "../img/bug.svg"
import tagFire from "../img/fire.svg"
import tagFlying from "../img/flying.svg"
import tagNormal from "../img/normal.svg"



export const imageType = (type) => {
    switch (type) {
        case "grass":
            return tagGrass;
        case "poison":
            return tagPoison;
        case "water":
            return tagWater;
        case "bug":
            return tagBug;
        case "fire":
            return tagFire;
        case "flying":
            return tagFlying;
        case "normal":
            return tagNormal;
         default:
            return tagGrass;
    }
}
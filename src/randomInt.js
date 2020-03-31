/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns a number random 
 */
export default function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 *
 * @param {number} min
 * @param {number} max
 * @returns a number random
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max+1)) + min;
}

module.exports = getRandomInt;
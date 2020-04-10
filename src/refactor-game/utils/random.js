/**
 *
 * @param {number} min
 * @param {number} max
 * @returns a number random
 */
function getInt(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getString(arrayString) {
    if(arrayString){
        let indexRandom = getInt(0, arrayString.length -1);

        return arrayString[indexRandom];
    }
    
    return;
}
 
module.exports = { getInt, getString };
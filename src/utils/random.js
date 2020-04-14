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

function getFunctions(arrayFunctions) {
    if(arrayFunctions){
        let indexRandom = getInt(0, arrayFunctions.length -1);

        return arrayFunctions[indexRandom];
    }

    return;
}

function getBoolean(){
    let arraryBoolean = [false, true];

    return arraryBoolean[getInt(0, 1)];
}
 
module.exports = { getInt, getString, getFunctions, getBoolean };
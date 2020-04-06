function isPositionRepeated(rangePosition, board){

    let positionsWithWords = [];

    board.forEach((item)=>{
        let wordsPositions = item.filter((el)=>{return el.word});
        if(wordsPositions.length > 0){
            positionsWithWords = positionsWithWords.concat(wordsPositions);
        }
    });

    for(let i = 0; i < positionsWithWords.length; i++){
        for(let index = 0; index < rangePosition.length; index++)
            if(positionsWithWords[i].row == rangePosition[index].row)
                if(positionsWithWords[i].column == rangePosition[index].column)
                    return true;
    }

    return false;
}

module.exports = isPositionRepeated;
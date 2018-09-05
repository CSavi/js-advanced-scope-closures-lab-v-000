function produceDrivingRange(blockRange){
    return function(startBlock, endBlock){
        let startEndBlock = Math.abs(parseInt(startBlock) - parseInt(endBlock));
        let difference = Math.abs(startEndBlock - blockRange);

        if (startEndBlock < blockRange) {
            return `within range by ${difference}`
        } else {
            return `${difference} blocks out of range`
        }
    }
}


function produceTipCalculator(percentOfTip) {
    return function(fare){
        return (fare * percentOfTip);
    }
}

function createDriver(){
    let driverId = 0; 

    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}
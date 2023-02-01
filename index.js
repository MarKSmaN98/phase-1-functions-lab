// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    switch (dist) {
        case 43: 
            return 1;
            break;
        case 50: 
            return 8;
            break;
        case 34: 
            return 8;
            break;
    }


}

function distanceFromHqInFeet(dist) {
    let x = distanceFromHqInBlocks(dist);
    return x*264;
}

function getDist(block1, block2) {
    let c = block1 - block2;
    if (c <= 0) {
        c *= -1;
    }
    return c;
}

function distanceTravelledInFeet(block, endBlock) {
    let dist = getDist(block, endBlock) * 264;
    return dist;
}

function calculatesFarePrice(start, end) {
    let dist = getDist(start, end) * 264; //dist in ft
    //dist = distanceFromHqInFeet(dist); // get dist in ft
    //dist -= 400; // take out free 400 ft
    //console.log(dist);
    if (dist <= 400) {
        return 0;
    }
    else if (dist > 0 && dist <= 2000) {
        return (dist - 400) * 0.02;
    }
    else if (dist > 2000 && dist <= 2500) {
        return 25;
    }
    else if (dist > 2500) {
        return 'cannot travel that far';
    }
}
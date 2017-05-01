// Just change these 

const numberOfPowers = 10;
const amountOfEachPower = 10;


function generatePowers(numberOfPowers, amountOfEachPower) {
    var powerArray = [[]];
    for (var i = 0; i < numberOfPowers - 1; i++) {
        powerArray.push([]); // add new array to array
        for (var j = 0; j <= amountOfEachPower - 1; j++) {
            powerArray[i].push(Math.pow(j + 2, i + 2));
        }
    }

    return powerArray;
}

var powerArray = generatePowers(numberOfPowers, amountOfEachPower);

// Array -> Nothing
// Get differences between array    elements until the differences are the same
powerArray.map((arrayOfPowers) => {
    findSameDifferences(arrayOfPowers);
});

function findSameDifferences(arr) {
    if (arr == false) {
        return;
    }
    console.log(arr);
    findSameDifferences(getDifferences(arr));
}

function getDifferences(arr) {
    var results = [];

    arr.map((x, i) => {
        var result = arr[i + 1] - x;
        if (!isNaN(result) && result !== 0) results.push(result);
    });
    
    return results;
};

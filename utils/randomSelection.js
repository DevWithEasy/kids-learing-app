import getRandomInt from "./randomInt";

function getRandomSelection(data) {
    const selectIndex = getRandomInt(data.length);
    const selectObject = data[selectIndex];

    let choose = [selectObject];
    let remainingIndices = [...Array(data.length).keys()].filter(i => i !== selectIndex);
    
    while (choose.length < 4 && remainingIndices.length > 0) {
        const randomIndex = getRandomInt(remainingIndices.length);
        choose.push(data[remainingIndices[randomIndex]]);
        remainingIndices.splice(randomIndex, 1);
    }

    return {
        select: selectObject,
        choose: choose
    };
}
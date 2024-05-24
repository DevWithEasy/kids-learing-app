import getRandomInt from "./randomInt";
import shuffleArray from "./suffleWord";

function getRandomSelection(data) {
    const suffleData = shuffleArray(data)
    const selectIndex = getRandomInt(suffleData.length);
    const selectObject = suffleData[selectIndex];

    let choose = [selectObject];
    let remainingIndices = [...Array(suffleData.length).keys()].filter(i => i !== selectIndex);
    
    while (choose.length < 4 && remainingIndices.length > 0) {
        const randomIndex = getRandomInt(remainingIndices.length);
        choose.push(suffleData[remainingIndices[randomIndex]]);
        remainingIndices.splice(randomIndex, 1);
    }

    return {
        select: selectObject,
        choose: choose
    };
}

export default getRandomSelection
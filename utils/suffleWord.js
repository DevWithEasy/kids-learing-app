const shuffleArray=(array)=>{
    var arrayItems = array

    for (var i = arrayItems.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1))

        var temp = arrayItems[i]

        arrayItems[i] = arrayItems[j]

        arrayItems[j] = temp
    }

    return arrayItems
}

export default shuffleArray
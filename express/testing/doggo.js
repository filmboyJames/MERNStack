function doggo(num) {
    const positions = [];
    for(i=1; i<=100; i++){
        if(i === num) continue;
        
        let placeString = "" +i;

        if(i % 10 ===1 && i!= 11) placeString += "st";
        else if (i % 10 === 2 && i!= 12) placeString += "nd";
        else if (i % 10 === 3 && i!= 13) placeString += "rd";
        else placeString += "th";

        positions.push(placeString);
    }

    return positions;
}

console.log(doggo(44));

module.exports = doggo;
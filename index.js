// Code your solutions in this file
function writeCards(array,string) {
    let card = []
    for (let i = 0; i < array.length; i++) {
        card.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }

    return card;
}

function countDown(params) {
    while ( params > 0 ) {
        console.log(params);
        params -= 1;
    }
    console.log(params);

}


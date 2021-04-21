const gifts = ["Teddy Bear", "Drone", "Doll"]

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(name, event){
    const thankYouCards = []
    for (let i = 0; i < name.length; i++){
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(x){
    let count = x;
    while (count >= 0) {
    console.log(count);
    count--;
    }
}
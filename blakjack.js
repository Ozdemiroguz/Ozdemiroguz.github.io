const deck = [
    { type: "♣️", name: "A", price: 11 }, { type: "♦️", name: "A", price: 11 }, { type: "♥️", name: "A", price: 11 }, { type: "♠️", name: "A", price: 11 },
    { type: "♣️", name: "2", price: 2 }, { type: "♦️", name: "2", price: 2 }, { type: "♥️", name: "2", price: 2 }, { type: "♠️", name: "2", price: 2 },
    { type: "♣️", name: "3", price: 3 }, { type: "♦️", name: "3", price: 3 }, { type: "♥️", name: "3", price: 3 }, { type: "♠️", name: "3", price: 3 },
    { type: "♣️", name: "4", price: 4 }, { type: "♦️", name: "4", price: 4 }, { type: "♥️", name: "4", price: 4 }, { type: "♠️", name: "4", price: 4 },
    { type: "♣️", name: "5", price: 5 }, { type: "♦️", name: "5", price: 5 }, { type: "♥️", name: "5", price: 5 }, { type: "♠️", name: "5", price: 5 },
    { type: "♣️", name: "6", price: 6 }, { type: "♦️", name: "6", price: 6 }, { type: "♥️", name: "6", price: 6 }, { type: "♠️", name: "6", price: 6 },
    { type: "♣️", name: "7", price: 7 }, { type: "♦️", name: "7", price: 7 }, { type: "♥️", name: "7", price: 7 }, { type: "♠️", name: "7", price: 7 },
    { type: "♣️", name: "8", price: 8 }, { type: "♦️", name: "8", price: 8 }, { type: "♥️", name: "8", price: 8 }, { type: "♠️", name: "8", price: 8 },
    { type: "♣️", name: "9", price: 9 }, { type: "♦️", name: "9", price: 9 }, { type: "♥️", name: "9", price: 9 }, { type: "♠️", name: "9", price: 9 },
    { type: "♣️", name: "10", price: 10 }, { type: "♦️", name: "10", price: 10 }, { type: "♥️", name: "10", price: 10 }, { type: "♠️", name: "10", price: 10 },
    { type: "♣️", name: "J", price: 10 }, { type: "♦️", name: "J", price: 10 }, { type: "♥️", name: "J", price: 10 }, { type: "♠️", name: "J", price: 10 },
    { type: "♣️", name: "Q", price: 10 }, { type: "♦️", name: "Q", price: 10 }, { type: "♥️", name: "Q", price: 10 }, { type: "♠️", name: "Q", price: 10 },
    { type: "♣️", name: "K", price: 10 }, { type: "♦️", name: "K", price: 10 }, { type: "♥️", name: "K", price: 10 }, { type: "♠️", name: "K", price: 10 },
];
let deckarr = deck.concat(deck)
function shuffle(deck) {

    for (let i = 0; i < 500; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
shuffle(deckarr);
let temp;
let dx = 450;
screen.width < 1000 ? dx = 200 : dx = 485;
let x = 450;
screen.width < 1000 ? x = 200 : x = 485;





let betArray = [];
let cardArray = [];
let dealer = { score: 0, cards: [], cardN: 0, cardsTemp: [] }
let player = [
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 2000, bet: 0 },
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 1000, bet: 0 },
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 1000, bet: 0 }

];

//elements

let deckPlace = document.getElementById("deckPlace")
let card = document.getElementById("card")
let betScreen = document.getElementById("betScreen");
let moneyScreen = document.getElementById("moneyScreen");
let coins = document.getElementById("coins");
let remainCard = document.getElementById("remainCard")
let playerScore = document.getElementById("playerScore")
let dealerScore = document.getElementById("dealerScore")
let endScreen = document.getElementById("endScreen")



remainCard.innerText = deckarr.length;


//event 
for (let index = 0; index < coins.children.length; index++) {

    coins.children[index].addEventListener("click", bet);

}
moneyScreen.children[1].addEventListener("click", clearBet);
moneyScreen.children[0].addEventListener("click", deal);
moneyScreen.children[2].addEventListener("click", newGame);
betScreen.children[0].addEventListener("click", playerHit)
betScreen.children[2].addEventListener("click", stand)


function bet(e) {

    temp = e.target.children[0].cloneNode(true);
    temp.style.position = "absolute"
    e.target.appendChild(temp);
    betArray.push(temp);
    betAdd(e.target.className)
    coinsCheck();




}
function coinsCheck() {
    if (player[0].money < 10) {
        coins.children[0].children[0].style.display = "none"
        coins.children[0].removeEventListener("click", bet);

    }

    if (player[0].money < 25) {
        coins.children[1].children[0].style.display = "none"
        coins.children[1].removeEventListener("click", bet);
    }
    if (player[0].money < 100) {
        coins.children[2].children[0].style.display = "none"
        coins.children[2].removeEventListener("click", bet);

    }
    if (player[0].money < 500) {
        coins.children[3].children[0].style.display = "none"
        coins.children[3].removeEventListener("click", bet);

    }
    if (player[0].money < 1000) {
        coins.children[4].children[0].style.display = "none"
        coins.children[4].removeEventListener("click", bet);

    }
}
function clearBet() {
    betArray.forEach(function (element) {
        element.remove();
    });
    player[0].money += player[0].bet;
    player[0].bet = 0;
    betScreen.children[1].innerHTML = `Total Bet: ${player[0].bet} `;
    moneyScreen.children[4].innerHTML = player[0].money + "$";
    for (let index = 0; index < coins.children.length; index++) {
        coins.children[index].addEventListener("click", bet);
        coins.children[index].children[0].style.display = "block";

    }

}
function deal() {
    if (player[0].bet == 0) {
        temp = coins.children[2].children[0].cloneNode(true);
        temp.style.position = "absolute"
        console.log(temp);
        coins.children[2].appendChild(temp);
        console.log(coins)
        betArray.push(temp);
        betAdd('100');
        coinsCheck();

    }
    for (let index = 0; index < coins.children.length; index++) {

        coins.children[index].removeEventListener("click", bet);

    }
    setTimeout(playerHit, 10)
    setTimeout(delaerHit, 1010)
    setTimeout(playerHit, 2020)
    setTimeout(delaerHit, 3030)
    moneyScreen.children[0].style.display = "none";
    moneyScreen.children[1].style.display = "none";
    moneyScreen.children[2].style.display = "none";
    moneyScreen.children[3].style.display = "none";

    betScreen.children[0].style.display = "block";
    betScreen.children[2].style.display = "block";
    dealerScore.style.display = "block";
    playerScore.style.display = "block";





}
function delaerHit() {
    let xtemp;
    let y;
    screen.width < 1000 ? y = -20 : y = -10;
    let dtemp;
    dtemp = card.cloneNode(true);
    cardArray.push(dtemp);
    deckPlace.appendChild(dtemp);
    dtemp.children[0].children[1].children[1].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[0].children[0].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[2].children[0].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[0].children[1].innerHTML = deckarr[0].type;
    dtemp.children[0].children[1].children[2].children[1].innerHTML = deckarr[0].type;
    if (deckarr[0].type == "♦️" || deckarr[0].type == "♥️") {
        dtemp.style.color = "red";
    }
    dealer.score += deckarr[0].price;
    dealer.cardN++;
    dealer.cards.push(deckarr[0].price);
    deckarr.shift();

    dealer.cardsTemp.push(dtemp);
    setTimeout(function () {
        if (dealer.cardN == 1) {
            dtemp.style.transform = `translate(${dx}%,${y}vh)`
            dtemp.children[0].style.transform = "rotateY(180deg)"
        }
        else if (dealer.cardN == 2) {
            dtemp.style.transform = `translate(${dx + 36}%,${y}vh)`
            dx += 36;
        }
        else if (dealer.cardN > 2) {
            dtemp.style.transform = `translate(${dx + 36}%,${y}vh)`
            dtemp.children[0].style.transform = "rotateY(180deg)"
            dx += 36;

        }




    }, 10);
    setTimeout(function () {
        for (i = dealer.cardsTemp.length; i > 0; i--) {
            if (i == dealer.cardsTemp.length) {
                dx -= 18;
                xtemp = dx;
                dealer.cardsTemp[i - 1].style.transform = `translate(${xtemp}%,${y}vh)`
            }
            else {
                dealer.cardsTemp[i - 1].style.transform = `translate(${xtemp - 32}%,${y}vh)`
                xtemp -= 36;
            }
        }
    }, 1030)
    if (dealer.cardN != 2)
        dealerScore.innerText = dealer.score;
    acecheckdealer();
    if (dealer.score == 21 && dealer.cardN == 2) {
        if (player[0].cardN == 2 && player[0].score == 21) {
            endScreen.children[0].innerText = "Push";
            endScreen.children[0].style.color = "white";
            endScreen.children[1].innerText = "+" + player[0].bet + "$";
            endScreen.style.borderColor = "white";
            endScreen.style.transform = "translate(-100%)";
            gameEnd();

        }
        else {
            endScreen.children[0].innerText = "You Lose";
            endScreen.children[0].style.color = "red";
            endScreen.children[1].innerText = "-" + player[0].bet + "$";
            player[0].money += 2 * player[0].bet;
            moneyScreen.children[4].innerText = player[0].money + "";
            endScreen.style.borderColor = "red";
            endScreen.style.transform = "translate(-100%)"
            dealerScore.innerText = "BJ"

            gameEnd();
        }
    }
    remainCard.innerText = deckarr.length;


}

function playerHit() {
    let ptemp;
    let y = 17;
    screen.width < 1000 ? y = 15 : y = 17;

    let xtemp;
    ptemp = card.cloneNode(true);
    cardArray.push(ptemp);

    deckPlace.appendChild(ptemp);

    //fill card

    ptemp.children[0].children[1].children[1].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[0].children[0].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[2].children[0].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[0].children[1].innerHTML = deckarr[0].type;
    ptemp.children[0].children[1].children[2].children[1].innerHTML = deckarr[0].type;

    if (deckarr[0].type == "♦️" || deckarr[0].type == "♥️") {
        ptemp.style.color = "red";
    }
    player[0].score += deckarr[0].price;
    player[0].cards.push(deckarr[0].price);
    deckarr.shift()

    player[0].cardsTemp.push(ptemp);
    player[0].cardN++;

    setTimeout(function () {
        if (player[0].cardN > 1) {
            ptemp.style.transform = `translate(${x + 36}%,${y}vh)`
            ptemp.children[0].style.transform = "rotateY(180deg)"
            x += 36;
            console.log(x)

        }
        else {
            ptemp.style.transform = `translate(${x}%,${y}vh)`
            ptemp.children[0].style.transform = "rotateY(180deg)"
            console.log(x)
        }



    }, 10);
    setTimeout(function () {
        for (i = player[0].cardsTemp.length; i > 0; i--) {
            if (i == player[0].cardsTemp.length) {
                x -= 18;
                console.log(x)
                console.log(i)

                xtemp = x;
                player[0].cardsTemp[i - 1].style.transform = `translate(${xtemp}%,${y}vh)`

            }
            else {
                console.log(i)

                player[0].cardsTemp[i - 1].style.transform = `translate(${xtemp - 36}%,${y}vh)`
                xtemp -= 36;
                console.log(xtemp)


            }
        }
    }, 1020)
    playerScore.innerText = player[0].score;
    aceCheckPLayer();
    if (player[0].score > 21) {
        playerScore.innerText = "💥";
        endScreen.children[0].innerText = "Bust";
        endScreen.children[0].style.color = "red";
        endScreen.children[1].innerText = "-" + player[0].bet + "$";
        endScreen.style.borderColor = "red";
        endScreen.style.transform = "translate(-100%)";
        gameEnd();

    }
    else if (player[0].score == 21 && player[0].cardN == 2) {

        endScreen.children[0].innerText = "BlackJack";
        endScreen.children[0].style.color = "gold";
        endScreen.children[1].innerText = "+" + player[0].bet + "$";
        player[0].money += 2 * player[0].bet;
        moneyScreen.children[4].innerText = player[0].money + "";
        endScreen.style.borderColor = "gold";
        endScreen.style.transform = "translate(-100%)"
        playerScore.innerText = "BJ"
        gameEnd();
    }
    else if (player[0].score == 21) {
        betScreen.children[0].display = "block"

    }


    remainCard.innerText = deckarr.length;

}

function betAdd(betPrice) {

    console.log(betPrice)
    console.log("betAdd");
    if (betPrice == '10') {
        console.log(betPrice)

        setTimeout(function () {
            temp.style.transform = "translate(160%,-23vh)"
        }, 10)

    }
    else if (betPrice == '25') {
        console.log(betPrice)
        console.log(temp);
        setTimeout(function () {
            temp.style.transform = "translate(130%,-24vh)"
        }, 10)

    }
    else if (betPrice == '100') {
        setTimeout(function () {
            temp.style.transform = "translate(-80%,-29vh)"
        }, 10)
            ;
    }
    else if (betPrice == '500') {
        setTimeout(function () {
            temp.style.transform = "translate(-80%,-29vh)"
        }, 10)
            ;
    }
    else {
        setTimeout(function () {
            temp.style.transform = "translate(-120%,-30vh)"
        }, 10)

    }
    player[0].bet += parseInt(betPrice);
    player[0].money -= parseInt(betPrice);
    betScreen.children[1].innerHTML = `Total Bet: ${player[0].bet} `;
    moneyScreen.children[4].innerHTML = player[0].money + "$";
}

function gameEnd() {
    moneyScreen.children[2].style.display = ""
    moneyScreen.children[4].innerText = player[0].money + "$";

    betScreen.children[0].style.display = "none"
    betScreen.children[1].style.display = "none"
    betScreen.children[2].style.display = "none"
    betScreen.children[3].style.display = "none"
    dealer.cardsTemp[1].children[0].style.transform = "rotateY(180deg)";
    dealerScore.innerText = dealer.score;




}
function aceCheckPLayer() {
    if (player[0].score > 21 && player[0].cards.some(function (p) { return p == 11 })) {
        player[0].cards[player[0].cards.indexOf(11)] = 1;
        player[0].score -= 10;
        playerScore.innerText = player[0].score;

    }
}
function acecheckdealer() {
    if (dealer.score > 21 && dealer.cards.some(function (p) { return p == 11 })) {
        dealer.cards[dealer.cards.indexOf(11)] = 1;
        dealer.score -= 10;
        dealerScore.innerText = dealer.score;
    }
}
function stand() {
    gameEnd();
    moneyScreen.children[2].style.display = "none"
    dealer.cardsTemp[1].children[0].style.transform = "rotateY(180deg)"

    while (dealer.score < 17) {
        delaerHit();
    }
    if (dealer.score >= 17) {
        if (dealer.score > 21) {
            endScreen.children[0].innerText = "You Win";
            endScreen.children[0].style.color = "blue";
            endScreen.children[1].innerText = "+" + 2 * player[0].bet + "$";
            player[0].money += 2 * player[0].bet;
            endScreen.style.borderColor = "blue";
            endScreen.style.transform = "translate(-100%)";
            moneyScreen.children[2].style.display = ""
            dealerScore.innerText = "💥"
            moneyScreen.children[4].innerText = player[0].money + "$";


        }
        else if (dealer.score == player[0].score) {
            endScreen.children[0].innerText = "Push";
            endScreen.children[0].style.color = "white";
            endScreen.children[1].innerText = "+" + player[0].bet + "$";
            player[0].money += player[0].bet;
            endScreen.style.borderColor = "white";
            endScreen.style.transform = "translate(-100%)";
            moneyScreen.children[2].style.display = ""
            moneyScreen.children[4].innerText = player[0].money + "$";


        }
        else if (dealer.score > player[0].score) {
            endScreen.children[0].innerText = "You Lose";
            endScreen.children[0].style.color = "red";
            endScreen.children[1].innerText = "-" + player[0].bet + "$";
            endScreen.style.borderColor = "red";
            endScreen.style.transform = "translate(-100%)";
            moneyScreen.children[2].style.display = ""

        }
        else {
            endScreen.children[0].innerText = "You Win";
            endScreen.children[0].style.color = "blue";
            endScreen.children[1].innerText = "+" + 2 * player[0].bet + "$";
            player[0].money += 2 * player[0].bet;
            endScreen.style.borderColor = "blue";
            endScreen.style.transform = "translate(-100%)";
            moneyScreen.children[2].style.display = "";
            moneyScreen.children[4].innerText = player[0].money + "$";

        }
    }

}
function newGame() {
    player[0].bet = 0;
    player[0].cardN = 0;
    player[0].cards = [];
    player[0].score = 0;
    player[0].cardsTemp.forEach(function (element) {
        element.remove();
    });

    player[0].cardsTemp = [];
    dealer.bet = 0;
    dealer.cardN = 0;
    dealer.cards = [];
    dealer.score = 0;
    dealer.cardsTemp.forEach(function (element) {
        element.remove();
    });
    dealer.cardsTemp = [];
    endScreen.style.transform = ""
    cardArray.forEach(function (element) {
        element.remove();
    });
    betArray.forEach(function (element) {
        element.remove();
    });
    dealerScore.style.display = "none"
    playerScore.style.display = "none"
    moneyScreen.children[0].style.display = ""
    moneyScreen.children[1].style.display = ""
    moneyScreen.children[2].style.display = "none"
    moneyScreen.children[3].style.display = ""
    betScreen.children[1].style.display = ""
    betScreen.children[1].innerText = "Total Bet: 0"


    for (let index = 0; index < coins.children.length; index++) {

        coins.children[index].addEventListener("click", bet);

    }


}

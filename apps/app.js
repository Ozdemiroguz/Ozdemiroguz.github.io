function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
let val = document.querySelectorAll('.game button');
function shuffle(deck) {

    for (let i = 0; i < 200; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
let image =
    [{ img: "url(images/sena.jpg)", value: "a" }, { img: "url(images/sena.jpg)", value: "a" },
    { img: "url(images/umut.jpg)", value: "b" }, { img: "url(images/umut.jpg)", value: "b" },
    { img: "url(images/irem.jpg)", value: "c" }, { img: "url(images/irem.jpg)", value: "c" },
    { img: "url(images/berk.jpg)", value: "d" }, { img: "url(images/berk.jpg)", value: "d" },
    { img: "url(images/eray.jpg)", value: "e" }, { img: "url(images/eray.jpg)", value: "e" },
    { img: "url(images/yunus.jpg)", value: "f" }, { img: "url(images/yunus.jpg)", value: "f" },
    { img: "url(images/oguzhan.jpg)", value: "g" }, { img: "url(images/oguzhan.jpg)", value: "g" },
    { img: "url(images/alper.jpg)", value: "h" }, { img: "url(images/alper.jpg)", value: "h" },]
let ctr = { cardS: [], counter: 0, indexS: [], }
shuffle(image)


function control(index) {
    val[index].firstElementChild.style.background = image[index].img;
    val[index].firstElementChild.style.backgroundSize = '140px ';
    val[index].firstElementChild.style.backgroundRepeat = "no-repeat";
    if (ctr.cardS.length < 2) {
        val[index].firstElementChild.style.transform = 'rotateY(180deg)';
        ctr.cardS.push(image[index].value);
        ctr.indexS.push(index);
        if (ctr.cardS.length == 2) {

            check();
        }
    }
};
async function check() {

    if (ctr.cardS[0] == ctr.cardS[1] && ctr.indexS[0] != ctr.indexS[1]) {
        await delay(700);
        val[ctr.indexS[0]].firstElementChild.style.opacity = '0';
        val[ctr.indexS[1]].firstElementChild.style.opacity = '0';
        await delay(500);
        val[ctr.indexS[0]].firstElementChild.style.display = 'none';
        val[ctr.indexS[1]].firstElementChild.style.display = 'none';
        ctr.cardS = [];
        ctr.indexS = [];
        ctr.counter++;
        if (ctr.counter == 8) {
            document.getElementById('cong').style.visibility = 'visible'
        }
    }
    else {
        await delay(700);
        val[ctr.indexS[0]].firstElementChild.style.transform = 'rotateY(0deg)';
        val[ctr.indexS[1]].firstElementChild.style.transform = 'rotateY(0deg)';
        ctr.cardS = [];
        ctr.indexS = [];

    }


}

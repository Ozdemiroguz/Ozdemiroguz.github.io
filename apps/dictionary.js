
window.onload = function () {
    if (screen.width < 767) {
        let container = document.getElementById("container");
        let headContainer = document.getElementById("headContainer");
        let dictionary = document.getElementById("dictionary");
        container.style.position = "static";
        headContainer.style.position = "static";
        dictionary.style.position = "static";
        dictionary.style.maxWidth = "100%";
        dictionary.style.marginTop = "25px";

        dictionary.style.marginBottom = "25px";

        headContainer.style.maxWidth = "100%";
        headContainer.children[1].style.fontSize = "32px"
        headContainer.children[1].style.marginLeft = "40%"
        container.style.maxWidth = "100%";
        container.style.marginBottom = "50px";

    }
    document.getElementById("search").addEventListener("click", getWord);
    document.getElementById("save").addEventListener("click", saveWordLocal);
    document.getElementById("clear").addEventListener("click", clearAll);
    document.getElementById("sort").addEventListener("click", sortWord);
    document.getElementById("wordInput").addEventListener("keypress", getWord)
    document.getElementById("filterInput").addEventListener('keyup', wordFilter);
    document.getElementById("typeFilter").childNodes.forEach(element => {
        element.addEventListener("click", typeFilter)
    });
    setLocals();

}

let typeButtons = document.querySelectorAll("#wordType");
var data = [];
let dictionary = { id: "", word: "", partOfSpeech: "", definition: "", example: "", synonym: "", antonym: "" }
function getApi(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json()).then(word => {

        if (word.title == "No Definitions Found") {
            document.querySelector(".alert").style.display = "block";
            setTimeout(clearError, 3000)
        }
        else {
            console.log(word);
            data = word[0].meanings;
            dictionary.id = word[0].word + data[0].partOfSpeech;
            dictionary.word = word[0].word;
            dictionary.partOfSpeech = data[0].partOfSpeech;
            dictionary.definition = data[0].definitions[0].definition;
            data[0].definitions[0].example == undefined ? (dictionary.example = "/") : (dictionary.example = word[0].meanings[0].definitions[0].example)
            data[0].synonyms[0] == undefined ? (dictionary.synonym = "/") : (dictionary.synonym = word[0].meanings[0].synonyms[0])
            data[0].antonyms[0] == undefined ? (dictionary.antonym = "/") : (dictionary.antonym = word[0].meanings[0].antonyms[0])
            setTypeButton();
            setDefaultWord(dictionary);

            array.forEach(element => {

            });

        }



    }).catch(function (err) {
        console.log(err);
    })

}

function getWord(e) {
    let word = document.getElementById("wordInput").value
    if ((e.key == "Enter" && e.type == "keypress" && word != '') || (e.type == "click" && word != '')) {
        getApi(word);
    }
}
function clearError() {
    document.querySelector('.alert').style.display = "none";
}
function setDefaultWord(defaultWord) {

    document.getElementById("defaultWord").children[0].innerText = defaultWord.word;
    document.getElementById("defaultWord").children[2].innerText = defaultWord.definition;
    document.getElementById("defaultWord").style.display = "block";
    localStorage.setItem('default', JSON.stringify(defaultWord));
}
function saveWordBoard() {
    let wordCard = document.getElementById("wordCard").cloneNode(true);
    wordCard.style.display = "inline-block";
    wordCard.id = dictionary.id;


    //card header -- h1
    wordCard.children[0].children[0].innerText = dictionary.word;
    //tr1--partof speach
    wordCard.children[1].children[0].children[0].children[0].children[1].innerText = dictionary.partOfSpeech;
    //tr2--defination
    wordCard.children[1].children[0].children[0].children[1].children[1].innerText = dictionary.definition;
    //tr3--example
    wordCard.children[1].children[0].children[0].children[2].children[1].innerText = dictionary.example;
    //tr4--synonym 
    wordCard.children[1].children[0].children[0].children[3].children[1].innerText = dictionary.synonym;
    //tr5--antonym 
    wordCard.children[1].children[0].children[0].children[4].children[1].innerText = dictionary.antonym;

    document.getElementById("container").append(wordCard)
    //card button event
    let btn1 = document.getElementById(dictionary.id).children[0].children[1].children[0];
    let btn2 = document.getElementById(dictionary.id).children[0].children[1].children[1];
    btn1.id = dictionary.id;
    btn2.id = dictionary.id;
    btn1.addEventListener("click", setCardButton);
    btn2.addEventListener("click", removeWord);

}
function saveWordLocal() {
    let words;
    //for get array and update
    if (localStorage.getItem('words') === null) {
        words = [];
    }
    else {
        words = JSON.parse(localStorage.getItem('words'));
    }

    if (!(words.includes(dictionary.id))) {

        words.push(dictionary.id);
        localStorage.setItem('words', JSON.stringify(words));
        localStorage.setItem(dictionary.id, JSON.stringify(dictionary));
        saveWordBoard();
    }


}
function setLocals() {

    let words = JSON.parse(localStorage.getItem('words'));
    if (words != null) {
        words.sort();
        words.forEach(word => {
            dictionary = JSON.parse(localStorage.getItem(word));
            saveWordBoard();

        });
    }

}
function setTypeButton() {
    //for reset
    typeButtons.forEach(type => {
        type.style.display = "none";
    });
    for (let i = 0; i < data.length; i++) {
        typeButtons.forEach(type => {
            if (data[i].partOfSpeech == type.innerHTML) {
                type.addEventListener("click", getWordType);
                type.style.display = "block";
            }

        });
    }
}

function getWordType(e) {

    for (let i = 0; i < data.length; i++) {
        if (e.target.innerHTML == data[i].partOfSpeech) {
            dictionary.id = dictionary.word + data[i].partOfSpeech;
            dictionary.partOfSpeech = data[i].partOfSpeech;
            dictionary.definition = data[i].definitions[0].definition;
            data[i].definitions[0].example == undefined ? (dictionary.example = "/") : (dictionary.example = data[i].definitions[0].example)
            data[i].synonyms[i] == undefined ? (dictionary.synonym = "/") : (dictionary.synonym = data[i].synonyms[0])
            data[i].antonyms[i] == undefined ? (dictionary.antonym = "/") : (dictionary.antonym = data[i].antonyms[0])
            setDefaultWord(dictionary);
        }
    }
}
function setCardButton(e) {
    let wordCard = document.getElementById(e.target.id);
    wordCard.children[1].style.display == 'block' ? (wordCard.children[1].style.display = "none") : (wordCard.children[1].style.display = "block");
}
function removeWord(e) {
    let id = e.target.id;
    document.getElementById(id).remove();
    localStorage.removeItem(id);
    let words = JSON.parse(localStorage.getItem('words'));
    const index = words.indexOf(id);
    words.splice(index, 1);
    localStorage.setItem('words', JSON.stringify(words));

}
function clearAll() {

    clearAllBoard();
    clearAllLocals();

}
function clearAllBoard() {
    while (document.getElementById("container").children.length != 1) {
        document.getElementById("container").children[1].remove()
    }
}
function clearAllLocals() {
    let words = JSON.parse(localStorage.getItem('words'));
    words.forEach(element => {
        localStorage.removeItem(element)
    });
    localStorage.removeItem("words");
}
function wordFilter(e) {
    const text = e.target.value.toUpperCase();
    let words = JSON.parse(localStorage.getItem('words'));
    if (words != null) {

        words.forEach(function (word) {
            const item = document.getElementById(word);

            if (item.children[0].children[0].innerText.toUpperCase().indexOf(text) != -1) {
                item.style.display = "inline-block";
            }
            else {
                item.style.display = "none";
            }
        })
    }

}
function sortWord() {
    clearAllBoard()
    setLocals();
}
function typeFilter(e) {
    let words = JSON.parse(localStorage.getItem('words'));
    if (words != null) {

        words.forEach(function (word) {
            const item = document.getElementById(word);

            if (item.children[1].children[0].children[0].children[0].children[1].innerText == e.target.innerHTML || e.target.innerHTML == "all") {
                item.style.display = "inline-block";
            }
            else {
                item.style.display = "none";
            }
        })
    }

}
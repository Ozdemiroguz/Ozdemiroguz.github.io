document.getElementById("inputForm").addEventListener("submit", setPicture);
var breedlist;
let pictures = [
    "1668676103_The-Top-5-Most-Reputable-Pug-Breeders-In-Ontario-Of-2022.jpg",
    "cutest-dog-breeds-jpg.jpg",
    "husky_puppies.jpg",
    "two-yellow-labrador-retriever-puppies-1108099-1-900x675.jpg",
    "golden-retriever-colors-long-mnlyzwQ8PjiqzVpQ.webp"
]
getBreedList();
setRandomPic()
function getBreedList() {
    fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json()).then(dogs => {
        console.log(dogs.message.spitz);
        window.breedlist = Object.keys(dogs.message)
        console.log(dogs)
        seOption(breedlist);

    }).catch(function (err) {
        console.log(err);
    })
    if (screen.width < 767) {
        document.getElementById("container").style.top = "7vh";
        document.getElementById("container").style.maxWidth = "90%"
        document.querySelector("#container img").style.maxHeight = "40vh"


        document.getElementById("container").style.left = "5%";

        document.getElementById("card").style.width = "90%";
        document.getElementById("card").style.maxHeight = "70vh";
        document.getElementById("card").style.top = "55vh";
        document.getElementById("card").style.marginBottom = "5vh";









    }
}
function seOption(dogs) {
    var select = document.querySelector(".custom-select");
    var option = "<select><option>All breeds</option>";


    dogs.forEach(dog => {
        option += "<option>" + dog + "</option> ";

    });
    option += "</select>";
    select.innerHTML = option;
}
function setPicture(e) {
    let url;
    if (document.querySelector("select").value == "All breeds") {
        url = "https://dog.ceo/api/breeds/image/random"
    }
    else {
        let breed = document.querySelector("select").value;
        url = `https://dog.ceo/api/breed/${breed}/images/random`
    }


    fetch(url).then(response => response.json()).then(image => {
        document.getElementById("screen").src = image.message;
        document.getElementById("screen1").src = image.message;
        document.getElementById("link").innerText = image.message;
        document.getElementById("link").href = image.message;



    }).catch(function (err) {
        console.log(err);
    })
    e.preventDefault();

}
function setRandomPic() {
    let random = Math.floor(Math.random() * pictures.length);
    document.getElementById("screen").src = "images/" + pictures[random];
    document.getElementById("screen1").src = "images/" + pictures[random];
    document.getElementById("link").innerText = "Local picture. (You can find in source file)";

}
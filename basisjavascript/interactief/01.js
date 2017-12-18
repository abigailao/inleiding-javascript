pics = document.getElementById("pics");
createPicsHolders ();
createBinturongImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" +i;
        pics.appendChild(pictureHolder);
    }
}

function createBinturongImages(){
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        binturongPlaatje = document.createElement("img");
        binturongPlaatje.src = "../../img/Binturong" + (i+1) + ".jpg";
        binturongPlaatje.id = (i+1);
        binturongPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(binturongPlaatje);
    }
}

function  maakFavoriet(id) {
    console.log("Maak mij favoriet! Het gaat om binturong..." + id );
    notsofavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavoriet.length; i++){
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../../img/heart.png')";
}
//Crookapp EYES
var plaatjes = [1,2,3,4,5];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../../img/Dolleyes5.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('../../img/Dolleyes" + getDolleyes() + ".jpg')";
});

function getDolleyes() {
    if(teller >= plaatjes.length){
        teller = 1;
    } else{
        teller++;
    }
    console.log(teller);
    return teller;
}

//Crookapp NOSE
var plaatjes = [1,2,3,4,5];
var teller = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('../../img/Dollnose5.jpg')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('../../img/Dollnose" + getDollnose() + ".jpg')";
});

function getDollnose() {
    if(teller >= plaatjes.length){
        teller = 1;
    } else{
        teller++;
    }
    console.log(teller);
    return teller;
}

//Crookapp LIPS
var plaatjes = [1,2,3,4,5];
var teller = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('../../img/Dolllips5.jpg')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('../../img/Dolllips" + getDolllips() + ".jpg')";
});

function getDolllips() {
    if(teller >= plaatjes.length){
        teller = 1;
    } else{
        teller++;
    }
    console.log(teller);
    return teller;
}
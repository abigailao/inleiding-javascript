var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalwielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 10
        console.log(this.snelheid);
    },

    toeteren: function() {
        console.log("toet!");
    }
}

// console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
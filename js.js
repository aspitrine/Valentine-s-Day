$(window).load(function(){
  date();
  setInterval(date,1000);
});


function date(){
  var dn = moment();
  var dr = moment([2010,9,14]);

  document.getElementById("rencontre").innerHTML = (dn.diff(dr, "years") + " ans<br>" + dn.diff(dr, "months") + " mois<br>" + dn.diff(dr, "days") + " jours<br>" + dn.diff(dr, "hours") + " heures <br>" +dn.diff(dr, "minutes") + " minutes<br>" +dn.diff(dr, "seconds") + " secondes<br> <strong>D'amour</strong>");
  mariage();
}

function mariage() {
  var dn = moment();
  var dm = moment([2016,2,6]);
  if(!dm.diff(dn)) {
    var dm = moment();
    var dn = moment([2016,2,6]);
  }
  if(document.getElementsByName("mariage")[0].value == "06/02/2016") {
    document.getElementById("mariage").innerHTML = (dm.diff(dn, "years") + " ans<br>" + dm.diff(dn, "months") + " mois<br>" + dm.diff(dn, "days") + " jours<br>" + dm.diff(dn, "hours") + " heures <br>" +dm.diff(dn, "minutes") + " minutes<br>" +dm.diff(dn, "seconds") + " secondes<br> <strong>Avant le grand jour</strong>");
  } else {
    document.getElementById("mariage").innerHTML = "";
  }
}
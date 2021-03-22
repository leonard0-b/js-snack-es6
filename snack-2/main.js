// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Creo un array di squadre🐱‍👤
$(document).ready(function(){
  const squadre = [
    {
      nome: "Deportivo Mortadellino",
      punti: 0,
      falli: 0
    },
    {
      nome: "Hertha Vernello",
      punti: 0,
      falli: 0
    },
    {
      nome: "Paris Saint Gennaro",
      punti: 0,
      falli: 0
    },
    {
      nome: "Patetico Mineirio",
      punti: 0,
      falli: 0
    },
    {
      nome: "Spartak Mooseca",
      punti: 0,
      falli: 0
    },
  ];

  // tramite un ciclo for genero numeri randomici per i punti e i falli🐱‍👤
  for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumberInRange(1, 50);
    squadre[i].falli = randomNumberInRange(1, 30);
  }

  console.log("Queste sono le squadre del torneo Buona Questa Cadrega n.78:", squadre);

  // creo un array vuoto🐱‍👤
  const arrayCharles = [];

  // in un ciclo for creo una costante tramite la destrutturazione comprendente solo nome e falli🐱‍👤
  for (var i = 0; i < squadre.length; i++) {
    const {nome, falli} = squadre[i]
    // pusho dentro l'array vuoto solo i nomi e i falli🐱‍👤
    arrayCharles.push(nome, falli);
    console.log("Queste sono le statistiche relative ai falli subiti:", nome, "ha subito", falli, "falli");
  }
})

// FUNZIONI
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

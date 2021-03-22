// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// Creo un array di bibciclette con nome e peso🐱‍👤
$(document).ready(function(){
  const biciclette = [
    {
      nome: "Velocipide Morbidelli",
      peso: 0.5,
    },
    {
      nome: "bIkea",
      peso: 0.8,
    },
    {
      nome: "SHEmano",
      peso: 0.3,
    }
  ];

  // creo una variabile per la bici più leggera e la assegno alla prima dell'array🐱‍👤
  let biciLeggerina = biciclette[0];

  // in un ciclo for dichiaro di voler confrontare il peso della prima bici con le altre dell'array🐱‍👤
  for (let i = 0; i < biciclette.length; i++) {
    // se il peso della bicicletta scorsa dal ciclo sarà minore del peso della bici salvata nella variabile🐱‍👤
    if (biciclette[i].peso < biciLeggerina.peso) {
      // allora la variabile si sostituisce🐱‍👤
      biciLeggerina = biciclette[i];
      console.log(biciLeggerina);
    }
  }

  // con la destrutturazione posso salvarmi il nome e il peso e stamparli a schermo🐱‍👤
  const {nome, peso} = biciLeggerina;

  console.log("La bici più leggera è:", nome, "e pesa:", peso);
});

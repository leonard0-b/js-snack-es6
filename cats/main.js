// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

// creo un array di gatti🐱‍👤
const cats = [
  {
    nome: "Leone I",
    colore: "nero",
    eta: 4,
    sesso: "M"
  },
  {
    nome: "Margaret Thatcher",
    colore: "grigio",
    eta: 12,
    sesso: "F"
  },
  {
    nome: "Marie Curie",
    colore: "verde",
    eta: 1,
    sesso: "F"
  },
  {
    nome: "Palla di Neve III",
    colore: "nero",
    eta: 6,
    sesso: "F"
  },
  {
    nome: "El Tigre",
    colore: "rosso",
    eta: 16,
    sesso: "M"
  }
];

console.log("Questi sono tutti i gattini: ", cats);

// tramite il for each mi stampo a schermo il nome e il colore dei gatti
// utilizzo `` come richiesto da js es6🐱‍👤
cats.forEach((gatto) => {
  console.log(`${gatto.nome} è ${gatto.colore}`);
});

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

// tramite filter divido i gatti in due array maschi e femmine🐱‍👤
const maschi = cats.filter((gatto) => gatto.sesso == "M");

const femmine = cats.filter((gatto) => gatto.sesso == "F");

console.log("Gattini: ", maschi, "Gattine: ", femmine);

// dichiaro un array per l'opacity vuoto, così da pusharci dentro la nuova proprietà🐱‍👤
const opacityF = [];

// scorro l'array femmine con un foreach, se l'elemento età rispetterà i controlli sull'elemento età🐱‍👤
// assegnerò tramite la proprietà spread un nuovo elemento opacity, con diversi parametri🐱‍👤
// giovane chiaro, adulto più scuro🐱‍👤
femmine.forEach((gatto) => {
  let nuovaProprieta;
  if (gatto.eta < 5) {
    nuovaProprieta = {...gatto, opacity: 0.4};
  } else if (gatto.eta >= 5 && gatto.eta < 10) {
    nuovaProprieta = {...gatto, opacity: 0.6};
  } else {
    nuovaProprieta = {...gatto, opacity: 1};
  }
  opacityF.push(nuovaProprieta);
  //stampo nel DOM🐱‍👤
  $("#gattine").append(`<p class="female">${gatto.nome}<i class="fas fa-ribbon" style="opacity:${nuovaProprieta.opacity}"></i></p>`);
});

// dichiaro un array per l'opacity vuoto, così da pusharci dentro la nuova proprietà🐱‍👤
opacityM = [];

// scorro l'array femmine con un foreach, se l'elemento età rispetterà i controlli sull'elemento età🐱‍👤
// assegnerò tramite la proprietà spread un nuovo elemento opacity, con diversi parametri🐱‍👤
// giovane chiaro, adulto più scuro🐱‍👤
maschi.forEach((gatto) => {
  let nuovaProprieta;
  if (gatto.eta < 5) {
    nuovaProprieta = {...gatto, opacity: 0.4};
  } else if (gatto.eta >= 5 && gatto.eta < 10) {
    nuovaProprieta = {...gatto, opacity: 0.6};
  } else {
    nuovaProprieta = {...gatto, opacity: 1};
  }
  opacityM.push(nuovaProprieta);
  //stampo nel DOM🐱‍👤
  $("#gattini").append(`<p class="male">${gatto.nome}<i class="fas fa-ribbon" style="opacity:${nuovaProprieta.opacity}"></i></p>`);
});

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.

// fondo i due array ordinati prima femmine e poi maschi🐱‍👤
const musettiOrdinati = [...opacityF,...opacityM];

// col map scorro l'array ordinato precedentemente e mi salvo le proprietà nome, colore, opacity🐱‍👤
const musetti = musettiOrdinati.map((meow) => {
  let {nome, colore, opacity} = meow;
  return {nome, colore, opacity};
});

console.log("Musetti elencati per nome, colore e gradazione fiocco, prima gattine poi gattini: ", musetti);

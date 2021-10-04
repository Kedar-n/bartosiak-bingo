let Array = [
  'over the horizon',
  'boots on ground',
  'pomost bałtycko-czarnomorski',
  'gra o sumie zerowej',
  'łańcuchy dostaw',
  'Szojgu',
  'Mackinder',
  'Persowie',
  'ludzie morza',
  'Armia Nowego Wzoru',
  'języczek u wagi',
  'polityka hetmanów',
  'projekcja siły',
  'ocean światowy',
  'eszelon',
  'lewar',
  'piwot',
  'Pax Americana',
  'pętla decyzyjna',
  'drabina eskalacyjna',
  'przesmyk suwalski',
  'wektor',
  'król Salomon',
  'deep penetration',
  'connectivity',
  'Heartland',
  'Anglosasi',
  'brama smoleńska',
  'przepływy strategiczne',
  'doktryna Giedroycia',
  'wykrok',
  'pauza geopolityczna',
  'koncert mocarstw',
  'matryca',
  'wieża',
  'strefa zgniotu',
  'Państwo Środka',
  'wschodnia flanka NATO',
  'equilibirum',
  'wysunięta kasztelania',
  'masy lądowe Eurazji',
  'kolaps',
  'Rimland',
  'Szlak Jedwabny',
  'junior partner',
  'Clausewitz',
  'punkt ciężkości',
  'gra statusowa',
  'sworzeń',
  'Lewant',
  'systemy anty- dostępowe',
  'ekspirowanie',
  'wojna hybrydowa',
  'stronnictwo kontynentalne',
  'obszar rdzeniowy',
  'efektor',
  'długie trwanie',
  'iunctim',
  'domena kosmiczna',
  'agregacja informacji',
  'Boca Chica',
  'baronowie kosmosu',
  'zeloci niepodległości',
  'neoantlantyści',
  'mapy mentalne',
  'dualizm na Łabie',
  'układ sił',
  'pułapka Tukidydesa',
];

let templateArray = [
  `Doktor Jacek Bartosiak wyjaśni `
];

let ArrayB = [];
let pickArray = [];

const spans = [...document.querySelectorAll('.span')];
const tile = [...document.querySelectorAll('.tile')];
const notespan = document.querySelector('#notespan');
const button = document.querySelector('#button');
const refresh = document.querySelector('#refresh');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function put_in() {
  for (let i = 0; i < spans.length; i++) {
    r = getRandom(0, Array.length);
    spans[i].textContent = Array[r];
    ArrayB.push(Array[r]);
    Array.splice(r, 1); //usuwa wykorzystany string z tablicy, aby uniknąć powtórzeń 
  }
}

function back(){
  for(let i=0; i < ArrayB.length; i++) {
  Array.push(ArrayB[i]);
  }
  ArrayB=[];
}

function klik() {
  for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener('click', () => {
      r = getRandom(0, templateArray.length);
      let pick = tile[i].children[0].textContent;
      pickArray.push(pick);
      notespan.textContent = templateArray[r]+pickArray;
    });
  }
}

function generate() {
  button.addEventListener('click', () => {
    console.log('kliknąłeś na przycisk');
    return (notespan.textContent = `Najpilniejsze wyzwanie, jakiemu musi sprostać Rzeczypospolita w obecnym klimacie geopolitycznym to redefinicja pojęcia ${pickArray[0]}. W swoich analizach dla "Strategy&Future" niejednokrotnie wykazywałem znacznie, jakie w architekturze mentalnej tego terminu mają zarówno ${pickArray[1]}, jak i ${pickArray[2]}. Tymczasem aparat responsywny państwa polskiego skupiał się dotąd na reliktach zmurszałych koncepcji takich jak ${pickArray[3]}, prowadząc nieuchronnie do utraty sprawczości w regionie i zdania się na łaskę tego, co w polskiej martyrologii dziejowej zwykliśmy definiować kryptonimem ${pickArray[4]}.`);
    }
  )
}

put_in();
klik();
generate();

refresh.addEventListener('click', ()=> {
  put_in();
  notespan.textContent='';
  pickArray = [];
  back();
});

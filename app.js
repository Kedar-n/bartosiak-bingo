let Array = [
  'over the horizon ',
  'boots on ground ',
  'pomost bałtycko-czarnomorski ',
  'gra o sumie zerowej ',
  'łańcuchy dostaw ',
  'Szojgu ',
  'Mackinder ',
  'Persowie ',
  'ludzie morza ',
  'Armia Nowego Wzoru ',
  'języczek u wagi ',
  'polityka hetmanów ',
  'projekcja siły ',
  'ocean światowy ',
  'eszelon ',
  'lewar ',
  'piwot na Pacyfiku ',
  'Pax Americana ',
  'pętla decyzyjna ',
  'drabina eskalacyjna ',
  'przesmyk suwalski ',
  'wektor ',
  'król Saul ',
  'deep penetration ',
  'connectivity ',
  'Heartland ',
  'Anglosasi ',
  'brama smoleńska ',
  'przepływy strategiczne ',
  'doktryna Giedroycia ',
  'wykrok ',
  'pauza geopolityczna ',
  'koncert mocarstw ',
  'matryca ',
  'wieża ',
  'strefa zgniotu ',
  'Państwo Środka ',
  'wschodnia flanka NATO ',
  'equilibirum ',
  'wysunięta kasztelania ',
  'masy lądowe Eurazji ',
  'kolaps ',
  'Rimland ',
  'Szlak Jedwabny ',
  'junior partner ',
  'Clausewitz ',
  'punkt ciężkości ',
  'gra statusowa ',
  'sworzeń ',
  'Lewant ',
  'systemy anty- dostępowe ',
  'ekspirowanie ',
  'wojna hybrydowa ',
  'stronnictwo kontynentalne ',
  'obszar rdzeniowy ',
  'efektor ',
  'długie trwanie ',
  'iunctim ',
  'domena kosmiczna ',
  'agregacja informacji ',
  'Boca Chica ',
  'baronowie kosmosu ',
  'zeloci niepodległości ',
  'neoantlantyści ',
  'mapy mentalne ',
  'dualizm na Łabie ',
  'układ sił ',
  'pułapka Tukidydesa ',
  'game-changer',
  'soft-power ',
];

let templateArray = [
  `Doktor Jacek Bartosiak wyjaśni: `
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
      if(pickArray.length<5){
        r = getRandom(0, templateArray.length);
        let pick = tile[i].children[0].textContent;
        pickArray.push(pick);
        notespan.textContent = templateArray[r]+pickArray+" ";
      }else{
        notespan.textContent = templateArray[r]+pickArray+". \n"+"Wybrałeś już 5 wartości; teraz naciśnij CONNECTIVITY by otrzymać wypowiedź dr Bartosiaka.\n";
      }
    });
  }
}

function generate() {
  button.addEventListener('click', () => {
    let speech = [
    `Najpilniejsze wyzwanie, jakiemu musi sprostać Rzeczypospolita w obecnym klimacie geopolitycznym to redefinicja pojęcia ${pickArray[0]}. W swoich analizach dla "Strategy&Future" niejednokrotnie wykazywałem znacznie, jakie w architekturze symbolicznej tego terminu mają zarówno ${pickArray[1]}, jak i ${pickArray[2]}. Tymczasem aparat responsywny państwa polskiego skupiał się dotąd na reliktach zmurszałych koncepcji takich jak ${pickArray[3]}, prowadząc nieuchronnie do utraty sprawczości w regionie i zdania się na łaskę tego, co w polskiej martyrologii dziejowej zwykliśmy definiować kryptonimem ${pickArray[4]}.`,
    `Wystarczy spojrzeć na mapę, aby pojąć dwa czynniki decydujące w walce o świątową hegemonię; są nimi dzisiaj ${pickArray[0]} oraz ${pickArray[1]}. Zdynamizowanie tarć wśród powyższych, nieuchronnie zaprowadzi Rzeczypospolitą do konieczności powiedzenia "sprawdzam" wobec naszych sojuszników, co z kolei pchnie elitę Zachodu do kaskadowej erozji elementów ładu światowego, takich jak ${pickArray[2]}. Będziemy zatem świadkami eskalacji nowych zagrożeń, o których dobitnie świadczą ${pickArray[3]}, a w jeszcze większym stopniu ${pickArray[4]}`,
    `Żyjemy w ciekawych czasach, choć cokolwiek niebezpiecznych. Z jednej strony ${pickArray[0]} to poważne wyzwanie dla Rzeczypospolitej, które prowadzi do sytuacji bezalternatywnej: albo ${pickArray[1]}, albo ${pickArray[2]}. W tej sytuacji lepiej rozumiemy dylematy Becka i polskiej polityki zagranicznej w 39r., która zogniskowała się wokół determinant takich jak ${pickArray[3]}. Co z tego wynika dla naszej teraźniejszości? Ujmując rzecz najdobitniej, a zarazem bez cienia przesady, odpowiem krótko: ${pickArray[4]}.`,
    `Jaką drogą powinna podążyć Rzeczypospolita Anno Domini 2021? Wobec zdynamizowania tarć geostrategicznych w regionie, dotychczasowe elementy gwarantujące nasze bezpieczeństwo, a więc ${pickArray[0]} oraz ${pickArray[1]}, zdają się definitywnie tracić na znaczeniu. W tej sytuacji ${pickArray[2]} to zupełne novum dla świata Zachodu, a jedyną skuteczną reakcją na utratę wpływów demokracji liberalnej może być sięgniecie do rezerwuaru praktyk semi-autorytarnych, które najlepiej uosabiają ${pickArray[3]}, a w wariancie nuklearnym również ${pickArray[4]}.`,
    `Odbyłem niedawno konferencję z ludźmi z najwyższego szczebla decyzyjnego Pentagonu. Oni mają pełną świadomość, co to jest ${pickArray[0]} i ja im naprawdę nie muszę tego tłumaczyć. Za to oni pytają mnie: dlaczego w Polsce nie ma dyskusji na tematy, takie jak ${pickArray[1]} czy ${pickArray[2]}? I przyjdzie niedługo moment, że będziemy musieli usiąść z nimi do stolika i renegocjować naszą pozycję w regionie, którą dziś wyznacza konktetne value np. ${pickArray[3]}. Jeśli my teraz tego nie nadgonimy, pogrążeni w jałowym sporze o definicję ${pickArray[4]}, to możemy mieć zaraz powtórkę z września 39. `
  ];
    r=getRandom(0,speech.length)
    return (notespan.textContent = speech[r]);
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

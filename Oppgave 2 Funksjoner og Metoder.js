/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function sjekkTall(tall) {
  if (tall % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}
// Eksempler på bruk av funksjonen
console.log(sjekkTall(4)); // Skal returnere "Partall"
console.log(sjekkTall(7)); // Skal returnere "Oddetall"

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
formaterString = (str) => {
  return str.toUpperCase() + "!";
};

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
hilsPåTid = (navn, time) => {
  if (time < 0 || time > 23) {
    return "Ugyldig tid";
  } else if (time >= 0 && time <= 5) {
    return "God natt " + navn;
  } else if (time >= 6 && time <= 11) {
    return "God morgen " + navn;
  } else if (time >= 12 && time <= 17) {
    return "God dag " + navn;
  } else {
    return "God kveld " + navn;
  }
};

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
function fjernFørsteOgSiste(arr) {
  if (arr.length <= 2) {
    return [];
  }
  return arr.slice(1, -1);
}

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
function oppdaterString(str) {
  return str.trim().replace("vanskelig", "gøy");
}

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
// Steg 1
items.shift(); // Fjerner "Bok"
// Steg 2
const index = items.indexOf("Viskelær"); // Sjekker om "Viskelær" finnes i arrayen

if (index !== -1) {
  items[index] = "Linjal"; // Erstatter "Viskelær" med "Linjal"
}
// Steg 3
items.splice(items.indexOf("Penn"), 1, "Markeringspenn");
items.splice(items.indexOf("Notatbok"), 1);
// Steg 4
const kombinertString = items.join(" | ");
console.log(kombinertString); // Kombinerer elementene til en string
// Ekstra utfordring
const ekstraUtfordring = items.filter((item) => item.includes("e"));
console.log(ekstraUtfordring);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
function oppdaterArray(arr, str) {
  const index = arr.indexOf(str);
  if (index !== -1) {
    arr.splice(index, 1); // Fjerner strengen fra arrayet
  } else {
    arr.push(str); // Legger til strengen på slutten av arrayet
  }
  return arr;
}

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
function oppdaterParameter(param) {
  if (typeof param === "string") {
    return `😎${param}😎`;
  } else if (typeof param === "number") {
    return `😎${param * 2}😎`;
  } else if (typeof param === "boolean") {
    return param ? "😎Ja😎" : "😎Slapp av😎";
  } else {
    return "😎Kun primitive verdier😎";
  }
}

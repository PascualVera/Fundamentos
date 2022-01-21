//Horoscopo
function horoscopo(fecha: Date): string {
  let zodiac = "";
  if (
    (fecha.getMonth() == 2 && fecha.getDate() > 21) ||
    (fecha.getMonth() == 3 && fecha.getDate() <= 20)
  ) {
    zodiac = "Aries";
  } else if (
    (fecha.getMonth() == 3 && fecha.getDate() > 21) ||
    (fecha.getMonth() == 4 && fecha.getDate() <= 21)
  ) {
    zodiac = "Tauro";
  } else if (
    (fecha.getMonth() == 4 && fecha.getDate() >= 22) ||
    (fecha.getMonth() == 5 && fecha.getDate() <= 21)
  ) {
    zodiac = "Geminis";
  } else if (
    (fecha.getMonth() == 5 && fecha.getDate() >= 22) ||
    (fecha.getMonth() == 6 && fecha.getDate() <= 22)
  ) {
    zodiac = "Cancer";
  } else if (
    (fecha.getMonth() == 6 && fecha.getDate() >= 23) ||
    (fecha.getMonth() == 7 && fecha.getDate() <= 22)
  ) {
    zodiac = "Leo";
  } else if (
    (fecha.getMonth() == 7 && fecha.getDate() >= 23) ||
    (fecha.getMonth() == 8 && fecha.getDate() <= 22)
  ) {
    zodiac = "Virgo";
  } else if (
    (fecha.getMonth() == 8 && fecha.getDate() >= 23) ||
    (fecha.getMonth() == 9 && fecha.getDate() <= 22)
  ) {
    zodiac = "Libra";
  } else if (
    (fecha.getMonth() == 9 && fecha.getDate() >= 23) ||
    (fecha.getMonth() == 10 && fecha.getDate() <= 22)
  ) {
    zodiac = "Escorpio";
  } else if (
    (fecha.getMonth() == 10 && fecha.getDate() >= 23) ||
    (fecha.getMonth() == 11 && fecha.getDate() <= 21)
  ) {
    zodiac = "Sagitario";
  } else if (
    (fecha.getMonth() == 11 && fecha.getDate() >= 22) ||
    (fecha.getMonth() == 0 && fecha.getDate() <= 20)
  ) {
    zodiac = "Capricornio";
  } else if (
    (fecha.getMonth() == 0 && fecha.getDate() >= 21) ||
    (fecha.getMonth() == 1 && fecha.getDate() <= 18)
  ) {
    zodiac = "Acuario";
  } else if (
    (fecha.getMonth() == 1 && fecha.getDate() >= 19) ||
    (fecha.getMonth() == 2 && fecha.getDate() <= 20)
  ) {
    zodiac = "Piscis";
  }
  return zodiac;
}
let date: Date;
date = new Date(1994, 11, 14);
console.log(horoscopo(date));
//Continente
let continente = (pais: string): void => {
  if (pais == "España" || pais == "Italia" || pais == "Francia") {
    console.log("Europa");
  } else if (pais == "Kenia" || pais == "Egipto" || pais == "Wakanda") {
    console.log("Africa");
  } else if (pais == "China" || pais == "Corea" || pais == "Japon") {
    console.log("Asia");
  } else if (pais == "Bolivia" || pais == "Mexico" || pais == "Argentina") {
    console.log("America");
  }
};
// Par o Impar
export function parImpar(n: number): void {
  if (n % 2 == 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}

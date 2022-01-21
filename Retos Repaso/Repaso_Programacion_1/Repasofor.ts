//Arcoiris
let arcoirisCheck = (arrColors: string[]): void => {
  let arcoiris = [
    "Rojo",
    "Naranja",
    "Amarillo",
    "Verde",
    "Añil",
    "Azul",
    "Violeta",
  ];

  for (const color of arrColors) {
    if (arcoiris.includes(color)) {
      console.log(color);
    }
  }
};
//Impares
let impares = (n): void => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
//Revert Array
let revertArr = (arr): number[] => {
  let revert = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revert.push(arr[i]);
  }
  return revert;
};
//Suma caracteres
export function sumaChar(arr: string[]): number {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i].length;
  }
  return suma;
}

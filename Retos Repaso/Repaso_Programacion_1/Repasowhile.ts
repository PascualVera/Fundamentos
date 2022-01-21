//Comprobar nombre
let nameCheck = (arr: string[]): Boolean => {
  let i = 0;
  let bool = true;
  while (i < arr.length) {
    if (arr[i][0] == "M") {
      i++;
    } else {
      bool = false;
      i = arr.length;
    }
  }
  return bool;
};
//Par Exists
let parExist = (arr: number[]): Boolean => {
  let bool: Boolean;
  bool = false;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 == 0) {
      bool = true;
      i = arr.length;
    } else {
      i++;
    }
  }
  return bool;
};

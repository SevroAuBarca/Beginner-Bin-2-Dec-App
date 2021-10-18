import { valuesBinaries } from "./variables.js";

export const conversion = (arrBinarie) => {
  let sumBinarie = 0;
  for (let i = 0; i < arrBinarie.toString().length; i++) {
    if (arrBinarie.toString()[i] === "1") {
      sumBinarie += valuesBinaries[i];
    }
  }
  return sumBinarie;
};

export const verificar = (binario) => {
  const ver = binario.split("");
  let verifica = ver.filter((x) => x > 1);
  return verifica[0] > 1 ? false : true;
};

import { variables } from "./variables.js";
import { conversion, verificar } from "./methods.js";

const { input, convertir, texto, label } = variables;

convertir.addEventListener("submit", (e) => {
  e.preventDefault();
  let bin = input.value.toString();
  let arr = [0, 0, 0, 0, 0, 0, 0, 0];
  let res = 0;
  if (verificar(bin)) {
    if (bin.length < 8) {
      let ln = arr.length - bin.length;
      arr.length = ln;
      const arrTrunc = arr.join("").concat(bin);
      res = conversion(arrTrunc);
      texto.innerHTML = res;
    } else if (bin.length === 8) {
      res = conversion(bin);
      texto.innerHTML = res;
    } else {
      label.innerHTML = "Dato mayor a 8 digitos";
    }
  } else {
    label.innerHTML = "Error, ingresa un numero entre 0 y 1";
  }
});

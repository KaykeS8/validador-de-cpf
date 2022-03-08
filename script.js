import ValidationCpf from "./js/validarCpf.js";



const cpf = document.querySelector("#cpf")
const validarCpf  = new ValidationCpf(cpf)


validarCpf.initAddEvent()

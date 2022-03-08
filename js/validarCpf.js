export default class ValidationCpf {
    constructor(element) {
        this.element = element
    }

    clean(cpf) {
        return cpf.replace(/\D/g, '')
    }

    buildCpf(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    formatCpf(cpf) {
        const cleanCpf = this.clean(cpf)
        return this.buildCpf(cleanCpf)
    }

    validate(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0] === cpf)
    }

    validateChange(cpfElement) {
        if(this.validate(cpfElement.value)) {
            cpfElement.value = this.formatCpf(cpfElement.value)
            cpfElement.classList.remove("erro")
            cpfElement.classList.toggle("valid")
            cpfElement.nextElementSibling.classList.remove('active')
        } else {
            cpfElement.classList.add('erro')
            cpfElement.classList.remove("valid")
            cpfElement.nextElementSibling.classList.add("active")
        }
    }

    addErrSpan() {
        const errElement = document.createElement("span")
        errElement.classList.add("err-text")
        errElement.innerText = 'CPF invalido'
        this.element.parentElement.insertBefore(errElement, this.element.nextElementSibling)
    }

    addEvent() {
        this.element.addEventListener('change', () => {
            this.validateChange(this.element)
        })
    }

    initAddEvent() {
        this.addEvent()
        this.addErrSpan()
        return this
    }
}

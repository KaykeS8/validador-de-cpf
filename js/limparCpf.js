const cpfsLista = document.querySelectorAll('.cpf li');


function startFormating() {

    const elementsInnerText = ([...elements]) => {
        return elements.map(element => element.innerText)
    }

    const cleanCpf = (cpf) => {
        return cpf.replace(/\D/g, '')
    }


    const buildCpf = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    const formatarCpf = (cpfs) => cpfs.map(cleanCpf).map(buildCpf)

    const substituirCpfs = (cpfsElements) => {
        const cpfs = elementsInnerText(cpfsElements)
        const cpfsFormatados = formatarCpf(cpfs)

        cpfsElements.forEach((element, index) => {
            element.innerText = cpfsFormatados[index]
        })
    }
    substituirCpfs(cpfsLista)

}    

startFormating();
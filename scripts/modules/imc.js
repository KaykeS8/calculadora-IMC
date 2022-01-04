export default function initCalcImc() {
    alert('INFORMAÇÕES IMPORTANTES: Ao digitar seu peso utilize a virgula, exemplo(1,80).')

    const calcular = document.querySelector('[data-calc="calcular"]')

    function imc() {
        const nome = document.querySelector('[data-calc="nome"]').value
        const altura = document.querySelector('[data-calc="altura"]').value
        const peso = document.querySelector('[data-calc="peso"]').value
        const resultado = document.querySelector('[data-calc="resultado"]')

        if (nome !== '' && altura !== '' && peso !== '') {
            const valorImc = (peso / (altura * altura)).toFixed(1)
            let situacaoImc = ''

            if (valorImc < 19) {
                situacaoImc = 'Abaixo do peso'
            } else if (valorImc <= 19 || valorImc < 25) {
                situacaoImc = 'Peso normal'
            } else if (valorImc <= 25 || valorImc < 30) {
                situacaoImc = 'Sobrepeso'
            } else if (valorImc <= 30 || valorImc < 40) {
                situacaoImc = 'Obesidade do tipo 1, tome cuidado com a saude'
            } else if (valorImc >= 40) {
                situacaoImc = 'Obesidade mórbida, procure um medico e tome cuidado com a saúde.'
            }

            resultado.innerHTML = `<p>${nome} seu imc é igual a ${valorImc}, sua classificação é ${situacaoImc}</p>`

        } else {
            resultado.innerHTML = '<p>Ocorreu um erro!! digite informações validas</p>'
            resultado.style = 'color:red; background: white;'
        }
    }
    calcular.addEventListener('click', imc)

}
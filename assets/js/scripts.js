function qualquer(num1, num2) {
  
    let verificacao_igualdade = (num1 === num2) ? str1= "são iguais" : str1="são diferentes";
    let soma = num1 + num2
    let verificacao_maior_que_dez = (num1+num2 > 10) ? verif3 = "maior que 10" : verif3 = "menor que 10";
    let verificacao_menor_que_vinte = (num1+num2 < 20) ? verif3 = "menor que 20" : verif3 = "maior que 20";
  
  return `Os números ${num1} e ${num2} ${verificacao_igualdade}. A soma é ${soma}, que é ${verificacao_maior_que_dez} e ${verificacao_menor_que_vinte}.`
  
}



const ouvir_botao = document.getElementById('botao').addEventListener('click', function (num1, num2) {

  const input_um = document.getElementById('numero_um')
  const inputUm = input_um.value

  const input_dois = document.getElementById('numero_dois')
  const inputDois = input_dois.value

  const resultado = qualquer(+inputUm, +inputDois)
  const mostra_resultado = document.getElementById('resultado')
  mostra_resultado.innerText = resultado

  
})


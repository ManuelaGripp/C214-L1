function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

const calcularTroco = (valor, pagamento) => {

    if(pagamento < valor){
        return 'Não suficiente'
    }

    return pagamento - valor

}

module.exports = { calcularIMC, calcularTroco }; // Exporta a função calcularIMC

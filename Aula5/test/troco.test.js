const { expect } = require('chai');
const { calcularTroco  } = require('../src/features');

describe('Calcula o troco', () => {

  it('should return not enough', () => {
    const valor = 10
    const pagamento = 5

    expect(calcularTroco(valor, pagamento)).to.equal('Não suficiente');
  });
  it('should return 5', () => {
    const valor = 5
    const pagamento = 10

    expect(calcularTroco(valor, pagamento)).to.equal(5);
  });
});
/*
     Programa para verificar qual plano de saúde uma pessoa deve pagar com base em sua idade. Com uma regra: todos possuem um adicional de 100 reais, além do valor a ser pago pelo convênio.

     by Guilherme Zalla
 */
(function() {
    const getPlano = idade => {
        if (idade < 10) {
            return `Valor a ser pago no plano de saúde: R$ ${(100 + 80).toFixed(2).toString().replace('.', ',')}`;
        } else if (idade => 10 && idade <= 30) {
            return `Valor a ser pago no plano de saúde: R$ ${(100 + 50).toFixed(2).toString().replace('.', ',')}`;
        } else if (idade > 30 && idade <= 60) {
            return `Valor a ser pago no plano de saúde: R$ ${(100 + 95).toFixed(2).toString().replace('.', ',')}`;
        } else {
            return `Valor a ser pago no plano de saúde: R$ ${(100 + 130).toFixed(2).toString().replace('.', ',')}`;
        }
    }
    console.log(getPlano(31));
    console.log(getPlano(21));
    console.log(getPlano(8));
    console.log(getPlano(90));
})()
function financiamentoFinanceiro(entrada,taxaJuros,tempoAplicado){
    let juroSimples=entrada * (taxaJuros*tempoAplicado/100+1)
    let juroComposto=entrada * ((1+taxaJuros/100)**tempoAplicado)
    console.log("Investindo o Valor de R$ " + entrada.toFixed(2) + " com juros simples de " + taxaJuros + " % ao mês teremos o seguinte valor R$ " + juroSimples.toFixed(2))
    console.log("Investindo o Valor de R$ " + entrada.toFixed(2) + " com juros composto de " + taxaJuros + " % ao mês teremos o seguinte valor R$ " + juroComposto.toFixed(2))      
}

financiamentoFinanceiro(1000,10,12)
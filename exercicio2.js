let ValorCompra = 200;
let parcelas = 1;
let desconto = 10;
let ValorTotal;
let ValorTotalJuros;

if(parcelas === 1){
    ValorTotal = (ValorCompra - (ValorCompra * (desconto/100))).toFixed(2);

    console.log("O valor a pagar é : R$" + ValorTotal + ", pois à VISTA voçê ganhou 10% de  desconto.");
}
else if(parcelas >= 2 && parcelas <= 6){
    ValorTotal = (ValorCompra / parcelas).toFixed(2);

    console.log(`Voce pagará ${parcelas} parcelas no valor de: R$${ValorTotal} (sem juros)`);
}
else if(parcelas >= 7 && parcelas <= 12){
    
    ValorTotalJuros = (ValorCompra*(1 + 1/100) ** parcelas).toFixed(2);
    ValorTotal = (ValorTotalJuros / parcelas).toFixed(2);

    console.log(`Voce pagará ${parcelas} parcelas no valor de: R$${ValorTotal} (com juros) totalizando: ${ValorTotalJuros}`);
}
else{
    console.log(`numero  de parcelas invalido`);
}

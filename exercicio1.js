
let ValorCompra = 200;
let parcelas = 1;
let desconto = 10;
let ValorTotal;

if(parcelas === 1){
    ValorTotal = (ValorCompra - (ValorCompra * (desconto/100))).toFixed(2);

    console.log("O valor a pagar é : R$" + ValorTotal + ", pois à VISTA voçê ganhou 10% de  desconto.");
}
else{
    ValorTotal = (ValorCompra / parcelas).toFixed(2);

    console.log(`Voce pagará ${parcelas} parcelas no valor de: R$${ValorTotal} (sem juros)`);
}


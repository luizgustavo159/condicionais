
let ValorCompra = 200;
let parcelas = 4;
let desconto = 10;
let ValorTotal;

if(parcelas === 1){
    ValorTotal = ValorCompra * (desconto/100);

    console.log("O valor a pagar é : $" + ValorTotal + ", pois à VISTA voçê ganhou 10% de  desconto.");
}
else{
    ValorTotal = ValorCompra / parcelas;

    console.log("O valor da parcela é : $" + ValorTotal);
}


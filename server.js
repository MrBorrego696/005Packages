/*Importando el paquete que convierte de dolares a pesos mexicanos*/
var usd2mxn = require('./usd2mxn');
var usdollars = 23.98;
var pesosmxn = usd2mxn(usdollars).toFixed(2);
/*console.log(`> ${usdollars} usd -> ${Math.round(pesosmxn)} mxn`);*/
console.log(`> ${usdollars} usd -> ${pesosmxn} mxn`);

/*Convirtiendo de mxn a dolares*/
var currencyconverter = require("./currencyconverter.js");
var pesosmxn = 1499;
var usdollars = currencyconverter.mxn2usd(pesosmxn).toFixed(2);
console.log(`> ${pesosmxn} mxn -> ${usdollars} usd`);
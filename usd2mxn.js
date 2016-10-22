/*Exportacion por modulo*/
/*Modulo que convierte de dolares a pesos mexicanos*/
/*2 formas de exportar
1. Por Modulo: module.exports = <codigo a exportar>
2. Por Objeto: exports.<var/identificador> = <codigo a exportar>
    el archivo de codigo js funciona como un objeto al cual se le van
    agregando entidades:
    exports.<var/identificador1> = <codigo a exportar1>
    exports.<var/identificador2> = <codigo a exportar2>
    exports.<var/identificador3> = <codigo a exportar3>*/
module.exports = function(usd, xrate){
    if(!xrate){
        xrate = 19.26;
    }
    var mxn = usd * xrate;
    return mxn;
};

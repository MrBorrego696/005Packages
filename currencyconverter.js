var internarxr = 19.26;
/*exportar por objeto*/
exports.mxn2usd = function(mxn,xrate){
    if(!xrate){
        xrate = internarxr
    }
    var usdollars = mxn/xrate;
    return usdollars;
};
function pipe(n,...arguments) {
    for (let i = 0; i < arguments.length; i++){
        let argumentFun = arguments[i](n);
        n = argumentFun;
    }
    return n;
}
function addOne(x) {
    return x+1;
}
pipe(5, addOne);
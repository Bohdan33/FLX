const num = -456;
function reverseNumber(x) {
    const reverse = x.toString().split('').reverse().join('');
    return Math.sign(x) * parseInt(reverse);
}
reverseNumber(num);
let a = prompt('Enter a', '5');
let b = prompt('Enter b', '5');
let c = prompt('Enter c', '5');


if (a && b && c !== 'NaN'){
    math(a, b, c)
}else {
    alert('Invalid input data')
}

function math(a, b, c) {
    let x = b*b - 4 * a * c;

    if( x < 0){
        alert('no solution')
    }else if(x > 0){
        let x1 = (-b + Math.sqrt(x))/(2*a);
        let x2 = (-b - Math.sqrt(x))/(2*a);
        alert('x1 =' + x1.toFixed(2) + 'and x2= ' + +x2.toFixed(2));
    }else if(x === 0){
        let x = -b / (2*a);
        alert('x=' + x);
    }
}
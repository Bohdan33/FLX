let money = parseFloat(prompt('Please enter amount of money'));
let discount = parseFloat(prompt('Please enter the discount'));

if(money >= 0 && money <= 9999999 && discount >=0 && discount <= 99){
    let priceWithDiscount = money - money *discount /100;
    let saved = money - priceWithDiscount;

    alert('Prise without discount: ' + money.toFixed(2) +
        '\nDiscount: ' + discount.toFixed(2) +
        '% \nPrice with discount: ' + priceWithDiscount.toFixed(2) + '\nSaved: ' + saved.toFixed(2))
}else {
    alert('Invalid input data');
}
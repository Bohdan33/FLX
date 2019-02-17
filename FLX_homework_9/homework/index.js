//task 1
function findTypes(argument) {
    return typeof argument;
}
//task 2
function executeforEach(array, fnc) {
    for (let i=0; i<array.length; i++) {
        fnc(array[i]);
    }
}
//task3
function mapArray(array, fnc) {
    let newArray = [];
    executeforEach(array, function (el) {
        newArray.push(fnc(el));
    });
    return newArray;
}
//task 4
function filterArray(array, fnc) {
    let newArray = [];
    executeforEach(array, function (el){
        if (fnc(el)){
            newArray.push(el)
        }
    }
    );
    return newArray;
}
//task 5 and 6
const data =[
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
function getAmountOfAdultPeople(date) {
    const people = filterArray(date, function (el) {
        return el.age > 18;
    });
    return people.length;
}
function getGreenAdultBananaLovers(date) {
    let LovePeople = [];
    filterArray(date, function (el) {
        if (el.age> 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'){
            LovePeople.push(el.name);
        }
    });
    return LovePeople;
}
//task 7
function keys(object) {
    let newArray= [];
    for (let key in object){
        if (object.hasOwnProperty(key)) {
            newArray.push(key);
        }
    }
    return newArray;
}
//task 8
function values(object) {
    let newArray= [];
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newArray.push(object[key]);
        }
    }
    return newArray;
}
//task 9
function showFormattedDate(date) {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return 'Date:' + date.getDate() + ' of ' + monthNames[date.getMonth()]+
        ', '+ date.getFullYear();
}
//task 10
function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;
}
//task 11
function isEvenMonth(date) {
    let month = date.getMonth()+1;
    return month %2 === 0;
}
//call functions 1-4
findTypes('number');
executeforEach([2,5,8], function (el) {
   console.log(el)
});
mapArray([2,5,8], function (el) {
    return el+3;
});
filterArray([2,5,8], function (el) {
    return el > 3;
});
//call others functions
getAmountOfAdultPeople(data);
getGreenAdultBananaLovers(data);
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
values({keyOne: 1, keyTwo: 2, keyThree: 3});
showFormattedDate(new Date('2019-01-27T01:10:00'));
isEvenYear(new Date('2019-01-27T01:10:00'));
isEvenMonth(new Date('2019-02-27T01:10:00'));
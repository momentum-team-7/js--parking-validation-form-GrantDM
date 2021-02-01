 console.log('Add validation!');
const form = document.querySelector('#parking-form')

let formIsValid

// let fullprice

// let cost

// let price = 5

window.addEventListener('submit', event => {
    event.preventDefault()
})

form.addEventListener('submit', validate)

function validate(event) {
    // removeValidMessage()
    formIsValid = true
    confirmValidForm()
}

function confirmValidForm() {
    // if (formIsValid && form.checkValidity()) {
        if (true) {
        // const total = calculateCost() this is for Amy's example
        const fullprice = price()
        const validMsgEl = document.querySelector('#total')
        // creating variable to hold the selector for id total
        validMsgEl.innerText = `your total cost is ${fullprice}`
        // creating a variable to hold the selector for price variable

    }
}   

// function totalExpense() {
//     const totaldays = document.querySelector('#days').value
//     // const totaldays = document.querySelector('#days')
//     // let fullprice = totaldays * price()

//     return `your total cost is ${fullprice}`
// }

// const testDate = new Date(document.querySelector('#start-date').value)

function price() {
    let startDate = document.querySelector('#start-date').value // selecting start date user input
    console.log('testing start date array ', startDate)
    let numDays = parseInt(document.querySelector('#days').value, 10) //grabing the number of days user input
    console.log(numDays)
    let days = [] // establishing an empty array
    let day = new Date(startDate) // variable to hold start date to iterate on

    for (let index = 1; index <= numDays; index++) { // this will allow us to continue iterating upon 
    // the array for the right amount of days
        day = new Date(day.setDate(day.getDate() + 1))
        days.push(day.getDay()) // pushing the day variable into the days array
    }
    // if we wanted to do the map as a loop 
    return days
        .map(day => (day > 0 && day < 6 ? 5:7))
        .reduce((fullprice, cost) => {
            return (fullprice += cost)
            }, 0)
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}


//Amy's way
// const calculateCost = () => {
//     let numDays = parseInt(document.querySelector('#days').value, 10)
//     console.log(numDays)
//     let days = [] //creating an empty array
//     let day = new Date()

//     for (let index = 1; index <= numDays; index++) {
//         day = new Date(day.setDate(day.getDate() + 1))
//         days.push(day.getDay())
//     }

//     return days
//         .map(day => (day > 0 && day < 6 ? 5:7)) //numbers 1-5 = 5 and numbers 0 and 6 = 7
//         .reduce((total, price) => {
//             return (total += price)
//         }, 0)
// }

//Dawud's method
// function getTotal(daysArray) {
//     let totalCost = 0;

//     for (let i = 0; i < daysArray.length; i++) {
//         if (daysArray[i] === 0 || daysArray[i] === 6) {
//             totalCost += 7;
//         } else {
//             totalCost += 5;
//         }
//     }
    
//     // console.log(totalCost);

//     return totalCost;

// }
//Dawud's method extended
// function countDays(startingDate, numOfDays) {
    
//     let dayArray = [];
//     for (let i = 0; i < numOfDays; i++) {
//         dayArray.push(startingDate + i);
//     }


//     let finalDayArray = dayArray.map(x => x % 7);
//     return finalDayArray;

// }
//Dawud's method extended
// function getDayOfWeek(startingDate) {

//     // Convert to correct date format
//     let actualDate = startingDate.replace(/-/g, '\/');
//     let d = new Date(actualDate).getDay();

//     return d;
// }


// let actualDate = startingDate.value.replace(/-/g, '\/')

// function pricetag(val) {
//     document.getElementById('total').price+=val
// }


// function dis(val) {
//     document.getElementById().value+=val
// }


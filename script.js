console.log('Add validation!');
const form = document.querySelector('#parking-form')

let formIsValid

let fullprice

let cost

let price = 5

window.addEventListener('submit', event => {
    event.preventDefault()
})

form.addEventListener('click', validate)

function validate(event) {
    // removeValidMessage()
    formIsValid = true
    confirmValidForm()
}

function confirmValidForm() {
    // if (formIsValid && form.checkValidity()) {
        if (true) {
        const validMsgEl = document.querySelector('#total')
        // creating variable to hold the selector for id total
        validMsgEl.innerText = totalExpense()
        // creating a variable to hold the selector for price variable 
    }
}   

function totalExpense() {
    const totaldays = document.querySelector('#days').value
    // const totaldays = document.querySelector('#days')
    let fullprice = totaldays * price
    return `your total cost is ${fullprice}`
}

// const testDate = new Date(document.querySelector('#start-date').value)

// function price() {
//     let startDate = document.querySelector('#start-date').value
//     selecting start-date input value
//     
//     weekDayPrice = 5
//     weekendPrice = 7
// }

// let actualDate = startingDate.value.replace(/-/g, '\/')

// function pricetag(val) {
//     document.getElementById('total').price+=val
// }


// function dis(val) {
//     document.getElementById().value+=val
// }




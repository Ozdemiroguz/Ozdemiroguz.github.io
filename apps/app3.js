document.querySelector('#loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //if (parseInt(amount.value) < 0 || parseInt(interest.value) < 0 || parseInt(years.value) < 0) {
    console.log(amount.value);


    if (amount.value === '' || interest.value === '' || years.value === '') {
        console.log("x");
        errortask("Please Enter  Numbers ! ! !");

    }
    else if (parseInt(amount.value) <= 0 || parseInt(interest.value) < 0 || parseInt(years.value) < 0) {
        errortask("Please Check Your Numbers ! ! !");

    }
    else {
        totalInterest.value = (amount.value * interest.value * years.value) / 100;
        totalPayment.value = parseFloat(totalInterest.value) + parseFloat(amount.value);
        monthlyPayment.value = parseFloat(totalPayment.value) / (12 * parseInt(years.value));
        document.getElementById('results').style.display = "block";
    }

    e.preventDefault();

}

function errortask(error) {
    //create errordiv
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //bootstrap
    errorDiv.className = "alert alert-danger"
    //appedn textnode
    errorDiv.appendChild(document.createTextNode(error));
    //insert div
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000)

}
function clearError() {
    document.querySelector('.alert').remove();
}
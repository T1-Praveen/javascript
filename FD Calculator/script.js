function calculateMaturityAmount(){
    // get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perform the calculation

    const maturityAmount = principle * (principle * interestRate * tenure) / 100;

    // display the result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`
}


// attach the event listener to the calculate button
document.getElementById('calculteBtn').addEventListener("click", calculateMaturityAmount);
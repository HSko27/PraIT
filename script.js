function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function generatePrimes() {
    const numberInput = document.getElementById('numberInput');
    const primeNumbersDiv = document.getElementById('primeNumbers');

    const userInput = parseInt(numberInput.value);

    if (isNaN(userInput)) {
        primeNumbersDiv.innerHTML = 'Zadejte platné číslo.';
        return;
    }

    primeNumbersDiv.innerHTML = 'Prvočísla: ';

    for (let i = 2; i <= userInput; i++) {
        if (isPrime(i)) {
            primeNumbersDiv.innerHTML += i + ' ';
        }
    }
}

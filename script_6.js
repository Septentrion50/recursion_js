const isPrime = (num, div = 3) => {
    if(num === 2) return true;
    if(num < 2 || num % 2 === 0)  return false;
    if(div * div > num) return true; // If divider is greater than the square root of the number we tested all possible combinations.
    if(num % div === 0) return false;
    return isPrime(num, div + 2);
}

const findPrime = (num) => {
    if (isPrime(num)){
        return num;
    } else {
        return findPrime(num -1);
    }
}

console.log(findPrime(7));
console.log(findPrime(4));
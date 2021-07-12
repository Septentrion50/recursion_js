const computePowerOf = (n, p) => {
    let result = n;
    for (let i = 1; i < p; i++){
        result *= n;
    }
    return result;
}

console.log(computePowerOf(6, 2));
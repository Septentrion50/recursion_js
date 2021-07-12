const computePowerOf = (n, p) => {
    try {
        let result = n;
        for (let i = 1; i < p; i++){
            result *= n;
        }
        return result;
    }
    catch(TypeError) {
        return 0
    } 
}

console.log(computePowerOf(6, 2));
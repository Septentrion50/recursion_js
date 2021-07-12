const computePowerOf = (n, p) => {
    try {
        result = n;
        if (p === 0) {
            return 1;
        } else {
            return n * computePowerOf(n, p - 1);
        }
    } catch (TypeError) {
        return 0
    }
}

console.log(computePowerOf(6, 3));
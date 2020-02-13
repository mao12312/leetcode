let numberOfSteps = function (num) {
    let count = 0
    let n = num
    while (n > 0) {
        // NG:n--はnを返した後デクリメントする為
        // n = (n % 2 === 0) ? n / 2 : n--
        // OK
        n = (n % 2 === 0) ? n / 2 : --n
        count++
    }
    return count
};

numberOfSteps(14)
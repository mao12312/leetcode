const subtractProductAndSum = (n) => {
    let nums = String(n).split('').map(function(e){return Number(e)});
    let sum = nums.reduce(function (pre, cur) { return pre + cur });
    let mult  = nums.reduce(function (pre, cur) { return pre * cur });
    return mult - sum
}
subtractProductAndSum(234)
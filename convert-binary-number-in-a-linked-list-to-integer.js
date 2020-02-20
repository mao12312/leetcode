const getDecimalValue = (head) => {
    let res = parseInt(head.join(''), 2);
    console.log(res)
}

const getDecimalValue = head => {
    let result = 0;
    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    console.log(result)
};
getDecimalValue([1, 0, 1])
const numJewelsInStones = (J, S) => {
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        let targetStr = J[i]
        if ((S.match(new RegExp(targetStr, "g")) || []).length) {
            count += (S.match(new RegExp(targetStr, "g")) || []).length
        } else {
            count += 0
        };
    }
    return count;
}
numJewelsInStones("Z", "zzz");
const numJewelsInStones = (J, S) => {
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        let targetStr = J[i]
        count += (S.match(new RegExp(targetStr, "g")) || []).length;
    }
    console.log(count)
}
numJewelsInStones("zZ", "zzz");
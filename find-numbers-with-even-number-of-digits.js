const findNumbers = (nums) => {
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if(String(nums[i]).length % 2 ===0){
            count++
        }
    }
    return count;
}

// const findNumbers = (nums) => {
//     let count = 0;
//     nums.forEach(e => {
//         if(String(e).length % 2 ===0)count++;
//     });
// return count;
// }
findNumbers([555, 901, 482, 1771])
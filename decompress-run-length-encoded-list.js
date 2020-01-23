const decompressRLElist = (nums) => {
    let res = [];
    for (let i = 0; i < nums.length; i += 2) {
        while(nums[i]>0){
            res.push(nums[i+1]);
            nums[i]--;
        }
    }
    return res;
}
decompressRLElist([1, 2, 3, 4])
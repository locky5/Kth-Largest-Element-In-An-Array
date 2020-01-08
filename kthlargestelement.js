var findKthLargest = function(nums, k) {
    //O(NlogN)
    let sorted = nums.sort((a,b) => {
        return b-a
    })

    console.log(sorted)

    return sorted[k - 1]
};

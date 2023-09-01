/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 
var twoSum = function(nums, target) {
    
    for(let i=0; i<nums.length; i++) {
       for(let j=i+1; i<nums.length; j++) {  
         if(nums[i]+ nums[j] === target) {
            return [i,j];
         }
       }
    }
    return null;
};
*/
const  nums = [3,8,7,1,2,10], target = 11;
var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

 let findices = twoSum(nums,target);
console.log("findices:" ,findices);

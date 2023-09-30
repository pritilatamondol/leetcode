/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 
var twoSum = function(nums, target) {
    
    for(let i=0; i<nums.length; i++) {
       for(let j=i+1; j<nums.length; j++) {  
         if(nums[i]+ nums[j] === target) {
            return [i,j];
         }
       }
    }
    return null;
};
*/
function toSum(nums, target) {
    const prevValues ={}
    for(let i=0; i<nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        console.log("neededValue:" + neededValue);
        const index2 = prevValues[neededValue];
        if(index2 != null){
            return [index2,i]
        }else{
            prevValues[currentValue] = i;
        }
    }
}
let indices = toSum([2,7,8,6,9,3], 9);

console.log(indices);

//Using Map and set
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

//连续字数组的最大和
/*
输入一个整形数组，数组里有正数也有负数。数组中一个或
连续的多个正数组成一个子数组。求所有子数组的和的最大值。
要求时间复杂度为O(n);
 */

function findGreatestSumOfSubArray(array){
    if(!array || array.length == 0)
        throw new Error("Invalid input");
    var greatestSum = array[0], sum = array[0], i;
    for(i = 1; i < array.length; i++){
        sum += array[i];
        if(sum > greatestSum)
            greatestSum = sum;
        if(sum <= 0)
            sum = 0;
    }
    return greatestSum;
}
console.log(findGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]));
console.log(findGreatestSumOfSubArray([1,-5]));
console.log(findGreatestSumOfSubArray([-2]));

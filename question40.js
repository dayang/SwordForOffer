//数组中只出现一次的数字
/*
一个整型数组里除了两个数字以外，其它的数字都出现了两次。请写出程序找出这
两个只出现了一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1).
 */

/*
思路：根据一个整型数组里除了一个数字以外，其它的数字都出现了两次，找出该数字的算法
(所有数字异或的结果就是要找的数字);
将数组分成两部分，每个子数组里各有一个数字只出现了一次，再对每个子数组所有数字异或。
关键是如何分成两部分；

第一步：数组中所有数字异或，结果为orResult。则orResult为只出现一次的两个数字
      异或的结果。肯定不为0. orResult二进制中为1的位，表明这两个数字二进制中对应的位
      肯定不同。根据这一点将数组分为两部分。
第二步：求bench = orResult & -orResult. bench是2的n次幂，bench二进制中1的位置与orResult二进制中
      从右往左第一个1的位置相同。 比如 4 & -4 == 4, 6 & -6 == 2;
第三步：根据数组中的数字与bench与运算的结果是否为0分为两组，可以同时求异或。
 */
function findNumbersAppearOnce(data){
    var orResult = 0, i;
    for(i = 0; i < data.length; i++){
        orResult ^= data[i];
    }

    var bench = orResult & -orResult;

    var num1 = 0, num2 = 0;
    for(i = 0; i < data.length; i++){
        if((data[i] & bench) == 0){
            num1 ^= data[i];
        }else{
            num2 ^= data[i];
        }
    }

    return [num1, num2];
}

console.log(findNumbersAppearOnce([2,4,3,6,3,2,5,5]));
console.log(findNumbersAppearOnce([4,6]));
console.log(6 & -6)
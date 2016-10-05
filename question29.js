//数组中出现次数超过一半的数字
/*
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入
一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
超过数组长度的一半，因此输出2
 */
var partition = require('./base').partition;

//方法一：
/*
如果把数组排序，则要找的数字就是中位数，即第 n/2 大的数字。
利用找数组中第k大的数字的算法。时间复杂度O(n)
 */
function moreThanHalfNumRecursive(array){
    if(array.length == 0)
        throw new Error("Invalid input");
    var middle = Math.floor(array.length / 2);
    var start = 0;
    var end = array.length - 1;
    var index = partition(array, start, end);
    while(index != middle){
        if(index > middle){
            end = index - 1;
            index = partition(array, start, end);
        }else{
            start = index + 1;
            index = partition(array, start, end);
        }
    }

    var result = array[index];
    if(!checkMoreThanHalf(array, result))
        throw new Error("no more than half");

    return result;
}

console.log(moreThanHalfNumRecursive([1,2,3,2,2,2,5,4,2]));

//方法二：
/*
思路：如果有办法让数组中所有不相同的数字两两抵消，则最后剩下的就是出现的次数
超过数组长度的一半的数字。

解法：遍历数组时保存两个值，一个数组中的数字，一个次数。遍历时如果下一个数字与
保存的数字相同，此时加1，否则减1,。如果次数为0，则保存下一个数字。这样，
遍历结束时，保存的值就是次数超过一半的值。前提是要有一个数字出现的次数超
过数组长度的一半，所以还要检验一下。
时间复杂度O(n)
*/
function moreThanHalfNum(array){
    if(array.length == 0)
        throw new Error("Invalid input");

    var result = array[0], i, times = 1;
    for(i = 1; i < array.length; i++){
        if(times == 0){
            result = array[i];
            times = 1;
        }else if(array[i] !== result){
            times--;
        }else{
            times++;
        }
    }
    if(!checkMoreThanHalf(array, result))
        throw new Error("No more than half");
    return result;
}

function checkMoreThanHalf(array, num){
    var times = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] === num)
            times++;
    }

    return times > Math.floor(array.length / 2);
}

// console.log(moreThanHalfNum([1,2]));
// console.log(moreThanHalfNum([1,2,3,2,2,2,5,4,2]));
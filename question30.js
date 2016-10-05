//最小的k个数
/*
输入n个整数，找出其中最小的k个数。例如输入4,5,1,6,2,7,3,8这8个数字，
则最小的4个数是1,2,3,4
 */

var partition = require('./base').partition;

//解法一：
/*
会改变输入数组，时间复杂度O(n)
 */
function getLeastNumbers(array, k){
    if(!array || k > array.length || k <= 0)
        return;
    var start = 0;
    var end = array.length - 1;
    var index = partition(array, start, end);
    while(index != k - 1){
        if(index > k - 1){
            end = index - 1;
            index = partition(array, start, end);
        }else{
            start = index + 1;
            index = partition(array, start, end);
        }
    }

    return array.slice(0,index + 1);
}

console.log(getLeastNumbers([4,5,1,6,2,7,3,8], 4));
console.log(getLeastNumbers([4,5,1,6,2,7,3,8], 1));

//解法二
/*
适合处理海量数据，时间复杂度O(nlogk)
 */

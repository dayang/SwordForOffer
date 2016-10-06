//和为s的两个数字 VS 和为s的连续正数序列
/*
题目一：输入一个递增排序的数组和一个数字s，在数组中查找连个数，使得它们的
和正好是s。如果有多对数字的和等于s,输出任意一对即可

思路：头尾两个指针，若和大于s，则尾指针前移，若和小于s，则头指针后移

若不是排好序的，则使用hash表
 */
function findTwoNumberWithSum(array, sum){
    if(!Array.isArray(array) || array.length < 2) return null;
    var head = 0, tail = array.length - 1, curSum;
    while(head < tail){
        curSum = array[head] + array[tail];
        if(curSum < sum){
            head++;
        }else if(curSum > sum){
            tail--;
        }else{
            return [array[head], array[tail]];
        }
    }
    return null;
}

console.log(findTwoNumberWithSum([1,2,4,7,11,15], 15));
console.log(findTwoNumberWithSum([1,2,4,7,11,15], 10));

/*
题目二：
输入一个正数s，打印出所有和为s的连续正数序列(至少含有两个数)。例如输入15，
由于1+2+3+4+5=4+5+6=7+8=15，所以打印出3个连续序列1-5,4-6和7-8.
 */
function findContinuousSequence(sum){

}
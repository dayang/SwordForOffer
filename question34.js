// 丑数
/*
我们把只包含因子2、3和5的数称作丑数(Ugly Number)。求按
从小到大的顺序的第1500个丑数。例如6、8都是丑数，但14不是，因为它
包含因子7.习惯上我们把1当作第一个丑数。
 */

/*
暴力，时间复杂度较高，空间复杂度较小
 */

//方法二：以空间换时间
/*
思路：按顺序生成丑数

用数组保存生成的丑数，已保存的丑数序列中有三个位置，mul2,mul3,mul5。
mul2及其之后的丑数乘以2大于当前最大的丑数，mul3,mul5同理。
则array[mul2]*2, array[mul3]*3, array[mul5]*5三个数中最小的
就是下一个丑数。将该丑数保存到数组中，同时更新三个位置。
 */
function min(a, b, c){
    return Math.min(a, Math.min(b,c));
}

function getUglyNumber(index){
    if(index <= 0){
        return 0;
    }

    var uglyNumbers = [1];
    var nextUglyIndex = 1;

    var mul2 = 0,mul3 = 0, mul5 = 0;
    var minUgly;
    while(nextUglyIndex < index){
        minUgly = min(uglyNumbers[mul2] * 2, uglyNumbers[mul3] * 3, uglyNumbers[mul5] * 5);
        uglyNumbers[nextUglyIndex] = minUgly;

        while(uglyNumbers[mul2] * 2 <= uglyNumbers[nextUglyIndex]){
            mul2++;
        }
        while(uglyNumbers[mul3] * 3 <= uglyNumbers[nextUglyIndex]){
            mul3++;
        }
        while(uglyNumbers[mul5] * 5 <= uglyNumbers[nextUglyIndex]){
            mul5++;
        }

        ++nextUglyIndex;
    }

    return uglyNumbers[index - 1];
}

console.log(getUglyNumber(1));
console.log(getUglyNumber(2));
console.log(getUglyNumber(3));
console.log(getUglyNumber(4));
console.log(getUglyNumber(5));
console.log(getUglyNumber(1500));
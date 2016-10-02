//二进制中1的个数
/*
请实现一个函数，输入一个整数，输出该数二进制表示
中1的个数。例如把9表示成二进制是1001，有2位
是1.因此如果输入9，则函数输出2.
复数怎么办？？？
 */
function countBit(n) {
    if(n == 0)
        return 0;
    return countBit(n & (n-1)) + 1;
}

//非递归
function countBit1(n){
    var res = 0;
    while(n > 0){
        n = n & n-1;
        res ++;
    }
    return res;
}

console.log(countBit(7));
console.log(countBit1(7));
console.log(countBit1(0));
console.log(countBit1(8));
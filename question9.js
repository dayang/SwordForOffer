//斐波那契数列
/*
写一个函数，输入n，求斐波那契(Fibonacci)数列的第n项。
斐波那契数列定义如下：
            0         n=0
f(n) =      1         n=1
       f(n-1)+f(n-2)  n>1

 问题：一只青蛙一次可以跳上1级台阶，也可以跳上2级，
 求该青蛙跳上一个n级台阶总共有多少种跳法。

 更快：
 |-            -|    |-    -| n-1
 | f(n)  f(n-1) |    | 1  1 |
 | f(n-1) f(n-2)| =  | 1  0 |
 |-            -|    |-    -|
 再利用矩阵快速幂
 */
function fibonacci(n){
    var f = [0,1];
    if(n < 2)
        return f[n];
    var f1 = 1, f2 = 0, fn;
    for(var i = 2; i <=n; i++){
        fn = f1 + f2;
        f2 = f1;
        f1 = fn;
    }
    return fn;
}

console.log(fibonacci(10));
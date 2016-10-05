//字符串的排列
/*
输入一个字符串，打印出该字符串字符的所有排列。例如输入字符串abc，
则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab
和cba.
 */

/*
将第一个字符分别与其它字符兑换，递归从第二个字符开始的字符串
递归 + 回溯
 */
function printPermutation(s){
    function permutation(sarray, begin){
        if(begin == sarray.length)
            console.log(sarray.join(''));
        else{
            var temp, i;
            for(i = begin; i < sarray.length; i++){
                temp = sarray[i];
                sarray[i] = sarray[begin];
                sarray[begin] = temp;

                permutation(sarray,begin + 1);

                temp = sarray[i];
                sarray[i] = sarray[begin];
                sarray[begin] = temp;
            }
        }
    }
    permutation(s.split(""),0);
}

printPermutation("abcd");
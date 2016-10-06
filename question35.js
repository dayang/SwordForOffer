//第一个只出现一次的字符
/*
在字符串中找出第一个只出现一次的字符。如输入"abaccdeff"，
则输出'b'
 */

/*
相关题目：
1、从第一个字符串中删除在第二个字符串中出现过的所有字符。
2、删除字符串中所有重复出现的字符。
3、如果两个单词出现的字母相同，并且每个字母出现的次数也相同。则
  这两个单词互为变为此(Anagram)。判断连个单词是否为变位词。

如果需要判断多个字符是不是在某个字符串里出现过或者统计多个字符在某个
字符串中出现的次数，我们可以考虑哈希表
 */

function firstNotRepeatingChar(str){
    if(typeof str !== "string"){
        throw new Error("input should be a string");
    }

    var hash = {},i;
    for(i = 0; i < str.length; i++){
        if(!hash[str[i]]){
            hash[str[i]] = 1;
        }else{
            hash[str[i]] ++;
        }
    }

    for(i = 0; i < str.length; i++){
        if(hash[str[i]] == 1){
            return str[i];
        }
    }

    return null;
}

console.log(firstNotRepeatingChar("abaccddff"));
console.log(firstNotRepeatingChar(""));
console.log(firstNotRepeatingChar("aa"));
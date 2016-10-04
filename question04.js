//替换空格
/*
请实现一个函数，把字符串中的每个空格替换成"%20"。例如输入"We are happy."，
则输出"We%20are%20happy."
 */
function replaceBlank(str){
    return str.replace(/ /g,"%20");
}

console.log(replaceBlank("We are happy."));
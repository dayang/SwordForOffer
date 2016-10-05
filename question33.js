//把数组排成最小的数
/*
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的
所有数字中最小的一个。例如输入数组{3,32,321}，则打印出这3个数字能排成
的最小数字321323
 */

function printMinNumber(numbers){
    numbers.sort(function(a,b){
        var sa = a.toString(), sb = b.toString();
        if(sa + sb < sb + sa){
            return -1;
        }else{
            return 1;
        }
    });
    var res = "";
    for(var i = 0; i < numbers.length; i++){
        res += numbers[i];
    }
    console.log(res);
}

printMinNumber([3,32,321]);
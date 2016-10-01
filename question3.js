// 二维数组中的查找
/*
在一个二维数组中，每一行都按照从左到有递增的顺序排序，每一列都按照
从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数
 */
// 思路：选右上角数字与要查找数字比较，进一步确定范围
/*
输入样例：
1 2 8 9
2 4 9 12
4 7 10 13
6 8 22 25
查找7
 */

function find(array, target){
    var found = false;
    if(array !== null){
        var row = 0;
        var column = array[0].length - 1;
        while(row < array.length && column >= 0){
            if(array[row][column] == target){
                found = true;
                break;
            }else if(array[row][column] > target){
                column--;
            }else{
                row++;
            }
        }
    }
    return found;
}

var array = [
  [1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]
];
console.log(find(array, 7));
console.log(find(array, 0));
console.log(find(array, 15));
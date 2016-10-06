//数组中的逆序对
/*
在数组中的两个数字如果前面一个数字大于后面的数字，
则这两个数字组成一个逆序对。输入一个数组，求这个
数组中的逆序对的总数。
 */

//利用归并排序思想
function inversePairs(array){
    if(!array) return 0;

    var copy = array.slice(0);

    return inversePairsCore(copy,0,copy.length - 1);
}

function inversePairsCore(copy, start, end){
    if(start == end){
        return 0;
    }

    var mid = Math.floor((start + end) / 2);
    var leftCount = inversePairsCore(copy, start, mid);
    var rightCount = inversePairsCore(copy, mid + 1, end);
    var count = 0, i = start, j = mid + 1, temp = [], index = 0;
    while(i <= mid && j <= end){
        if(copy[i] > copy[j]){
            count += mid - i + 1;
            temp[index++] = copy[j++];
        }else{
            temp[index++] = copy[i++];
        }
    }
    while(i <= mid) temp[index++] = copy[i++];
    while(j <= end) temp[index++] = copy[j++];
    for(i = 0; i < index; i++){
        copy[start++] = temp[i];
    }
    return count + leftCount + rightCount;
}

console.log(inversePairs([1,4,0,3]));
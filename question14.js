//调整数组顺序使奇数位于偶数前面
/*
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有
奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

// 两个下标，oddIndex表示当前奇数序列最大下标，index遍历下标，当array[index]是奇数时，则与oddIndex下一位交换，oddIndex++
function reorderOddEven1(array){
    var oddIndex = -1, index, temp;    //oddIndex 表示当前奇数序列最大下标
    for(index = 0; index < array.length; index++){
        if(array[index] % 2 === 1){
            oddIndex ++;
            if(index !== oddIndex){
                temp = array[index];
                array[index] = array[oddIndex];
                array[oddIndex] = temp;
            }
        }
    }
}

var arr1 = [2,4,8,5];
reorderOddEven1(arr1);
console.log("arr1: " + arr1);

// 两个下标，初始p1=0,p2=array.length-1,p1++,p2--, 当p1指向偶数，p2指向奇数时，交换array[p1]和array[p2]
function reorderOddEven2(array){
    var p1 = 0, p2 = array.length - 1, temp;
    while(p1 < p2){
        while(p1 < p2 && array[p1] % 2 === 1){
            p1++;
        }
        while(p1 < p2 && array[p2] % 2 === 0){
            p2--;
        }
        if(p1 < p2){
            temp = array[p1];
            array[p1] = array[p2];
            array[p2] = temp;
        }
    }
}

var arr2 = [2,4,8,5,3,4];
reorderOddEven2(arr2);
console.log("arr2: " + arr2);

//更通用的方法, 满足condition的元素排在前面
function reorder(array, condition){
    var p1 = 0, p2 = array.length - 1, temp;
    while(p1 < p2){
        while(p1 < p2 && condition(array[p1])){
            p1++;
        }
        while(p1 < p2 && !condition(array[p2])){
            p2--;
        }
        if(p1 < p2){
            temp = array[p1];
            array[p1] = array[p2];
            array[p2] = temp;
        }
    }
}

var arr3 = [2,4,8,5,3,4, -1, -3];
reorder(arr3, function(n){
    return n < 0;
});
console.log("arr3: " + arr3);
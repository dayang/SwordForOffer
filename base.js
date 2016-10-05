function ListNode(val){
    this.val = val;
    this.next = null;
}

function ComplexListNode(val){
    this.val = val;
    this.next = null;
    this.sibling = null;
}

function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function printList(head) {
    while(head != null){
        console.log(head.val);
        head = head.next;
    }
}

//快排的partition函数
function partition(array, start, end){
    if(!array || array.length <= 0 || start < 0 || end >= array.length)
        throw new Error("Invalid parameters");
    var index = start + Math.round(Math.random() * (end - start));
    swap(array, index, end);

    var small = start - 1;
    for(index = start; index < end; index++){
        if(array[index] < array[end]){
            small++;
            if(small !== index)
                swap(array, index, small);
        }
    }
    small++;
    swap(array,small,end);
    return small;
}

function swap(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

exports.ListNode = ListNode;
exports.TreeNode = TreeNode;
exports.printList = printList;
exports.ComplexListNode = ComplexListNode;
exports.partition = partition;
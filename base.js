function ListNode(val){
    this.val = val;
    this.next = null;
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

exports.ListNode = ListNode;
exports.TreeNode = TreeNode;
exports.printList = printList;
//从尾到头打印链表
/*
输入一个链表的头结点，从尾到头打印出每个节点的值
 */
var ListNode = require('./base').ListNode;

//使用栈将结点值保存下来，再打印
function printListReversely(head){
    var stack = [];
    while(head != null){
        stack.push(head.val);
        head = head.next;
    }
    while(stack.length > 0){
        console.log(stack.pop());
    }
}

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// printListReversely(head);
// printListReversely(null);

//递归本质上也是栈，递归版
function printListReverse(head){
    if(head !== null){
        printListReversely(head.next);
        console.log(head.val);
    }
}

printListReversely(head);
printListReverse(null);
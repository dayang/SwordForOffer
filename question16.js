//反转链表
/*
定义一个函数，输入一个链表的头结点，反转该链表
并输出反转链表的头结点。
 */
var ListNode = require('./base').ListNode;
var printList = require('./base').printList;

function reverseList(head){
    if(head == null || head.next == null) return head;
    var pBehind = head, pMid = pBehind.next, pAhead = pMid.next;
    pBehind.next = null;
    pMid.next = pBehind;
    while(pAhead != null){
        pBehind = pMid;
        pMid = pAhead;
        pAhead = pAhead.next;
        pMid.next = pBehind;
    }
    return pMid;
}

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);

printList(a);
a = reverseList(a);
printList(a);
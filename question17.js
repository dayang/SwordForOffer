//合并两个排序的链表
/*
输入两个递增排序的链表，合并这两个链表并使得新链表中的结点
仍然时按照递增排序的。
 */
var ListNode = require('./base').ListNode;
var printList = require('./base').printList;

function mergeIncreasingList(head1, head2){
    if(head1 == null)
        return head2;
    if(head2 == null)
        return head1;
    var mergedHead;
    if(head1.val < head2.val){
        mergedHead = head1;
        mergedHead.next = mergeIncreasingList(head1.next, head2);
    }else{
        mergedHead = head2;
        mergedHead.next = mergeIncreasingList(head1, head2.next);
    }
    return mergedHead;
}

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
var b = new ListNode(0);
b.next = new ListNode(3);
b.next.next = new ListNode(10);

// printList(a);
// printList(b);
printList(mergeIncreasingList(a,b));
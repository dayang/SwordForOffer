//在O(1)时间内删除链表结点
/*
给定单向链表的头指针和一个结点指针，定义一个函数在O(1)时间
删除该结点。
前提是要删除的结点一定在链表中，否则判断要删除的结点是否在链表中需要O(n)
思路：将要删除结点p的下一个结点值复制给p,再删除p的下一个结点
边界：1、p是最后一个结点，则退化用O(n)遍历到其前一个结点，再删除p
     2、p是头结点，且链表只有这一个结点，将head置null
 */
var ListNode = require('./base').ListNode;

function deleteNode(head, toBeDeleted){
    if(!head || !toBeDeleted)
        return;
    if(toBeDeleted.next !== null){
        var next = toBeDeleted.next;
        toBeDeleted.val = next.val;
        toBeDeleted.next = next.next;
        next = null;
    }else if(head == toBeDeleted){
        head = null;
        toBeDeleted = null;   // 去除结点的引用，使其被回收
    }else{
        var p = head;
        while(p.next !== toBeDeleted){
            p = p.next;
        }
        p.next = toBeDeleted.next;
        toBeDeleted = null;
    }
}
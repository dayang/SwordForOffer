//链表中倒数第k个结点
/*
输入一个链表，输出该链表中倒数第k个结点，为了符合大多数人的习惯，
本题从1开始计数，即链表的尾结点时倒数第一个结点。例如一个链表有6个
结点，从头结点开始它们的值依次是1、2、3、4、5、 6。这个链表的倒数第
3个结点是值为4的结点。
!!!: 程序的鲁棒性
 */
var ListNode = require('./base').ListNode;

function findKthToTail(head, k){
    if(!head || k <= 0) return null;
    var pAhead = head, pBehind;
    for(var i = 0; i < k - 1; i++){
        pAhead = pAhead.next;
        if(pAhead == null)
            return null;
    }
    pBehind = head;
    while(pAhead.next != null){
        pAhead = pAhead.next;
        pBehind = pBehind.next;
    }
    return pBehind;
}

/*
求链表的中间结点：
--用两个指针，快指针每次走两步，慢指针每次走一步，当快指针走到链表尾时，慢指针指向链表中间位置。
  开始时，慢指针在第一个位置，快指针在第2个位置。当结束时，若链表结点个数为
  偶数，则慢指针指向中间两个结点的前一个。
  开始时，慢指针和快指针都在在第一个位置。当结束时，若链表结点个数为
  偶数，则慢指针指向中间两个结点的后一个。

判断一个单向链表是否形成了环形结构：
--两个指针，快指针每次走两步，慢指针每次走一步，若快指针到达链表结尾也没有追上慢指针，
  则无环，否则，有环。
 */
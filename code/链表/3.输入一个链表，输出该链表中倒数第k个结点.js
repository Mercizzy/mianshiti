// 输入一个链表，输出该链表中倒数第k个结点。
function findKToTail(head) {
    let fast = head, slow = head
    for (let i=0; i<k; i++) {
        if (!head) {
            throw Error('链表长度小于K') 
        } else {
            fast = fast.next
        }
    }
    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}
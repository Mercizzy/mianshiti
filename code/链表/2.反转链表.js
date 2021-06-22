// 输入一个链表，反转链表后，输出新链表的表头。

function reverseList(head) {
    let newHead = null
    while (head.next) {
        let temp = head.next
        head.next = newHead
        newHead = head
        head = temp
    }
    return newHead
}
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList

function printListFromTailToHead(head) {
    let arr = []
    while (head.next) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}
function ReverseList(pHead)
{
    if(!pHead) return null
    let pre = null,current = pHead,next = null;
    while(current!=null){
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre
}
ReverseList()
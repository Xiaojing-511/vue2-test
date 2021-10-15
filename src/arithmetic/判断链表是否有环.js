function ListNode(val){
    this.val = val;
    this.next = null;
}
let root = new ListNode(0),node1 = new ListNode(1),node2 = new ListNode(2),node3 = new ListNode(3);
root.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = root;
function hasCircle(root){
    let slow = root,fast = root;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            console.log(fast.val);
            return true
        }
    }
    return false
}
console.log(hasCircle(root));
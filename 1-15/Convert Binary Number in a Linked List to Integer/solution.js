/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var step = 0, result = 0;
    var temp = head;
    while(temp) {
        temp = temp.next;
        step ++;
    }
    
    while(head){
        result += head.val * Math.pow(2, step-1);
        head = head.next;
        step --;
    }
    
    return result;
};
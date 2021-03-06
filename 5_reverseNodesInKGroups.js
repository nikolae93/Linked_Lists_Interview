/* DESCRIPTION */

/*
Note: Your solution should have O(n) time complexity, where n is the number of elements in l,
 and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.

Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that
 is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k,
  then the nodes that are left out at the end should remain as-is.

You may not alter the values in the nodes - only the nodes themselves can be changed.

Example

For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];
For l = [1, 2, 3, 4, 5] and k = 1, the output should be
reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11].
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
1 ≤ list size ≤ 104,
-109 ≤ element value ≤ 109.

[input] integer k

The size of the groups of nodes that need to be reversed.

Guaranteed constraints:
1 ≤ k ≤ l size.

[output] linkedlist.integer

The initial list, with reversed groups of k elements.
*/

/* SOLUTION */

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function reverseNodesInKGroups(l, k) {

    let niz = [];
    
    while(l){
        niz.push(l.value);
        l=l.next;
    }
    
    if(k===1){return niz;}
    
    var c=1;
    var g= Math.floor(niz.length/k)+1;
    var nzs=[]
    
    for(var i=0;i<g;i++){
        nzs.push([]);
    }
    
    var c=0;
    var ch=0;
    var fin=[];
    
    for(var x=0;x<niz.length;x++){
    
         nzs[c].push(niz[x]);
         ch++;
         if(ch===k){ch=0;c++}
    
    }
    
    for(i=0;i<nzs.length-1;i++){
        nzs[i].reverse();
    }
    
    for(i=0;i<nzs.length;i++){
       fin=[...fin,...nzs[i]]
    }
    
    return fin;
    
    }

/*END*/
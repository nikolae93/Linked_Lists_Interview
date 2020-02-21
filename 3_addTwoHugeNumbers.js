/* DESCRIPTION */

/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number
from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros.
Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.

Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer a

The first number, without its leading zeros.

Guaranteed constraints:
0 ≤ a size ≤ 104,
0 ≤ element value ≤ 9999.

[input] linkedlist.integer b

The second number, without its leading zeros.

Guaranteed constraints:
0 ≤ b size ≤ 104,
0 ≤ element value ≤ 9999.

[output] linkedlist.integer

The result of adding a and b together, returned without leading zeros in the same format.
*/

/* SOLUTION */

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function addTwoHugeNumbers(a, b) {

    let na=[];
 
    var tval = a.value; 
    var t = a;
 
   while(t){
     na.push(tval);
     t = t.next;
     if(t){tva = t.value};
     
   }
 
 let nb =[];
 
 tval = b.value; 
 t = b;

   while(t){
     nb.push(tval);
     t=t.next;
     if(t){tval = t.value}
   }
 
   /* ++++++++++++++++++++++++++++++++++++ */
 
  if(na.length > nb.length){
    
      while(na.length !== nb.length){
          nb.unshift(0);
      }
  }
 
  if(nb.length > na.length){
  
      while(na.length!==nb.length){
          na.unshift(0);
      }
  }

   /* +++++++++++++++++++++++++++++++++++ */
 
 let rem=0;
 t=0;
 let rez=[];
 
 for(let i=na.length-1;i>=0;i--){
 
    t = na[i]+nb[i]+rem;
    rem = 0;
 
    if(t>9999){t-=10000;rem=1;}
    rez.unshift(t);
 
    if(i === 0 && rem !== 0){rez.unshift(rem)}
 }
   
 return rez;

}

/*END*/
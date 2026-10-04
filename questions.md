# DSA Stack, Queue & Linked List — Comprehensive MCQ Bank

> **Source:** Prepared from the 13 uploaded problem PDFs.  
> **Coverage:** Partition List, Add Two Numbers, Minimum Stack, Valid Parentheses, Evaluate RPN, Valid Parentheses String, Minimum Remove to Make Valid Parentheses, Longest Valid Parentheses, Basic Calculator, Validate Stack Sequences, Remove K Digits, Stack Using Queue, Queue Using Stacks.
>
> The questions are designed for exam preparation and AI ingestion. They cover concepts, code logic, dry runs, edge cases, data structures, complexity, and implementation details without intentionally repeating the same question.

---

# 1. Partition List

### Q1. What is the main goal of the Partition List problem?
A. Sort all nodes in ascending order  
B. Put nodes `< x` before nodes `>= x` while preserving relative order within each group  
C. Remove all nodes greater than `x`  
D. Reverse the linked list  

**Answer: B**

### Q2. For `[1,4,3,2,5,2]` with `x = 3`, what is the expected result?
A. `[1,2,2,4,3,5]`  
B. `[1,2,3,4,5,2]`  
C. `[4,3,5,1,2,2]`  
D. `[2,2,1,4,3,5]`  

**Answer: A**

### Q3. What property must be preserved inside each partition?
A. Sorted order  
B. Reverse order  
C. Original relative order  
D. Numerical distance from `x`  

**Answer: C**

### Q4. Why are two dummy nodes useful in the efficient approach?
A. They sort the list  
B. They act as starting anchors for the smaller and greater/equal lists  
C. They reduce the number of nodes  
D. They store copies of every value  

**Answer: B**

### Q5. Which nodes belong in the first partition when the pivot is `x`?
A. Values `<= x`  
B. Values `> x`  
C. Values `< x`  
D. Values equal to `x` only  

**Answer: C**

### Q6. Which nodes belong in the second partition?
A. Values `>= x`  
B. Values `> x` only  
C. Values `< x`  
D. Values equal to zero  

**Answer: A**

### Q7. In a pointer-based partition solution, what is rearranged?
A. Node values only  
B. Array indexes  
C. Links/pointers between nodes  
D. The pivot value  

**Answer: C**

### Q8. What is the typical time complexity of traversing the list once for partitioning?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q9. What is the purpose of setting the final greater-list node's `next` to `null`?
A. To reverse the list  
B. To prevent an unwanted old link/cycle  
C. To delete the greater list  
D. To make the list sorted  

**Answer: B**

### Q10. Why is changing node values generally not the intended solution?
A. It always causes O(n²) time  
B. The problem focuses on pointer manipulation while preserving node order  
C. Java does not allow value changes  
D. Dummy nodes cannot be used otherwise  

**Answer: B**

### Q11. If every node is less than `x`, what should the partition operation do?
A. Delete all nodes  
B. Put all nodes in the greater list  
C. Keep the original list order  
D. Reverse the list  

**Answer: C**

### Q12. What is the main skill tested by Partition List?
A. Hashing  
B. Pointer manipulation in linked lists  
C. Binary search  
D. Dynamic programming  

**Answer: B**

---

# 2. Add Two Numbers

### Q13. What does the Add Two Numbers linked-list problem represent?
A. Two strings being concatenated  
B. Two numbers represented using linked lists  
C. Two binary trees  
D. Two stacks  

**Answer: B**

### Q14. Why is `carry` required?
A. To reverse the lists  
B. To store overflow from one digit position for the next position  
C. To count nodes  
D. To detect duplicates  

**Answer: B**

### Q15. If the digit sum is 17, what are the digit and carry?
A. Digit 17, carry 0  
B. Digit 7, carry 1  
C. Digit 1, carry 7  
D. Digit 8, carry 1  

**Answer: B**

### Q16. Which condition correctly keeps processing while a result digit may still exist?
A. `l1 != null && l2 != null` only  
B. `l1 != null || l2 != null || carry != 0`  
C. `carry == 0`  
D. `l1 == null && l2 == null`  

**Answer: B**

### Q17. What is the purpose of a dummy node in the result list?
A. It stores the final carry  
B. It simplifies construction of the result list and provides an anchor  
C. It reverses the result  
D. It stores the larger input  

**Answer: B**

### Q18. In the reverse-add-reverse approach, what is done first?
A. Add the heads directly  
B. Reverse both linked lists  
C. Delete the first node  
D. Sort both lists  

**Answer: B**

### Q19. Why are the lists reversed in the reverse-add-reverse method?
A. To make the most significant digit first  
B. To make the least significant digits available first for addition  
C. To save memory  
D. To remove carry  

**Answer: B**

### Q20. If `sum = 23`, what is `sum % 10`?
A. 1  
B. 2  
C. 3  
D. 23  

**Answer: C**

### Q21. If `sum = 23`, what is integer `sum / 10`?
A. 0  
B. 1  
C. 2  
D. 3  

**Answer: C**

### Q22. What should happen if both input lists are exhausted but `carry` is 1?
A. Ignore it  
B. Add a final node containing 1  
C. Reverse the answer  
D. Return null  

**Answer: B**

### Q23. What is the time complexity of a linear linked-list addition solution?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q24. In the uploaded reverse-add-reverse approach, what extra working variables are used instead of an auxiliary data structure?
A. `prev`, `curr`, `next`, `carry`  
B. HashMap and Set  
C. Two queues  
D. Binary tree nodes  

**Answer: A**

---

# 3. Minimum Stack

### Q25. What extra operation does a Minimum Stack provide?
A. `sort()`  
B. `getMin()`  
C. `reverse()`  
D. `search()`  

**Answer: B**

### Q26. What time complexity is required for `push`, `pop`, `top`, and `getMin`?
A. O(n)  
B. O(log n)  
C. O(1)  
D. O(n log n)  

**Answer: C**

### Q27. What is the purpose of `minStack`?
A. Store only maximum values  
B. Track minimum values efficiently  
C. Reverse the main stack  
D. Store input indexes only  

**Answer: B**

### Q28. When should an element be pushed into `minStack` in the two-stack approach?
A. Only when it is greater than the current minimum  
B. When `minStack` is empty or `x <= minStack.peek()`  
C. Only when it is positive  
D. Every second push  

**Answer: B**

### Q29. Why is `<=` used rather than only `<` when pushing into `minStack`?
A. To preserve duplicate minimum values  
B. To make pop O(n)  
C. To remove duplicates  
D. To sort the stack  

**Answer: A**

### Q30. Suppose the stack contains `[5,2,2]`. If one `2` is popped, what should the minimum remain?
A. 5  
B. 2  
C. 0  
D. Undefined  

**Answer: B**

### Q31. When is the minimum stack popped?
A. Whenever any element is popped  
B. When the removed main-stack element equals `minStack.peek()`  
C. Only when the removed element is positive  
D. Never  

**Answer: B**

### Q32. What would happen if duplicate minimum values were not stored in `minStack`?
A. `push()` becomes O(n)  
B. The minimum could be lost too early after a pop  
C. The stack becomes sorted  
D. `top()` fails  

**Answer: B**

### Q33. What does `top()` return?
A. Minimum element  
B. Bottom element  
C. Current top element  
D. Maximum element  

**Answer: C**

### Q34. Why is scanning the normal stack to find the minimum inefficient?
A. It requires O(n) time  
B. It requires O(log n) time  
C. It changes the stack  
D. It cannot compare integers  

**Answer: A**

### Q35. What is the worst-case auxiliary space of the two-stack Minimum Stack?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q36. If the operations are `push(100), push(80), push(120), getMin()`, what is returned?
A. 120  
B. 100  
C. 80  
D. 300  

**Answer: C**

---

# 4. Valid Parentheses

### Q37. Which data structure is naturally suited for matching nested brackets?
A. Queue  
B. Stack  
C. Heap  
D. Graph  

**Answer: B**

### Q38. Why is a stack appropriate for Valid Parentheses?
A. It follows FIFO  
B. It follows LIFO, matching the most recently opened bracket  
C. It sorts brackets  
D. It removes duplicates  

**Answer: B**

### Q39. Which set of symbols is handled by the problem?
A. `()`, `{}`, `[]`  
B. `< >` only  
C. Numbers only  
D. Letters only  

**Answer: A**

### Q40. What should happen when an opening bracket is encountered?
A. Pop the stack  
B. Push it onto the stack  
C. Ignore it  
D. Reverse it  

**Answer: B**

### Q41. What should happen if a closing bracket is found while the stack is empty?
A. Return true  
B. Return false  
C. Push the closing bracket  
D. Skip it  

**Answer: B**

### Q42. For closing `]`, which opening bracket must be on top?
A. `(`  
B. `{`  
C. `[`  
D. `)`  

**Answer: C**

### Q43. Why can an odd-length bracket string be rejected immediately?
A. A valid bracket sequence requires pairs of characters  
B. Stack cannot hold odd elements  
C. Java does not support odd strings  
D. Only even numbers are allowed  

**Answer: A**

### Q44. What should be true after processing every character of a valid string?
A. Stack contains one bracket  
B. Stack is empty  
C. Stack contains all brackets  
D. Stack contains only closing brackets  

**Answer: B**

### Q45. What is the time complexity of the stack-based Valid Parentheses solution?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(1)  

**Answer: A**

### Q46. What is the worst-case extra space?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q47. Which string is valid?
A. `([)]`  
B. `({[]})`  
C. `((]`  
D. `[(])`  

**Answer: B**

### Q48. In the Java implementation, what is a useful early optimization?
A. Check `s.length() % 2 != 0`  
B. Sort the string  
C. Reverse the string  
D. Remove all spaces  

**Answer: A**

---

# 5. Evaluate Reverse Polish Notation

### Q49. In Reverse Polish Notation, where is the operator placed?
A. Before operands  
B. Between operands  
C. After operands  
D. At the beginning only  

**Answer: C**

### Q50. What is the postfix form of `2 + 3`?
A. `+ 2 3`  
B. `2 3 +`  
C. `2 + 3`  
D. `3 2 +`  

**Answer: B**

### Q51. Which data structure is used to evaluate RPN in the uploaded approach?
A. Queue  
B. Stack  
C. Linked list only  
D. Heap  

**Answer: B**

### Q52. When a number token is encountered, what is done?
A. Pop two values  
B. Push it onto the stack  
C. Ignore it  
D. Divide it by the previous value  

**Answer: B**

### Q53. When an operator is encountered, how many operands are normally popped?
A. One  
B. Two  
C. Three  
D. Zero  

**Answer: B**

### Q54. If `b` is popped first and `a` second, how should subtraction be computed?
A. `b - a`  
B. `a - b`  
C. `a + b`  
D. `b / a`  

**Answer: B**

### Q55. For division, why is operand order important?
A. Division is commutative  
B. Integer division depends on which value is the numerator  
C. It changes stack size  
D. It affects only addition  

**Answer: B**

### Q56. What is the result of `["2","1","+","3","*"]`?
A. 5  
B. 6  
C. 9  
D. 12  

**Answer: C**

### Q57. What is the result of `["3","4","+","2","*"]`?
A. 9  
B. 14  
C. 16  
D. 24  

**Answer: B**

### Q58. What is the time complexity of evaluating an RPN expression with n tokens?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q59. What is the worst-case auxiliary stack space?
A. O(1)  
B. O(n)  
C. O(n²)  
D. O(log n)  

**Answer: B**

### Q60. Which operators are supported by the uploaded problem?
A. `+`, `-`, `*`, `/`  
B. `^`, `%` only  
C. `+` only  
D. All Java operators  

**Answer: A**

---

# 6. Valid Parentheses String

### Q61. What special character makes this problem different from normal Valid Parentheses?
A. `#`  
B. `*`  
C. `$`  
D. `?`  

**Answer: B**

### Q62. What can `*` represent?
A. Only `(`  
B. Only `)`  
C. `(`, `)`, or an empty string  
D. Only an empty string  

**Answer: C**

### Q63. In the two-pass greedy method, what does the left-to-right pass primarily detect?
A. Too many closing parentheses  
B. Too many opening parentheses only  
C. Duplicate stars  
D. Numbers  

**Answer: A**

### Q64. During the left-to-right pass, which characters increase the balance?
A. Only `)`  
B. `(` or `*`  
C. Only `*`  
D. `)` or `*`  

**Answer: B**

### Q65. During the left-to-right pass, what happens when `balance < 0`?
A. Continue  
B. Return false  
C. Reset to zero  
D. Reverse the string  

**Answer: B**

### Q66. Why is a right-to-left pass required?
A. To detect too many unmatched opening parentheses  
B. To sort the string  
C. To remove stars  
D. To count digits  

**Answer: A**

### Q67. In the right-to-left pass, which characters increase balance?
A. `(` only  
B. `)` or `*`  
C. `(` or `*`  
D. Letters  

**Answer: B**

### Q68. What is the time complexity of the two-pass greedy approach?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: A**

### Q69. What is the extra space of the two-pass greedy approach?
A. O(n)  
B. O(log n)  
C. O(1)  
D. O(n²)  

**Answer: C**

### Q70. What is the main advantage of the greedy two-pass approach over the stack approach?
A. It uses constant extra space  
B. It sorts the string  
C. It uses recursion  
D. It changes `*` permanently  

**Answer: A**

### Q71. In the stack-based approach, what do `openStack` and `starStack` store?
A. Values  
B. Indices of opening parentheses and stars  
C. Only characters  
D. Counts only  

**Answer: B**

### Q72. Why must an unmatched `(` occur before the `*` used to match it in the stack approach?
A. A star cannot represent a parenthesis before its position  
B. All stars must be at the beginning  
C. The stack is FIFO  
D. It reduces time complexity  

**Answer: A**

---

# 7. Minimum Remove to Make Valid Parentheses

### Q73. What is the objective of Minimum Remove to Make Valid Parentheses?
A. Maximize the number of parentheses  
B. Remove the minimum number of parentheses to make the string valid  
C. Reverse all parentheses  
D. Remove all letters  

**Answer: B**

### Q74. What non-parenthesis characters are allowed in the problem?
A. Uppercase letters only  
B. Lowercase English letters  
C. Digits only  
D. Special symbols only  

**Answer: B**

### Q75. What does `balance` represent during the first pass?
A. Number of letters  
B. Number of unmatched opening parentheses currently available  
C. Number of closing parentheses  
D. String length  

**Answer: B**

### Q76. What should happen when a `)` is encountered and `balance == 0`?
A. Append it  
B. Skip/remove it  
C. Push it  
D. Convert it to `(`  

**Answer: B**

### Q77. What happens to `balance` when a valid `(` is appended?
A. Decreases  
B. Increases  
C. Stays the same  
D. Becomes zero  

**Answer: B**

### Q78. Why is a second reverse traversal needed?
A. To remove unmatched `(` remaining after the first pass  
B. To remove all letters  
C. To sort parentheses  
D. To count stars  

**Answer: A**

### Q79. During the second pass, when is an opening `(` skipped?
A. Whenever `balance == 0`  
B. When `balance > 0`, because it is unmatched  
C. Whenever it is the first character  
D. Never  

**Answer: B**

### Q80. Why is the second-pass result reversed at the end?
A. Characters were appended while traversing from right to left  
B. Parentheses need sorting  
C. The first pass reversed them  
D. It reduces memory  

**Answer: A**

### Q81. What is the time complexity of the two-pass solution?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: A**

### Q82. What is the space complexity when building the result?
A. O(1)  
B. O(n)  
C. O(log n)  
D. O(n²)  

**Answer: B**

### Q83. If the input is `"a)b(c)d"`, which character is immediately identified as invalid during the first pass?
A. `a`  
B. `)`  
C. `(`  
D. `d`  

**Answer: B**

### Q84. Does the algorithm remove letters that are already valid?
A. Yes  
B. No  
C. Only lowercase letters  
D. Only letters after parentheses  

**Answer: B**

---

# 8. Longest Valid Parentheses

### Q85. What does the Longest Valid Parentheses problem ask for?
A. The longest valid subsequence  
B. The length of the longest valid parentheses substring  
C. The number of valid pairs  
D. The shortest valid substring  

**Answer: B**

### Q86. What does the stack store in the stack-based solution?
A. Parenthesis characters only  
B. Indices  
C. Values of parentheses  
D. Lengths only  

**Answer: B**

### Q87. Why is `-1` pushed initially?
A. It represents an invalid character  
B. It acts as a base index for calculating lengths, especially when a valid substring starts at index 0  
C. It stores the minimum value  
D. It represents `)`  

**Answer: B**

### Q88. What is done when `s[i] == '('`?
A. Pop  
B. Push index `i`  
C. Reset stack  
D. Update answer only  

**Answer: B**

### Q89. What is done when `s[i] == ')'`?
A. Push `i` immediately  
B. Pop the stack first  
C. Ignore it  
D. Reverse the string  

**Answer: B**

### Q90. After popping for a `)`, what happens if the stack becomes empty?
A. Push current index as a new base  
B. Return zero  
C. Push `-1` again only  
D. Stop the loop  

**Answer: A**

### Q91. If the stack is not empty after popping a `)`, how is the current valid length calculated?
A. `stack.peek() - i`  
B. `i + stack.peek()`  
C. `i - stack.peek()`  
D. `i * stack.peek()`  

**Answer: C**

### Q92. For input `"()"`, what is the longest valid length?
A. 0  
B. 1  
C. 2  
D. 3  

**Answer: C**

### Q93. For input `"(()"`, what is the longest valid length?
A. 0  
B. 1  
C. 2  
D. 3  

**Answer: C**

### Q94. What is the time complexity of the stack-based solution?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: A**

### Q95. What is the auxiliary space complexity?
A. O(1)  
B. O(n)  
C. O(log n)  
D. O(n²)  

**Answer: B**

### Q96. Why is this problem specifically about a substring rather than a subsequence?
A. Characters must form a contiguous valid region  
B. Characters can be arbitrarily skipped  
C. Sorting is allowed  
D. Only the first and last characters matter  

**Answer: A**

---

# 9. Basic Calculator

### Q97. Which operations are supported by the Basic Calculator problem?
A. `+` and `-`  
B. `*` and `/` only  
C. `+`, `-`, `*`, `/`  
D. `%` only  

**Answer: A**

### Q98. What does `num = num * 10 + (ch - '0')` accomplish?
A. Converts a multi-digit sequence into an integer  
B. Reverses the number  
C. Counts parentheses  
D. Calculates the sign  

**Answer: A**

### Q99. What is the initial value of `sign`?
A. -1  
B. 0  
C. 1  
D. 10  

**Answer: C**

### Q100. What should happen when `+` is encountered?
A. Add `sign * num` to result, reset `num`, and set `sign = 1`  
B. Push the number only  
C. Set `result = 0`  
D. Pop twice  

**Answer: A**

### Q101. What should happen when `-` is encountered?
A. Set `sign = 1`  
B. Add current signed number, reset `num`, and set `sign = -1`  
C. Clear the stack  
D. Reverse the expression  

**Answer: B**

### Q102. Why is `num = 0` necessary after processing `+` or `-`?
A. To avoid combining the previous number with the next number  
B. To remove parentheses  
C. To reset the stack  
D. To change multiplication precedence  

**Answer: A**

### Q103. What two values are pushed when `(` is encountered?
A. `num` and `result`  
B. `result` and `sign`  
C. `sign` and `num`  
D. `result` and `num`  

**Answer: B**

### Q104. What is done when `(` is encountered after saving the previous context?
A. `result = 0` and `sign = 1`  
B. `result = -1`  
C. `num = 10`  
D. Pop the stack  

**Answer: A**

### Q105. On encountering `)`, how is the current parenthesized expression combined with the outer expression?
A. `stack.pop() + result` only  
B. `stack.pop() * result + stack.pop()`  
C. `result * result`  
D. `stack.peek() - result`  

**Answer: B**

### Q106. What is the result of `"1 + 2 - 4"`?
A. 7  
B. -1  
C. 1  
D. -5  

**Answer: B**

### Q107. What is the result of `"2 - (1 + 2)"`?
A. 3  
B. 1  
C. -1  
D. -3  

**Answer: C**

### Q108. What is the purpose of `Character.isDigit(ch)`?
A. Detect parentheses  
B. Detect whether the current character is a digit  
C. Detect whitespace only  
D. Detect an operator  

**Answer: B**

---

# 10. Validate Stack Sequences

### Q109. What does Validate Stack Sequences determine?
A. Whether two arrays are sorted  
B. Whether `popped` can be a valid pop order for `pushed`  
C. Whether arrays contain duplicates  
D. Whether values are consecutive  

**Answer: B**

### Q110. What order must elements be pushed in?
A. Any order  
B. Reverse of `pushed`  
C. Exactly the order given by `pushed`  
D. Sorted order  

**Answer: C**

### Q111. What principle determines valid popping?
A. FIFO  
B. LIFO  
C. Random access  
D. Priority order  

**Answer: B**

### Q112. What should be checked after each push?
A. Whether stack size is prime  
B. Whether stack top equals the next required element in `popped`  
C. Whether the current element is smallest  
D. Whether the queue is empty  

**Answer: B**

### Q113. If the stack top matches `popped[i]`, what should happen?
A. Pop and increment `i`  
B. Push again  
C. Ignore the match  
D. Clear the stack  

**Answer: A**

### Q114. Why can the pop check be repeated in a `while` loop?
A. Several consecutive top elements may match the next required popped elements  
B. Stack operations are FIFO  
C. It sorts the sequence  
D. It avoids pushing  

**Answer: A**

### Q115. When is the popped sequence valid after all pushes?
A. When the stack is empty  
B. When the stack contains one element  
C. When `popped` is sorted  
D. When `pushed` is reversed  

**Answer: A**

### Q116. If `pushed = [1,2,3,4,5]` and `popped = [4,5,3,2,1]`, is the sequence valid?
A. Yes  
B. No  
C. Only if duplicates exist  
D. Cannot determine  

**Answer: A**

### Q117. What data structure directly simulates the required behavior?
A. Queue  
B. Stack  
C. Heap  
D. HashMap  

**Answer: B**

### Q118. What is the time complexity of the simulation?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: A**

### Q119. What is the worst-case auxiliary space?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q120. Why are distinct values mentioned in the problem?
A. They remove ambiguity when matching the pushed and popped elements  
B. They make the stack FIFO  
C. They sort the arrays automatically  
D. They eliminate the need for a stack  

**Answer: A**

---

# 11. Remove K Digits

### Q121. What is the objective of Remove K Digits?
A. Make the number as large as possible  
B. Remove exactly `k` digits so the remaining number is as small as possible  
C. Reverse the number  
D. Sort all digits  

**Answer: B**

### Q122. Which principle is used in the uploaded efficient solution?
A. Monotonic stack / greedy removal  
B. Binary search  
C. BFS  
D. Dynamic programming table  

**Answer: A**

### Q123. When is the top digit removed during the main scan?
A. When `k > 0`, stack is nonempty, and `stack.peek() > digit`  
B. Whenever the current digit is even  
C. Whenever `digit > stack.peek()`  
D. Only when the stack is empty  

**Answer: A**

### Q124. Why is a larger previous digit removed when a smaller current digit appears?
A. Removing it can produce a smaller number at the more significant position  
B. It increases the number  
C. It sorts digits in descending order  
D. It avoids using a stack  

**Answer: A**

### Q125. What happens after the current digit is processed?
A. It is always pushed after applicable removals  
B. It is always discarded  
C. It is inserted at the bottom  
D. It is reversed  

**Answer: A**

### Q126. Why is there a second `while(k > 0)` after scanning all digits?
A. Some removals may remain when digits were already nondecreasing  
B. It adds zeros  
C. It reverses the stack  
D. It detects parentheses  

**Answer: A**

### Q127. For `"12345"` with `k = 2`, what is the result?
A. 145  
B. 123  
C. 345  
D. 125  

**Answer: B**

### Q128. For `"1432219"` with `k = 3`, what is the expected result?
A. 4329  
B. 1219  
C. 1229  
D. 1321  

**Answer: B**

### Q129. Why are leading zeros removed after constructing the result?
A. The required final representation should not contain leading zeros unless the answer is zero  
B. Zeros cannot be stored in a stack  
C. It changes the number of digits removed  
D. It sorts the result  

**Answer: A**

### Q130. What should `"0000"` become after normalization?
A. `"0000"`  
B. `"000"`  
C. `"0"`  
D. `""`  

**Answer: C**

### Q131. What is the time complexity of the monotonic-stack solution?
A. O(n²)  
B. O(n)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: B**

### Q132. Why is the stack solution O(n) even though there is a `while` inside the loop?
A. Each digit can be pushed and popped only a limited number of times  
B. The inner loop never executes  
C. Java optimizes every loop  
D. The stack has constant size  

**Answer: A**

---

# 12. Implement Stack Using Queue

### Q133. What behavior must be simulated?
A. FIFO  
B. LIFO  
C. Priority queue behavior  
D. Random access  

**Answer: B**

### Q134. In the two-queue approach, what is the role of `q1`?
A. It stores the current stack order  
B. It stores only deleted values  
C. It stores minimum values  
D. It stores indexes  

**Answer: A**

### Q135. What is the role of `q2`?
A. Helper queue used during `push()`  
B. Permanent storage only  
C. Output queue  
D. Priority queue  

**Answer: A**

### Q136. Why does the two-queue approach move all elements from `q1` to `q2` during push?
A. To place the new element at the front of `q1`  
B. To sort the elements  
C. To delete the old elements  
D. To reverse both queues permanently  

**Answer: A**

### Q137. After adding the new element to `q1`, what happens to elements in `q2`?
A. They are discarded  
B. They are moved back to `q1`  
C. They are pushed into a stack  
D. They are sorted  

**Answer: B**

### Q138. Why can `pop()` be O(1) in this approach?
A. The top stack element is maintained at the front of `q1`  
B. Queues are LIFO  
C. The queue automatically sorts  
D. Two queues make all operations constant  

**Answer: A**

### Q139. What is the time complexity of `push(x)` in the two-queue approach?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q140. What is the time complexity of `pop()` in the described two-queue approach?
A. O(n)  
B. O(1)  
C. O(log n)  
D. O(n²)  

**Answer: B**

### Q141. Which alternative has O(1) push and O(n) pop?
A. Pop-costly two-queue approach  
B. The described push-costly approach  
C. One queue with rotation  
D. Minimum stack  

**Answer: A**

### Q142. Which one-queue approach can achieve O(n) push and O(1) pop?
A. Rotate the queue after insertion  
B. Sort the queue  
C. Reverse the queue after pop  
D. Use a heap  

**Answer: A**

### Q143. What is the main trade-off of the described implementation?
A. Push is expensive, pop is cheap  
B. Push is cheap, pop is expensive  
C. Both are O(n²)  
D. Both require sorting  

**Answer: A**

### Q144. What happens if `pop()` is called when `q1` is empty in the uploaded implementation?
A. It returns `-1`  
B. It inserts zero  
C. It returns 0  
D. It reverses q2  

**Answer: A**

---

# 13. Implement Queue Using Stacks

### Q145. What behavior must be simulated?
A. LIFO  
B. FIFO  
C. Priority order  
D. Sorted order  

**Answer: B**

### Q146. What are the two stacks called in the uploaded implementation?
A. `q1` and `q2`  
B. `stackIn` and `stackOut`  
C. `front` and `rear`  
D. `pushStack` and `popQueue`  

**Answer: B**

### Q147. What does `stackIn` primarily handle?
A. Incoming elements  
B. Only removed elements  
C. Minimum values  
D. Parentheses  

**Answer: A**

### Q148. What does `stackOut` provide?
A. The front of the simulated queue when nonempty  
B. The largest element  
C. The newest element only  
D. A sorted sequence  

**Answer: A**

### Q149. What happens during `push(x)`?
A. Push directly into `stackIn`  
B. Move everything to `stackOut`  
C. Pop from `stackIn`  
D. Sort both stacks  

**Answer: A**

### Q150. When does `pop()` transfer elements from `stackIn` to `stackOut`?
A. Every time  
B. Only when `stackOut` is empty  
C. Only when `stackIn` is empty  
D. Never  

**Answer: B**

### Q151. Why does moving elements from `stackIn` to `stackOut` create FIFO behavior?
A. The reversal makes the oldest inserted element appear on top of `stackOut`  
B. It sorts the elements  
C. It deletes the newest element  
D. StackOut is actually a queue  

**Answer: A**

### Q152. What does `peek()` do when `stackOut` is empty?
A. Transfers `stackIn` to `stackOut`, then returns `stackOut.peek()`  
B. Returns `stackIn.peek()` directly  
C. Clears both stacks  
D. Returns -1 without checking  

**Answer: A**

### Q153. What is the time complexity of `push()`?
A. O(1)  
B. O(n)  
C. O(log n)  
D. O(n²)  

**Answer: A**

### Q154. What is the amortized time complexity of `pop()` and `peek()`?
A. O(n²)  
B. O(log n)  
C. O(1) amortized  
D. O(n) amortized  

**Answer: C**

### Q155. What is the worst-case time of one `pop()`?
A. O(1) always  
B. O(n), when all elements must be transferred  
C. O(log n)  
D. O(n²)  

**Answer: B**

### Q156. What is the space complexity of the two-stack queue implementation?
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

**Answer: C**

### Q157. What does `empty()` return?
A. `stackIn.isEmpty() || stackOut.isEmpty()`  
B. `stackIn.isEmpty() && stackOut.isEmpty()`  
C. `stackIn.size() == stackOut.size()`  
D. `stackOut.isEmpty()` only  

**Answer: B**

### Q158. If `stackIn = [1,2,3]` with 3 at the top and `stackOut` is empty, what will be the top of `stackOut` after transfer?
A. 1  
B. 2  
C. 3  
D. Empty  

**Answer: A**

### Q159. Why is the transfer not repeated on every pop?
A. Once elements are in `stackOut`, their order already supports FIFO removal  
B. StackOut cannot be popped twice  
C. It would make the queue sorted  
D. Java forbids moving elements twice  

**Answer: A**

### Q160. What is the key idea behind the two-stack queue?
A. Two reversals restore FIFO order  
B. Two stacks always behave as a queue  
C. Elements are sorted before removal  
D. The newest element is removed first  

**Answer: A**

---

# Mixed / Code-Tracing MCQs

## Cross-Problem Questions

### Q161. Which problem directly uses a monotonic-stack idea to minimize a numerical value?
A. Valid Parentheses  
B. Remove K Digits  
C. Basic Calculator  
D. Validate Stack Sequences  

**Answer: B**

### Q162. Which problem uses `-1` as an initial stack index?
A. Valid Parentheses  
B. Longest Valid Parentheses  
C. Remove K Digits  
D. Minimum Stack  

**Answer: B**

### Q163. Which problem uses two stacks specifically to simulate FIFO behavior?
A. Stack Using Queue  
B. Queue Using Stacks  
C. Minimum Stack  
D. RPN  

**Answer: B**

### Q164. Which problem uses two queues to simulate LIFO behavior in the described efficient approach?
A. Queue Using Stacks  
B. Stack Using Queue  
C. RPN  
D. Basic Calculator  

**Answer: B**

### Q165. Which problem uses an auxiliary structure to retrieve a minimum in O(1)?
A. Minimum Stack  
B. Partition List  
C. Longest Valid Parentheses  
D. Remove K Digits  

**Answer: A**

### Q166. Which problem requires preserving relative order within two partitions?
A. Partition List  
B. Validate Stack Sequences  
C. RPN  
D. Basic Calculator  

**Answer: A**

### Q167. Which problem uses `carry`?
A. Add Two Numbers  
B. Remove K Digits  
C. Basic Calculator  
D. Minimum Stack  

**Answer: A**

### Q168. Which problem evaluates operators after their operands?
A. Basic Calculator  
B. RPN  
C. Valid Parentheses  
D. Partition List  

**Answer: B**

### Q169. Which problem has a wildcard `*` that can act as `(`, `)`, or empty?
A. Valid Parentheses  
B. Valid Parentheses String  
C. Minimum Remove to Make Valid Parentheses  
D. Basic Calculator  

**Answer: B**

### Q170. Which problem specifically asks for the minimum number of parentheses to remove?
A. Longest Valid Parentheses  
B. Minimum Remove to Make Valid Parentheses  
C. Valid Parentheses String  
D. Valid Parentheses  

**Answer: B**

### Q171. Which problem asks for the length rather than the actual valid substring?
A. Longest Valid Parentheses  
B. Minimum Remove to Make Valid Parentheses  
C. Partition List  
D. Remove K Digits  

**Answer: A**

### Q172. Which problem verifies whether one sequence could be produced as a stack's pop sequence?
A. Validate Stack Sequences  
B. Queue Using Stacks  
C. RPN  
D. Add Two Numbers  

**Answer: A**

### Q173. Which algorithm relies on `result`, `sign`, and `num`?
A. Basic Calculator  
B. Remove K Digits  
C. Minimum Stack  
D. Partition List  

**Answer: A**

### Q174. Which operation is O(n) in the described two-queue Stack implementation?
A. pop  
B. push  
C. top if implemented as front  
D. empty  

**Answer: B**

### Q175. Which operation is O(1) in the described Queue-using-Stacks implementation?
A. push  
B. Worst-case pop  
C. Transfer  
D. Reversing all elements  

**Answer: A**

### Q176. Which concept is common to Valid Parentheses and Validate Stack Sequences?
A. Both simulate LIFO behavior  
B. Both use queues only  
C. Both use linked lists only  
D. Both require sorting  

**Answer: A**

### Q177. Which problem's two-pass greedy solution can use O(1) extra space?
A. Valid Parentheses String  
B. RPN  
C. Minimum Stack  
D. Longest Valid Parentheses stack approach  

**Answer: A**

### Q178. Which problem's output can be `"0"` after removing leading zeros?
A. Remove K Digits  
B. RPN  
C. Basic Calculator  
D. Minimum Stack  

**Answer: A**

### Q179. Which problem requires connecting a smaller list to a greater/equal list?
A. Partition List  
B. Add Two Numbers  
C. Queue Using Stacks  
D. RPN  

**Answer: A**

### Q180. Which problem can require a final node because of an unused carry?
A. Add Two Numbers  
B. Partition List  
C. Remove K Digits  
D. Basic Calculator  

**Answer: A**

### Q181. Which problem uses indices rather than characters in its stack?
A. Longest Valid Parentheses  
B. Valid Parentheses  
C. RPN  
D. Minimum Stack  

**Answer: A**

### Q182. Which problem's main stack stores characters?
A. Remove K Digits  
B. Validate Stack Sequences  
C. Longest Valid Parentheses  
D. Queue Using Stacks  

**Answer: A**

### Q183. Which problem's stack stores integer indices in its stack-based wildcard approach?
A. Valid Parentheses String  
B. RPN  
C. Basic Calculator  
D. Minimum Stack  

**Answer: A**

### Q184. Which problem can use a `StringBuilder` to construct the final answer after scanning?
A. Minimum Remove to Make Valid Parentheses  
B. Validate Stack Sequences  
C. Minimum Stack  
D. Add Two Numbers  

**Answer: A**

### Q185. Which problem's algorithm checks the next required popped element repeatedly while the stack top matches?
A. Validate Stack Sequences  
B. RPN  
C. Basic Calculator  
D. Partition List  

**Answer: A**

### Q186. Which operation in Minimum Stack should remain O(1) even when the stack contains 100,000 elements?
A. `getMin()`  
B. Searching for a value  
C. Sorting  
D. Printing all elements  

**Answer: A**

### Q187. In RPN, if the stack contains `a` below `b`, which values are used for `a - b`?
A. Pop `a` first, then `b`  
B. Pop `b` first, then `a`  
C. Only pop `a`  
D. Only pop `b`  

**Answer: B**

### Q188. In Basic Calculator, why are both the previous result and sign stored at `(`?
A. To restore the outer expression after calculating the inner expression  
B. To calculate multiplication  
C. To remove spaces  
D. To detect digits  

**Answer: A**

### Q189. What general principle explains why each element in Queue Using Stacks is transferred at most once before being popped?
A. Once transferred to `stackOut`, it remains there until removed unless new transfer is needed  
B. Stacks cannot be transferred twice  
C. Queue operations are always O(1)  
D. The elements are sorted  

**Answer: A**

### Q190. Which problem is fundamentally a stable partition rather than a sorting problem?
A. Partition List  
B. Remove K Digits  
C. RPN  
D. Minimum Stack  

**Answer: A**

### Q191. If a stack-based algorithm pushes every input character at most once and pops each at most once, what is the typical total time complexity?
A. O(n)  
B. O(n²)  
C. O(log n)  
D. O(2ⁿ)  

**Answer: A**

### Q192. Which operation follows FIFO by using a reversal of two LIFO structures?
A. Queue Using Stacks  
B. Stack Using Queue  
C. Minimum Stack  
D. Valid Parentheses  

**Answer: A**

### Q193. Which operation follows LIFO by rearranging queue elements so the newest element reaches the front?
A. Stack Using Queue  
B. Queue Using Stacks  
C. Add Two Numbers  
D. RPN  

**Answer: A**

### Q194. Which problem's efficient solution avoids changing the values stored in the original linked-list nodes?
A. Partition List  
B. RPN  
C. Minimum Stack  
D. Basic Calculator  

**Answer: A**

### Q195. Which problem specifically has a constraint that `pop()`, `top()`, and `getMin()` are called on a non-empty stack?
A. Minimum Stack  
B. Valid Parentheses  
C. Remove K Digits  
D. Partition List  

**Answer: A**

### Q196. Which expression demonstrates nested parentheses handling in Basic Calculator?
A. `1 + 2`  
B. `2 - (1 + 2)`  
C. `123`  
D. `7`  

**Answer: B**

### Q197. Which problem can reject a candidate immediately when its balance becomes negative in a left-to-right scan?
A. Valid Parentheses String  
B. Add Two Numbers  
C. Partition List  
D. RPN  

**Answer: A**

### Q198. Which problem requires both left-to-right and right-to-left reasoning in its greedy solution?
A. Valid Parentheses String  
B. Minimum Stack  
C. Validate Stack Sequences  
D. RPN  

**Answer: A**

### Q199. Which problem's stack base changes to the current index when an unmatched closing parenthesis is found?
A. Longest Valid Parentheses  
B. Valid Parentheses  
C. Minimum Remove to Make Valid Parentheses  
D. Basic Calculator  

**Answer: A**

### Q200. Which problem is best described as: “simulate one data structure using another while preserving its behavioral rule”?
A. Stack Using Queue / Queue Using Stacks  
B. Partition List  
C. Add Two Numbers  
D. Remove K Digits  

**Answer: A**

---

# Quick Answer Index

| Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|
| 1 | B | 2 | A | 3 | C | 4 | B |
| 5 | C | 6 | A | 7 | C | 8 | C |
| 9 | B | 10 | B | 11 | C | 12 | B |
| 13 | B | 14 | B | 15 | B | 16 | B |
| 17 | B | 18 | B | 19 | B | 20 | C |
| 21 | C | 22 | B | 23 | C | 24 | A |
| 25 | B | 26 | C | 27 | B | 28 | B |
| 29 | A | 30 | B | 31 | B | 32 | B |
| 33 | C | 34 | A | 35 | C | 36 | C |
| 37 | B | 38 | B | 39 | A | 40 | B |
| 41 | B | 42 | C | 43 | A | 44 | B |
| 45 | A | 46 | C | 47 | B | 48 | A |
| 49 | C | 50 | B | 51 | B | 52 | B |
| 53 | B | 54 | B | 55 | B | 56 | C |
| 57 | B | 58 | C | 59 | B | 60 | A |
| 61 | B | 62 | C | 63 | A | 64 | B |
| 65 | B | 66 | A | 67 | B | 68 | A |
| 69 | C | 70 | A | 71 | B | 72 | A |
| 73 | B | 74 | B | 75 | B | 76 | B |
| 77 | B | 78 | A | 79 | B | 80 | A |
| 81 | A | 82 | B | 83 | B | 84 | B |
| 85 | B | 86 | B | 87 | B | 88 | B |
| 89 | B | 90 | A | 91 | C | 92 | C |
| 93 | C | 94 | A | 95 | B | 96 | A |
| 97 | A | 98 | A | 99 | C | 100 | A |
| 101 | B | 102 | A | 103 | B | 104 | A |
| 105 | B | 106 | B | 107 | C | 108 | B |
| 109 | B | 110 | C | 111 | B | 112 | B |
| 113 | A | 114 | A | 115 | A | 116 | A |
| 117 | B | 118 | A | 119 | C | 120 | A |
| 121 | B | 122 | A | 123 | A | 124 | A |
| 125 | A | 126 | A | 127 | B | 128 | B |
| 129 | A | 130 | C | 131 | B | 132 | A |
| 133 | B | 134 | A | 135 | A | 136 | A |
| 137 | B | 138 | A | 139 | C | 140 | B |
| 141 | A | 142 | A | 143 | A | 144 | A |
| 145 | B | 146 | B | 147 | A | 148 | A |
| 149 | A | 150 | B | 151 | A | 152 | A |
| 153 | A | 154 | C | 155 | B | 156 | C |
| 157 | B | 158 | A | 159 | A | 160 | A |
| 161 | B | 162 | B | 163 | B | 164 | B |
| 165 | A | 166 | A | 167 | A | 168 | B |
| 169 | B | 170 | B | 171 | A | 172 | A |
| 173 | A | 174 | B | 175 | A | 176 | A |
| 177 | A | 178 | A | 179 | A | 180 | A |
| 181 | A | 182 | A | 183 | A | 184 | A |
| 185 | A | 186 | A | 187 | B | 188 | A |
| 189 | A | 190 | A | 191 | A | 192 | A |
| 193 | A | 194 | A | 195 | A | 196 | B |
| 197 | A | 198 | A | 199 | A | 200 | A |

---

## Topic Coverage

1. Partition List — 12 questions  
2. Add Two Numbers — 12 questions  
3. Minimum Stack — 12 questions  
4. Valid Parentheses — 12 questions  
5. Evaluate Reverse Polish Notation — 12 questions  
6. Valid Parentheses String — 12 questions  
7. Minimum Remove to Make Valid Parentheses — 12 questions  
8. Longest Valid Parentheses — 12 questions  
9. Basic Calculator — 12 questions  
10. Validate Stack Sequences — 12 questions  
11. Remove K Digits — 12 questions  
12. Stack Using Queue — 12 questions  
13. Queue Using Stacks — 16 questions  
14. Mixed/Code-Tracing — 40 questions

**Total: 200 MCQs**

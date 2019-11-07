/*
Nth Fibonacci

The Fibonacci sequence is defined as follows: The first number of the sequence is 0, the second number is 1,
and the nth number is the sum of the (n-1)th and (n-2)th numbers. 
Write a function that takes in an integer n and returns the nth Fibonacci number.

Sample input: 6
Sample output: 8
*/

/*
Complexity Analysis

Time complexity : O(N)O(N). Each value from 2 to N will be visited at least once. 
The time it takes to do this is directly proportionate to N where N is the Fibonacci Number 
we are looking to compute.

Space complexity : O(1)O(1). This requires 1 unit of Space for the integer N and 3 units of Space 
to store the computed values (curr, prev1 and prev2) for every loop iteration. 
The amount of Space doesn't change so this is constant Space complexity.

*/

var fib = function (N) {
	if (N <= 1) {
		return N;
	}
	if (N === 2) {
		return 1;
	} else {
		let current = 0;
		let prev1 = 1;
		let prev2 = 1;

		for (let i = 3; i <= N; i++) {
			current = prev1 + prev2;
			prev2 = prev1;
			prev1 = current;
		}
		return current;
	}
};

// Recursive, O(2^n)

/*
Complexity Analysis

Time complexity : O(2^N)
This is the slowest way to solve the Fibonacci Sequence because it takes exponential time. 
The amount of operations needed, for each level of recursion, grows exponentially as the depth approaches N.
*/
var fib = function (N) {
	return N < 2 ? N : fib(N - 1) + fib(N - 2);
};

console.log(fib(6));

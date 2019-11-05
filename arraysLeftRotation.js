/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2] .
Given an array a of n integers and a number, d , perform d left rotations on the array.
 Return the updated array to be printed as a single line of space-separated integers.
 

*/

function rotLeft (a, d) {
	const lastHalf = [];
	const firstHalf = [];
	for (let i = 0; i < d; i++) {
		lastHalf.push(a[i]);
	}
	for (let j = d; j < a.length; j++) {
		firstHalf.push(a[j]);
	}
	return firstHalf.concat(lastHalf);
}

const a = [ 1, 2, 3, 4, 5 ];

console.log(rotLeft(a, 2));

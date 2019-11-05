/**
 * Given an array of integers and an integer k,
 * you need to find the total number of continuous subarrays whose sum equals to k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Brute force.
var subarraySum = function (nums, k) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum += nums[j];
			if (sum === k) {
				count += 1;
			}
		}
	}
	return count;
};

//hashtable solution
var subarraySum = function (nums, k) {
	var hash = {},
		res = 0;
	hash[0] = 0;

	for (let i = 0; i < nums.length; i++) {
		hash[i + 1] = nums[i] + hash[i];
	}

	for (var x = 0; x < nums.length; x++) {
		for (var y = x; y < nums.length; y++) {
			if (hash[y + 1] - hash[x] === k) res++;
		}
	}

	return res;
};

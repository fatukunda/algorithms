/*
Given two strings, a and b, that may or may not be of the same length, 
determine the minimum number of character deletions required to make a and b anagrams.
 Any characters can be deleted from either of the strings.

*/

function makeAnagram (a, b) {
	var count = 0;
	let n = a.length;
	let m = b.length;
	for (let i = 0; i < n; i++) {
		b.includes(a[i]) ? (b = b.replace(a[i], '')) : count++;
	}
	return m - (n - count) + count;
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));

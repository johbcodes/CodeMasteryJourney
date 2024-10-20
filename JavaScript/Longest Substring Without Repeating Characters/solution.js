/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let right = 0;
  let left = 0;
  let max = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      right++;
    }
    max = Math.max(max, right - left);
  }
  return max;
};
function runTests() {
  const tests = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
  ];

  tests.forEach((test, index) => {
    const result = lengthOfLongestSubstring(test.input);
    console.log(`Test ${index + 1}:`);
    console.log(`Input: ${test.input}`);
    console.log(`Output: ${result}`);
    console.log(`Expected: ${test.expected}`);
    console.log(result === test.expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log("-----------------------------");
  });
}

// Run the tests
runTests();

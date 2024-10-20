function lengthOfLongestSubstring(s: string): number {
  const map: Map<string, number> = new Map();
  let maxLength: number = 0;
  let left: number = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (map.has(char)) {
      left = Math.max(map.get(char)! + 1, left);
    }

    map.set(char, right);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Caller function to test with different inputs
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

// Run all tests
runTests();

function lengthOfLongestSubstring(s) {
    var map = new Map();
    var maxLength = 0;
    var left = 0;
    for (var right = 0; right < s.length; right++) {
        var char = s[right];
        if (map.has(char)) {
            left = Math.max(map.get(char) + 1, left);
        }
        map.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength + 1;
}
// Caller function to test with different inputs
function runTests() {
    var tests = [
        { input: "abcabcbb", expected: 3 },
        { input: "bbbbb", expected: 1 },
        { input: "pwwkew", expected: 3 },
    ];
    tests.forEach(function (test, index) {
        var result = lengthOfLongestSubstring(test.input);
        console.log("Test ".concat(index + 1, ":"));
        console.log("Input: ".concat(test.input));
        console.log("Output: ".concat(result));
        console.log("Expected: ".concat(test.expected));
        console.log(result === test.expected ? "✅ Test Passed" : "❌ Test Failed");
        console.log("-----------------------------");
    });
}
// Run all tests
runTests();

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

(function testFindMedianSortedArrays() {
  let nums1 = [1, 3];
  let nums2 = [2];
  console.log("Test 1 - Expected output: 2, Actual output: ", findMedianSortedArrays(nums1, nums2)); // Output should be 2

  nums1 = [1, 2];
  nums2 = [3, 4];
  console.log("Test 2 - Expected output: 2.5, Actual output: ", findMedianSortedArrays(nums1, nums2)); // Output should be 2.5

  nums1 = [0, 0];
  nums2 = [0, 0];
  console.log("Test 3 - Expected output: 0, Actual output: ", findMedianSortedArrays(nums1, nums2)); // Output should be 0

  nums1 = [];
  nums2 = [1];
  console.log("Test 4 - Expected output: 1, Actual output: ", findMedianSortedArrays(nums1, nums2)); // Output should be 1

  nums1 = [2];
  nums2 = [];
  console.log("Test 5 - Expected output: 2, Actual output: ", findMedianSortedArrays(nums1, nums2)); // Output should be 2
})();

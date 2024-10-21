<?php

/**
 * @param Integer[] $nums1
 * @param Integer[] $nums2
 * @return Float
 */
function findMedianSortedArrays($nums1, $nums2)
{
  $merged = [];
  $i = 0;
  $j = 0;

  // Merge both arrays
  while ($i < count($nums1) && $j < count($nums2)) {
    if ($nums1[$i] < $nums2[$j]) {
      $merged[] = $nums1[$i++];
    } else {
      $merged[] = $nums2[$j++];
    }
  }

  // If nums1 still has elements, add them to the merged array
  while ($i < count($nums1)) {
    $merged[] = $nums1[$i++];
  }

  // If nums2 still has elements, add them to the merged array
  while ($j < count($nums2)) {
    $merged[] = $nums2[$j++];
  }

  $mid = floor(count($merged) / 2);

  // Calculate median
  if (count($merged) % 2 === 0) {
    return ($merged[$mid - 1] + $merged[$mid]) / 2;
  } else {
    return $merged[$mid];
  }
}

// Testing the function
function testFindMedianSortedArrays()
{
  // Test case 1
  $nums1 = [1, 3];
  $nums2 = [2];
  echo "Test 1 - Expected output: 2, Actual output: " . findMedianSortedArrays($nums1, $nums2) . "\n";

  // Test case 2
  $nums1 = [1, 2];
  $nums2 = [3, 4];
  echo "Test 2 - Expected output: 2.5, Actual output: " . findMedianSortedArrays($nums1, $nums2) . "\n";

  // Test case 3
  $nums1 = [0, 0];
  $nums2 = [0, 0];
  echo "Test 3 - Expected output: 0, Actual output: " . findMedianSortedArrays($nums1, $nums2) . "\n";

  // Test case 4
  $nums1 = [];
  $nums2 = [1];
  echo "Test 4 - Expected output: 1, Actual output: " . findMedianSortedArrays($nums1, $nums2) . "\n";

  // Test case 5
  $nums1 = [2];
  $nums2 = [];
  echo "Test 5 - Expected output: 2, Actual output: " . findMedianSortedArrays($nums1, $nums2) . "\n";
}

// Run the test cases
testFindMedianSortedArrays();

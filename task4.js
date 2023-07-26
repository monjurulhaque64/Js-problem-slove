// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function findTwoNumbersWithSum(arr, target) {
    let l = 0;
    let r = arr.length - 1;
  
    while (l < r) {
      const sum = arr[l] + arr[r];
      if (sum === target) {
        return [l, r];
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  
    return [];
  }
  
  const array = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const result = findTwoNumbersWithSum(array, target);
  console.log(result);
  
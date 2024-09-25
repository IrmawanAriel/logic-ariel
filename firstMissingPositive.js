/*
Given an unsorted integer array nums, find the smallest missing positive integer.
Input: An unsorted array of integers nums[] which may contain both positive and negative numbers.
Output: Return the smallest missing positive integer.

Example:
Input: [1, 2, 0]
Output: 3
Explanation: The numbers 1 and 2 are present, so the smallest missing positive integer is 3.

Input: [3, 4, -1, 1]
Output: 2
Explanation: The smallest missing positive integer is 2.

Input: [7, 8, 9, 11, 12]
Output: 1
Explanation: The smallest missing positive integer is 1 since none of the positive integers starting from 1 are present.
*/


function firstMissingPositive(arr) {
  /**
   * var searchDomain = []
   * storedNumber = []
   * result = []
   * 
   * looping dari nilai awal { // pisahkan array yang bernilai positif
   *  jika (arr[i]>0) {
   *    searchDomain.push(arr[i])
   *   }
   * }
   * 
   * looping berdasarkan jumlah element searchDomain, lalu assign [i] kedalam storedNumber
   * 
   * loopping pengecekan if(apakah storedNumber[i] tidak ada didalam searchDomain){
   *  result.push(storedNumber[i])
   * }
   * 
   * akhir : ambil angka terkecil {
   *  return result[0]
   * }
   * 
   */

  var searchDomain = []
  var storedNumber = []
  var result = []

  for (i = 0; i < arr.length; i++) { //working
    if (arr[i] > 0) {
      searchDomain.push(arr[i])
    }
  }

  for (var i = 1; i <= searchDomain.length + 1; i++) { // storedNumber dibuat menjadi n+1
    storedNumber.push(i);
  }

  for(i=0; i<storedNumber.length ; i++){
      if(!searchDomain.includes(storedNumber[i])){
        result.push(storedNumber[i])
    }
  }

  return result[0]

}

arr = [1, 2, 3, 4, 6, 0]
firstMissingPositive(arr)

module.exports = firstMissingPositive;
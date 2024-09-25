// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null


function maxSubarraySum(arr,n) {
    /**
     * buat var StoredNumber = []
     * 
     * looping berdasarkan i<=arr.length{
     *  storedNumber[i] = 0
     *  looping bersaarkan j=i ; j<= i+n-1{ // n-1 karna element dihitung dari 0 
     *     if(storedNumber[i]) {
     *          storedNumber[i] += arr[j] 
     *      }
     *  }
     * }
     * 
     * return StoredNumber[0] ->sorted array dari terbersar
    */

    var StoredNumber = []

    if(arr.length <=0 ) return null;

    for(i=0; i<arr.length ; i++){

        StoredNumber[i] = 0

        for(j=i; j<= i+n-1 ; j++){ // n-1 karna element dihitung dari 0 
            StoredNumber[i] += arr[j] 
        }

    }

    return StoredNumber.sort(function(a, b){return b - a})[0]

}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))

module.exports = maxSubarraySum;

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*.
function validAnagram(w1, w2) {


  /**
   * var w1AlphabetCount = {}
   * var w2AlphabetCount = {}
   * 
   * // check w1
   * for(i=0; i<w1.length; i++){
   *  if (w1[i] in w1AlphabetCount){
   *        w1AlphabetCount[w1[i]] += 1
   *      } else {
   *        w1AlphabetCount[w1[i]] = 1
   *      }
   * }
   * 
   * // check w2
    * for(i=0; i<w2.length; i++){
   *  if (w2[i] in w2AlphabetCount){
   *        w2AlphabetCount[w2[i]] += 1
   *      } else {
   *        w2AlphabetCount[w2[i]] = 1
   *      }
   * }
   * 
   * akhir: lakukan pengecekan true false
   * 
   */

  if(w1.length !== w2.length) return false

  var w1AlphabetCount = {}
  var w2AlphabetCount = {}

  for (i = 0; i < w1.length; i++) {
    if (w1[i] in w1AlphabetCount) {
      w1AlphabetCount[w1[i]] += 1
    } else {
      w1AlphabetCount[w1[i]] = 1
    }
  }

  for (i = 0; i < w2.length; i++) {
    if (w2[i] in w2AlphabetCount) {
      w2AlphabetCount[w2[i]] += 1
    } else {
      w2AlphabetCount[w2[i]] = 1
    }
  }

  for(let key in w1AlphabetCount) {
    if(!(key in w2AlphabetCount ) || (w1AlphabetCount[key] !== w2AlphabetCount[key]) ){
      return false
    }
  }

  return true

}

console.log(validAnagram('aazs', 'szaa'))

module.exports = validAnagram;

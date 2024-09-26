/*
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list. [Kuya]

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
Example:
- abcd

The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/


function biggerIsGreater(word) {

    /**
     * cari huruf yang lebih kecil dari dari huruf sbelah kanannya
     * let i ;
     * loop(i=char.lenght -1; i>0;i--){
     *  if(char[i-1]<char[i]) maka berhentika looping
     * }
     * 
     * pivot = i-1
     * loop(j=char.length-1; i>pivot;i--){
     *  if(char[j]>char[pivot]) berhentikan looping
     * }
     * 
     * tukar element j dengan element pivot
     * 
     * baru sorting huruf sisi kanan pivot
     * 
     * akhir: lalu satukan dari array 0 - array pivot
     * 
     * return hasilnya
     * 
     */


    const chars = word.split('');
    // cari huruf yang lebih kecil dari sebelah kanannya (cari dari kanan)
    let i;
    for (i = chars.length - 1; i > 0; i--) {
        if (chars[i - 1] < chars[i]) break;
    }
    
    if (i === 0) return 'no answer'; // Jika tidak ada pivot ditemukan, kembalikan 'no answer'
    
    const pivot = i - 1;// cari karakter pengganti
    let j;
    for (j = chars.length - 1; j > pivot; j--) {
        if (chars[j] > chars[pivot]) break;
    }
    
    [chars[pivot], chars[j]] = [chars[j], chars[pivot]];// Tukar karakter

    // Urutkan sisa karakter
    const right = chars.slice(pivot + 1).sort();
    const result = chars.slice(0, pivot + 1).concat(right).join('');

    return result;
}
console.log(biggerIsGreater('ab'));   
console.log(biggerIsGreater('adcb'));  
console.log(biggerIsGreater('hefg'));  
console.log(biggerIsGreater('dhck')); 
console.log(biggerIsGreater('dkhc')); 

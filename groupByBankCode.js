// Please group the array of objects by bankCode and calculate the total incoming and outgoing balances for each bank.
// The data is stored in an array of objects, with each object containing a bankCode, a balance_InOut value,
// and a transactionType indicating whether the balance is incoming or outgoing.


// Expected result
/*
{
  "SP-0329": {
    "totalDanaMasuk": 700000,
    "totalDanaKeluar": 1250000
  },
  "SP-1234": {
    "totalDanaMasuk": 2300000,
    "totalDanaKeluar": 1300000
  },
  "SP-5678": {
    "totalDanaMasuk": 750000,
    "totalDanaKeluar": 850000
  },
  "SP-8765": {
    "totalDanaMasuk": 300000,
    "totalDanaKeluar": 1750000
  },
  "SP-4321": {
    "totalDanaMasuk": 150000,
    "totalDanaKeluar": 700000
  }
}
*/


const arr = [
  {bankCode: 'SP-0329', balance_InOut: 500000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-1234', balance_InOut: 750000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-5678', balance_InOut: 300000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 450000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-1234', balance_InOut: 600000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-8765', balance_InOut: 850000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 950000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 100000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-0329', balance_InOut: 200000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-0329', balance_InOut: 400000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-0329', balance_InOut: 650000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 550000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-5678', balance_InOut: 250000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-4321', balance_InOut: 700000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-8765', balance_InOut: 300000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-0329', balance_InOut: 200000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-1234', balance_InOut: 750000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-5678', balance_InOut: 500000, transactionType: 'Dana Keluar'},
  {bankCode: 'SP-4321', balance_InOut: 150000, transactionType: 'Dana Masuk'},
  {bankCode: 'SP-8765', balance_InOut: 900000, transactionType: 'Dana Keluar'}
];


function groupByBankCode(arr) {
  /**
   * buat var penyimpanan : var Stored_Bank
   * 
   * looping { 
   *    cek dari awal sampai akhir {
   *        jika bankCode[i] sudah ada di StoredBank {
   *            maka dana kluar masuknya di assign where = bankCode ===}
   *        else {
   *            buat object baru dengan bankCode tersebut dan assign dana kluar masuknya
   *        }
   *    }
   * }
   * 
   * 
   **/

  var Stored_Bank = {}

  for(i = 0; i < arr.length ; i++){

    if(arr[i].bankCode in Stored_Bank){

      if(arr[i].transactionType === 'Dana Masuk'){
        Stored_Bank[arr[i].bankCode].totalDanaMasuk += arr[i].balance_InOut
      } 
      
      if(arr[i].transactionType === 'Dana Keluar') {
        Stored_Bank[arr[i].bankCode].totalDanaKeluar += arr[i].balance_InOut
      }

    } else {

      var DanaMasuk = 0
      var DanaKeluar = 0

      if(arr[i].transactionType === 'Dana Masuk'){
        DanaMasuk += arr[i].balance_InOut
      } 
      
      if(arr[i].transactionType === 'Dana Keluar') {
        DanaKeluar += arr[i].balance_InOut
      }

      Stored_Bank = {
        ...Stored_Bank, 
        [arr[i].bankCode] : {
          "totalDanaMasuk" : DanaMasuk,
          "totalDanaKeluar" : DanaKeluar
        }
      }
    }
  }

  return Stored_Bank

}

console.log(groupByBankCode(arr))

module.exports = groupByBankCode;

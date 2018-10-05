function countProfit(shoppers) {
    var result=[]
    var pembeli=[]
    var jumlah = 0
    
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    for(var i=0; i<3; i++){
      resultObj={}
      resultObj={
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
      }
  
      result.push(resultObj)
      
    }
    
    for(var i=0 ; i<shoppers.length-1;i++){
  
      for(var j=0; j<3; j++){
        if(listBarang[i][0]===shoppers[i].product){
          var indexBarang = listBarang[i].indexOf(shoppers[i].product)
          var jumlahBarangawal = listBarang[indexBarang][2]
        }
      }
      // console.log('indexBarang',indexBarang)
      // console.log("jumlah beli",shoppers[i].amount)
      // console.log("stok",listBarang[indexBarang][2])
  
      //jika jumlah stok memenuhi
      if(shoppers[i].amount <= listBarang[indexBarang][2]){
          
          // console.log('produk 1',shoppers[i].product)
          // console.log('produk 2',shoppers[i+1].product)
  
            if(shoppers[i].product===shoppers[i+1].product){
                // console.log('pembeli 1',shoppers[i].name)
                pembeli.push(shoppers[i].name)
                jumlah += shoppers[i].amount
                listBarang[indexBarang][2] -= jumlah
                // console.log('count', jumlah)
                // console.log('stok sekarang',listBarang[indexBarang][2])
  
                // if(i===shoppers.length-2){
                //   pembeli.push(shoppers[i].name)
                //   jumlah += shoppers[i].amount
                //   listBarang[indexBarang][2] -= jumlah
                //   console.log('pembeli fix',shoppers[i].name)
                //   console.log('pembeli total',pembeli)
                //   console.log('count fix', jumlah)
                //   console.log('stok sekarang fix',listBarang[indexBarang][2])
  
                //   resultObj.product= shoppers[i].product,
                //   resultObj.shoppers= pembeli,
                //   resultObj.leftOver= jumlahBarangawal - jumlah,
                //   resultObj.totalProfit= listBarang[indexBarang][1] * jumlah 
  
                //   result.push(resultObj)
                }
            else{
                pembeli.push(shoppers[i].name)
                jumlah += shoppers[i].amount
                listBarang[indexBarang][2] -= jumlah
                // console.log('pembeli fix',shoppers[i].name)
                // console.log('pembeli total',pembeli)
                // console.log('count fix', jumlah)
                // console.log('stok sekarang fix',listBarang[indexBarang][2])
  
                result[indexBarang].product= shoppers[i].product,
                result[indexBarang].shoppers= pembeli
                result[indexBarang].leftOver= jumlahBarangawal - jumlah
                result[indexBarang].totalProfit= listBarang[indexBarang][1] * jumlah 
  
                //result.push(resultObj)
                //console.log(result)
            //pembeli = []
            //jumlah=0
            //resultObj={}
                // if(i===shoppers.length-2){
                //   pembeli.push(shoppers[i].name)
                //   jumlah += shoppers[i].amount
                //   listBarang[indexBarang][2] -= jumlah
  
                //   resultObj.product= shoppers[i].product,
                //   resultObj.shoppers= pembeli,
                //   resultObj.leftOver= jumlahBarangawal - jumlah,
                //   resultObj.totalProfit= listBarang[indexBarang][1] * jumlah 
  
                //   result.push(resultObj)
  
                pembeli.push(shoppers[i].name)
                jumlah += shoppers[i].amount
                listBarang[indexBarang][2] -= jumlah
  
                result[indexBarang].product= shoppers[i].product,
                result[indexBarang].shoppers= pembeli
                result[indexBarang].leftOver= jumlahBarangawal - jumlah
                result[indexBarang].totalProfit= listBarang[indexBarang][1] * jumlah 
                // }
            }
         
      }
      
    }
    return result
    //console.log(result)
  }
  //console.log(countProfit('a'))
  
  
  // // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  // [ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  //-----------------------------------------------------------
  
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  
  //-----------------------------------------------------------
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [],
  // //     leftOver: 10,
  // //     totalProfit: 0 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [],
  // //     leftOver: 2,
  // //     totalProfit: 0 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [],
  // //     leftOver: 1,
  // //     totalProfit: 0 } ]
  // // console.log(countProfit([])); //[]
  
  
  
  
  // let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
  //                      ['Baju Zoro', 500000, 2],
  //                      ['Sweater Uniklooh', 175000, 1]
  //                    ];
  
  // console.log(listBarang[2][2])
  // console.log(listBarang[0].indexOf(10))
  
  // console.log()
  
  // var beli=[{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]
  
  // console.log(beli.length)
  // console.log(beli[beli.length-1].amount)
  
  
  // beli[beli.length-1].amount = 10
  // console.log(beli[beli.length-1].amount)
  
  
  
  
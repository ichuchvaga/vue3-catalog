const fs = require('node:fs');

const brands = require('./data/brands.js');
const scales = require('./data/scales.js');

const brands_total = brands.length;
const scales_total = scales.length;

const baseProduct = {
  "img": "product-1.jpg",
  "imgSmall": "product-1-sm.jpg",
  "price": "2499",
  "name": "Сборная модель Экскаватор UDS-114 Tatra",
  "scale": "1:43",
  "brand": "AVD Models",
  "rating": "3.5",
  "reviews": "12",
  "inStock": true,
  "id": "1",
  "purchasesCount": "200",
  "discount": "10",
  "new": false
};

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let product_id = 1;
let result_products = [];

brands.map(brand => {
  const productNumberForBrand = getRandom(5,15);

  for(let i=0; i<productNumberForBrand; i++) {
    let newProduct = {...baseProduct};
    const imgNumber = getRandom(1,4);
    
    newProduct.name = "Сборная модель Экскаватор UDS-"+getRandom(100,200)+" Tatra";
    newProduct.brand = brand;
    newProduct.reviews = getRandom(10,2500);
    newProduct.inStock = (product_id % 10 == 0) ? false : true;
    newProduct.purchasesCount = getRandom(10,2500);
    newProduct.discount = ((product_id % 10) == 0) ? getRandom(5,30): 0;
    newProduct.img = 'product-'+imgNumber+'.jpg';
    newProduct.imgSmall = 'product-'+imgNumber+'-sm.jpg';
    newProduct.video = (product_id % 20 == 0) ? true : false;
    newProduct.rating = getRandom(30,50) * 0.1;
    newProduct.scale = scales[getRandom(0,scales_total - 1)];
    newProduct.price = (getRandom(21,75) * 100) - 1;
    newProduct.id = product_id;
    newProduct.new = (product_id % 20 == 0) ? true : false;
    
    result_products.push(newProduct);
    product_id++;
  } 
});

fs.writeFile('./products_randomized.json', JSON.stringify(result_products), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
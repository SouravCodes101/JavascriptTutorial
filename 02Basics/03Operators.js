var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100 ;

console.log("Discount percentage is :" + discountPercent);

var displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
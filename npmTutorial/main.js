var moment = require('moment'); 
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment().format('LL');
console.log(myDate);
console.log(myCoolDate);

var myList = [1,2,1,1,1,1,3,3,4,5,6,4,4,7];
var myUniqueList = unique(myList);
console.log(myUniqueList);
( function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController' , AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
var tobuy = this;
tobuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
tobuy.moveItems = function(itemIndex) {
ShoppingListCheckOffService.moveItems(itemIndex);
};
}

AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var alreadybought =this;

alreadybought.boughtList = ShoppingListCheckOffService.getBoughtItems();
}



function ShoppingListCheckOffService ()
{
  var service = this;
  var itemstoBuy = [
    {
      name : "Cookies",
      quantity :10
    },
    {
      name:"Chocolates",
      quantity:20
    },
    {
      name:"Drinks",
      quantity:30
    },
    {
      name:"Donuts",
      quantity: 12
    },
    {
      name:"Doritos",
      quantity:5
    }
  ];

var alreadyboughtList = [];


service.moveItems = function(itemIndex) {
alreadyboughtList.push(itemstoBuy[itemIndex]);
itemstoBuy.splice(itemIndex,1);
};

service.getToBuyItems = function() {
return itemstoBuy;
};

service.getBoughtItems = function () {
  return alreadyboughtList;
}

}
})();

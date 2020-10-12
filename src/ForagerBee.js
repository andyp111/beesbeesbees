var ForagerBee = function(bee) {
  Bee.call(this, bee);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.forage = function(val) {
  this.treasureChest.push(val);
}

ForagerBee.prototype.constructor = ForagerBee;
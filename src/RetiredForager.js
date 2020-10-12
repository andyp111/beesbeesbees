var RetiredForagerBee = function(foragerBee) {
  ForagerBee.call(this, ForagerBee);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
RetiredForagerBee.prototype = Object.create(Grub.prototype);

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(val) {
  this.treasureChest.push(val);
}
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
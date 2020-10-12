var HoneyMakerBee = function(bee) {
  Bee.call(this, bee);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
}
HoneyMakerBee.prototype.giveHoney  = function() {
  this.honeyPot -= 1;
}
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(string) {
  this.food.pop(); //fix this
  return this;
}
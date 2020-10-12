var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(string) {
  if (string === this.food) {
    return 'I have eaten jelly';
  } else {
    return 'I can\'t eat this'
  }
}
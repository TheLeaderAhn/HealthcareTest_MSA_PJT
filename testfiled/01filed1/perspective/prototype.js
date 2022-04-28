function User (name, interests) {
    this.name = name;
    this. interests = interests;
}

User.prototype.greeting = function () {
    console.log('Hi I\'m' +this.name + '.');
}
//console.log('User.constructor === Function : ',User.constructor === Function); // true 출력
//console.log ('User.prototype.constructor === User : '+User.prototype.constructor === User);
function Teammember (name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
}
Teammember.prototype = Object.create(User.prototype);
Teammember.prototype.greeting = function () {
    console.log('I\'m ' + this.name + '. Welcome to the team!');
};
Teammember.prototype.work = function () {
    console.log('I\'m working on ' + this.tasks.length + ' tasks');
};
var member = new Teammember('Sunny', ['Traveling'],['Buy three tickets', 'Book a hotel']);
member.greeting() ;  // I'm Sunny. Welcome to the team!
member.work();

User.prototype.eat();
Object.prototype.move();

var alien = {};
alien.move();
User.move();

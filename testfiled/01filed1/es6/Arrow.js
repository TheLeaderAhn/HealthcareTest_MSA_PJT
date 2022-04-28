const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}, {name: 'Banana', price: 120}];

// 인자가 없을때는  () 빈 괄호가 필요하다
var countFruits = () => fruits.length;
var countFruits = function () {
    return fruits.length
}
console.log(countFruits());

// 인자가 있을때, 괄호는 생략 가능하다.
fruits.filter(fruit => fruit.price >= 100);
//es5
fruits.filter(function(fruit) {
    return fruit.price > 100;
});

// 함수가 객체 리터럴을 반환할 때 곽호로 감싸야 한다.
var inventory = fruits.map(fruit => ({name:fruit.name, storage:1}))
//es5 ver
var inventory = fruits.map(function (fruit) {
    return {
      name: fruit.name,
      storage: 1
    };
  });

  var inventory = fruits.map(fruit => {
    console.log('Checking ' + fruit.name + ' storage');
    return {name: fruit.name, storage: 1};
  });
  // equivalent to ES5
  var inventory = fruits.map(function (fruit) {
    console.log('Checking ' + fruit.name + ' storage');
    return {name: fruit.name, storage: 1};
  });

// Arrow 함수는 자기자신을 this를 가지지 않는다
var shoppingCart = {
    items : ['Apple', 'Orange'],
    inventory: {Apple:1, Orange:0},
    checkout() {
        this.items.forEach(item =>{
            if (!this.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        })
    }
}
shoppingCart.checkout();




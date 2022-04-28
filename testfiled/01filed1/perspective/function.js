const { objectToString } = require("@vue/shared");

// 객체 생성 종류
var user = new Object();
user.name = 'jaeyoung';
user.interests = ['Football', 'books reading'];
user.greeting = function () {
    console.log ('Hi , im '+ this.name +'.')
}

user.greeting(); // 실행

// 권장 getter/ setter활용

var User = {
    get role() {
        return 'Engineer';
    }
}

User.role;

// 생성자 함수
function User(name, interests) {
    this.name = name;
    this.interests = interests;
    this.greeting = function() {
        console.log ('안녕 나는 ' +this.name +' 이야');
    }
}

var userAhn = new User('재영', ['축구','미술품 관람']);
userAhn.greeting();

var user = new User;
console.log('user.name' + user.name);

// Object.create() 메소드 활용

var user = Object.create(User.prototype, {
    name : { value :'java'},
    interests: {value : ['asdf', 'game']}
});

user.greeting();
User.prototype.greeting  = function() {
    console.log('안녕 나야 ' + this.name);
}

user.greeting(); ///
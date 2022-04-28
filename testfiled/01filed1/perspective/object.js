// Object, undefined, Null, boolean, symbol, Number
var obj = {};
obj['100'] = 'one hundred';

console.log(obj[100]);

// foo bar 모두 문자열 배열[object, object];
var foo = {prop: 'f'}, bar = {prop:'b'};
obj[foo] = 'Foo'

console.log('obj[bar] : ' ,obj[bar]); //'Foo' 출력

function User(name, department) {
    var _department =  department;
    var _name = name;
    Object.defineProperty(this, 'name', {
        value :  _name,
        writable: true,
        enumerable: true,
        configurable: false
    });
    Object.defineProperties(this, 'department', {
        get: function() {
            console.log('Retriveing department');
            return _department;
        },
        set: function(newValue){
            console.log('Updateing department value to [ ' + newValue + ' ]');
            _department = newValue;
        },
        enumerable : true,
        configurable : false
    });
    Object.defineProperties(this, 'greeting', {
        value : function() {
            console.log('Hi I\'m ' +_name +'.');
        },
        enumerable: false,
        configurable: false
    });    
}

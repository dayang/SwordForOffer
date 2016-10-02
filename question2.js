//实现单例模式
// 单例模式1
//构造函数返回return 如果时对象，则返回该对象，否则返回构造对象
function Singleton1(){
    if(typeof Singleton1.instance === "object"){
        return Singleton1.instance;
    }

    Singleton1.instance = this;
}
var s1, s2;
s1 = new Singleton1();
s2 = new Singleton1();
console.log(s1 === s2);

//单例模式2
var Singleton2 = (function(){
    var instance;
    function init(){
        // 这里定义单例代码
        return {
            publicMethod: function(){
                console.log("Hello singleton");
            },
            publicProperty: 'singleton'
        }
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
}());

s1 = Singleton2.getInstance();
s2 = Singleton2.getInstance();
console.log(s1 === s2);
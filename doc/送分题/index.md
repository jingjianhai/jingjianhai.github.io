# 继承类型

1、构造继承
2、原型继承
3、实例继承
4、拷贝继承

## 原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。

    function Parent(){
        this.name = 'wang';
    }

    function Child(){
        this.age = 28;
    }
    Child.prototype = new Parent();//继承了Parent，通过原型

    var demo = new Child();
    alert(demo.age);
    alert(demo.name);//得到被继承的属性
    }
#### Author：zml

## 不积跬步无以至千里
整理了一些前端开发的教材内容


### 代码规范
变量命名
> * 命名尽量使用驼峰的方式 如：onChange
> * 变量使用单词的英文释义 如：密码->password
> * 属性：用名词 如：name,password
> * 方法：用动词或动名词 如：submit,doLogin

语句
> * 一律使用4个空格
> * ;要加
> * 左边大括号一律跟在语句后面
> * 合理在操作符前后添加空格
> * 根据代码关联性合理添加空行，最多只加一行
> * 能用最新写法的用最新写法

注释
> * 第一行说明函数的目的
> * @param  说明参数
> * @return 说明返回值
```js
    /**
     * 做加法运算
     * @param num1 array 加数1
     * @param num2 object 加数2
     * @return 运算结果
     */
    function add(num1, num2){
        return num1 + num2;
        console.log('', '', '')
    }
```
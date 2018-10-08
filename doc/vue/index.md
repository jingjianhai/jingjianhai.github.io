# 课程：vue
----
## 第一部分Es6入门
<!-- 课程内容   -->
### Es6的发展

##### 1.ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准

##### 2.ECMAScript 和 JavaScript 的关系:

    前者是后者的规格，后者是前者的一种实现

#####  3.ES6 与 ECMAScript 2015 的关系

    ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）

##### 4.语法提案的批准流程

    Stage 0 - Strawman（展示阶段）
    Stage 1 - Proposal（征求意见阶段）
    Stage 2 - Draft（草案阶段）
    Stage 3 - Candidate（候选人阶段）
    Stage 4 - Finished（定案阶段）

    一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。

### Es5和Es6的区别

Es5:

    var 声明变量

    1.声明变量未赋值undefined

    2.函数实参未传参undefined
    
区别:

    Es5:
    
    变量提升:
        var 存在变量提升，只要在声明之前调用，就会有变量提升，并且值为undefined
        
    Es6:
        变量提升：
            
            let 语句声明的变量没有变量提升
            
    暂时性死区的概念:在变量声明之前调用，就是该变量的暂时性死区

### Es6的特性

    命令 || 关键字
    
    // 特性
    
    (1)通过let关键字代替var来声明变量 用法与 var 几乎一致
    
    (2) 常量的值不允许被修改

    (3)变量、常量在相同作用域下不能重复定义
    
    (4)当let\const遇到 {} 会形成这个变量的块级作用域
    
    1.let 声明变量
    
    2.const 声明常量
    
    注:
    (1)Assignment to constant variable
    报错会阻断代码执行
    (2)Identifier 'name' has already been declared
    变量、常量在相同作用域下不能重复定义

### Es6的解构赋值

    // 1）数组的解构赋值
    
    = 左边的模式,用来声明变量;右边的模式,用来赋值
    let [a,b,c] = [1,2,3]
    Es允许按照一定模式,从数组和对象中提取值,对变量进行赋值,这被称为解构赋值
    
        eg:
        
        解构不成功，值为undefined
            
            1.模式不匹配
            let  [name]="hei";
            console.log(name)//undefined
            2.解构不成功(声明变量未赋值)
            let [name,age]=['hei'];
            console.log(name);//hei
            3.不完全解构
            let [name]=['hei',13]
            console.log(name)//hei
        2) 对象解构
        let {name:zs}={name:ls}
        console.log(zs)//name:ls
        
        3)字符串的解构赋值
        //会将字符串转换成类似数组的一个对象(类数组)
        let {length:len}='mmd'
        console.log(len) //3
        
        4)数值和布尔值的解构赋值
        
        解构赋值的规则是，只要等号右边的值不是对象或数组，就将其转为对象。
        //由于undefined和null无法转为对象，所以对它们进行解构赋值都会报错
        
        5)
            ①数组的解构赋值在函数中的应用
            let fun = function([name,age]){
                console.log(name);//zs
                console.log(age);//18
            }
            fn(['zs',18])
        
            ②对象的解构赋值在函数中的应用
            
        6)用途
            ①交换变量的值
            let x=1;
            let y=2;
            [x,y]=[y,x];
            ②通过数组解构赋值,返回一个值
            let fun = (val)=>{
                return [val];
            }
            console.log(fun('ls'));
            
            ③通过对象解构赋值来取json里面的参数
            
            const data = {
                "name":'zs',
                age:15
            }
            let {name,age}=data;
            console.log(name)//zs
            console.log(age)//15
            
            
### Es6的命令

        1)String.includes(string,start) 用来判断字符串中是否包含指定参数(string,起始下标)
        includes()  具备隐式转换
        
        2)String.startsWith(XX,start)    以XX开头
        String.endsWith(XX,start)    以XX结尾
        
        3) String.repeat()
        String.repeat() ""
        String.repeat(0) ""
        String.repeat(1) 返回原字符串
        String.repeat(false) ""
        String.repeat(true) 返回原字符串
        String.repeat(2)
        
        4)String.padStart(长度,"*")
        String.padEnd(长度,"*")
            
        
        string:代表查询参数
        start:代表查询起始位置

## 第二部分Es6方法扩展

### 数值

运算 | 说明
---|---
Number.isFinite() | 判断一个值是不是有限的
Number.isNaN() | 判断一个值是不是NaN 
Number.parseInt() |向下取整 
Number.parseFloat() | 向下取小数
Number.isInteger() | 判断一个数是不是一个整数
Number.isSafeInteger() |是不是一个安全的数(界限)
MAth.trunc() | 用于取整(向下)
Math.sign() |  判断一个数到底是正数、负数、还是零
MAth.cbrt() | 计算一个数的立方根
Math.pow() | 代表求次方值
    
    Math.sign()
    返回五种值。

    参数为正数，返回+1；
    参数为负数，返回-1；
    参数为 0，返回0；
    参数为-0，返回-0;
    其他值，返回NaN。
    
    
### 函数

    es5,es6设置默认值：
    let fun = function(val){
        var val = val||666;
        return val;
    }
    console.log(fun)
    
    箭头函数的简写(只有一个返回值)
        let fun = (val=666)=>val
        

    函数默认值的注意事项:
        1.箭头函数：
            1.没有参数必须写()
            2.有默认值也要写()
        2.定义形参默认值,需要注意，先声明后使用，遵循变量声明的规则
        3.设置形参后，函数内部的私有变量如果用let命令来声明变量，不得重复定义
        
    ...val 扩展运算符,可以展开一个数组
    
##### 获取函数所有的形参
    es5:
        arguments
        [...arguments]转为数组
        
    es6:
        函数的reset参数:
        //箭头函数没有arguments对象
        reset 参数返回一个实参的数组集合
        ...reset
        ...是...reset的逆运算
    eg: let fun = (...reset)=>{
            console.log(reset);
            reset.forEach((item)=>{
                console.log(item)
            })
        }
        fun(1,2,3,4);
        
    1)扩展运算符
        // 将数组转换为数组项的参数序列
        
    2)Array.from(arr)
        //将类数组或可遍历对象，(包括set map解构类型的数据)转为数组
    3)
    回调里面使用箭头函数,this指向上级对象
    回调里面使对象本身用function,this指向当前对象
    
    es5 
        function的回调函数,this指向当前对象
    es6 
        箭头函数,this指向上级对象
    注：
    
        1.箭头函数不是一个构造器(构造函数),不可以实例化
        
        
        
##### 双冒号：
    ::  左边是对象、右边是方法
    
    
    
##### 数组的空位
    1.let arr = new Array(5);
    arr.length === 5 每个值都为undefined
    
    2.let arr = Array();
    
    3.let arr = [];
    
    es6:
    1.Array.of() 用来将一组参数序列转为数组,可以用来代替new Array
    
    // 用数组中一些项，替换数组中的值(不包含结束下标)    
    2.Array.copyWidthin(target,start,end)
    
    3.Array.find((item,index,arr)=>{
        return item == 2
    })   返回满足条件的第一个项
    
    4.Array.findIndex((item,index,arr)=>{
        return item == 2
    })返回满足条件的第一个项的下标
    
    5.Array.fill(内容) 给数组填充相同的值
    //Array.fill(内容,start,end) 不包含结束下标 填充具体值
    
    6.Array.entries() 返回一个数组对象
    
    for (let val of arr.values()){
        console.log(val)
    }
    for (let val of arr.keys()){
        console.log(val)
    }
    
    7.Array.includes(查找项,start)
    start
        为正值从左向右
        为负值从左向右
        
    8.去重
        // 结合set来实现数组的去重
        let arr = [1,2,3,4,5,6,1,2];
        let res = new Set(arr);
    
### 对象

    // 没有类型转换(===)
    // 判断是否相等
    1.Object.is(123,"123") false
    
    2.
    Object.assign()默认是:浅拷贝
    Object.assign(Obj1,obj2) 对象的合并 //obj1被obj2覆盖，返回新对象  obj1也被修改为合并后的内容
    
    // 深拷贝
    Object.assign({},Obj1,obj2)


## 第三部分Es6的class

### 定义变量的关键字
    var let const import function class

### 通过class关键字来定义一个类

### promise
    new Promise((resolve,reject)=>{
        // do some async
        if(true){
        // 成功
            resolve(data);
        }else{
        // 失败
            reject(error);
        }
    })
    
    
    缺点：
        无法取消
        
        
    特性：
        (1)内置执行器
        (2)更好的语义
        (3)更广的适用性
        (4)返回值是 Promise
        
##### 图片
    img的两个事件
        onload 加载成功
        onerror 加载失败
        
### 继承 
    extents 继承
    //必须在constructor中调用super()方法
    
    constructor就是当前类的构造函数
    
##### promise.all() 等待所有的异步处理完成的时候，再去处理的一个方法
    promise.all() 会包装多个实例成为一个新的promise实例对象
  
##### async 如果return,返回一个promise对象,如果报错返回报错信息
##### await() 将异步转为同步

    // await结合async可以实现同步来执行异步方法

## 第四部分webpack总结

>   解码器
    // 开发环境
    --save-dev   -D
    // 生产环境
    --save       -S
>   npm i -D webpack
>   npm i -D webpack-cli

### webpack 的配置文件
    
    配置文件名:webpack.config.js
    // 引入模块
    const path = require('path');
    
    // 抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    
    const webpack = require('webpack');

    // 生成html文件
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    
    // 合并 === object.assign()
    const merge = require("webpack-merge");
    
    // module.exports=merge(config,obj1);

    // 在终端看到webapck运行的警告和错误 FriendlyErrorsWebpackPlugin和NotifierPlugin并用,且quiet必须为true
    
    const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
    
    const NotifierPlugin = require('node-notifier');
    // 压缩js
    
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    module.exports = {
    
        // 1.模式 默认是production
        mode: 'production'// development,
        // 2.入口文件
        //  entry可以是个字符串或数组或者是对象
        // ① 单入口文件 main.js
        entry:path.join('__dirname,src/app.js'),
        // ② 多入口文件
        <!--entry:{-->
        <!--    // app.js-->
        <!--    app:path.join(__dirname,'src/app.js'),-->
        <!--    main:path.join(__dirname,'src/main.js');-->
        <!--},-->
        // 3.output 定义构建后的文件的输出  其中包含path和filename
        
        output:{
           // 通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
           path:path.join(__dirname,"dist"),
           
          // 编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
          filename:'js/[name].js'
        },
        // 4.模块的加载相关 test匹配模式 loader加载器:对模块的源代码进行转换(==task预处理文件)
        module:{
            rules:[{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                },
            <!--{-->
            <!--    test:/\.css$/,-->
            <!--    loader:["style-loader","css-loader"]-->
            <!--}-->
            ,{
            // js
            test: /\.(js|jsx)$/,
            loader: "babel-loader"
            }, {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.(jpg|png|gif|jpeg|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader"
            }]
        },
        // 5.解析模块
        resolve: {
            alias: {
                Utils: path.join(__dirname,'src/utils.js')
            }
        },
        // 6.创建服务
        devServer:{
            host:'localhost',//服务器主机号
            port:8080, // 端口号
            contentBase:".", // 根目录
            overlay:true, // 显示错误信息到浏览器stats:'errors-only',// 只打印错误不显示编译过程
            quiet:true,// 默认:false 控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
            compress:true,//对所有的服务器资源采用gzip压缩
            inline:true, // 入口页面的热加载  代码改变后重新加载页面
            hot:true,
            // 加载
            before(app){
                app.get('/api',(req,res)=>{
                    res.end()
                })
            }
        },
        // 7.plugin 组件/插件
        plugins:[
            
            // 压缩js
            new UglifyJsPlugin(),
            // 抽离css样式
            new ExtractTextPlugin(),
            // 模块热替换(代码变动时刷新页面替换变化的部分)
            new webpack.HotModuleReplacementPlugin(),
            
            // 生成html入口文件 配置N个可生成n个
            new HtmlWebpackPlugin({
                title: "my first page", //生成的html文档的标题
                filename: "index.html", //相对于output的路径建立页面、页面中的link、script路径相对于生成目录
                template: "./index.html", // 源模板文件的位置(支持加载器handlebars、ejs、html等)
                inject: "body"
                //插入js到body底部 注入静态资源的位置、配置不同注入的位置不同
            }),
            new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://${config.dev.host}:${config.dev.port}`],
                notes: ['好好学习']
            },
            onErrors: function(severity, errors) {
                if (severity !== 'error') {
                    return;
                }
                const error = errors[0];
                NotifierPlugin.notify({
                    title: "Webpack error",
                    message: severity + ': ' + error.name,
                    subtitle: error.file || ''
                });
            },
            clearConsole: true
        })
        ],
        // devtool设置调试信息
        // dev开发
        <!--devtool:'eval-source-map'-->
        
        // production生产
        devtool:'cheap-source-map'
    }
    
### webpack补充

    output:

    1.chunkFilename用来打包require.ensure方法中引入的模块,
    如果该方法中没有引入任何模块则不会生成任何chunk块文件
        eg:比如在main.js文件中,
            require.ensure([],function(require){alert(11);}),
            这样不会打包块文件
        
        只有这样才会打包生成块文件
        require.ensure([],function(require){alert(11);require('./greeter')})
        或者:
        require.ensure(['./greeter'],function(require){alert(11);})
    
    2.chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
        
        注意:对于不是在ensure方法中引入的模块,
        此属性不会生效,只能用CommonsChunkPlugin插件提取
        
        eg:chunkFilename:'js/[chunkhash:8].chunk.js'
        
        
    html-webpack-plugin配置项
        
        inject：不同的配置值注入的位置不经相同。
        1、true或者body：所有JavaScript资源插入到body元素的底部
        2、head: 所有JavaScript资源插入到head元素中
        3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
        
        
    webpack-dev-server
        devServer.historyApiFallback
        // 这个配置属性是用来应对返回404页面时定向到特定页面用的
        devServer.compress
        // 是一个布尔型的值，当它被设置为true的时候对所有的服务器资源采用gzip压缩
        优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
        
        缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
        
        
        
    运行和需要下载的包:
        "scripts": {
        
            // npm i -D cross-env  跨平台设置环境变量插件
            
            "pro": "cross-env NODE_ENV=production webpack --config ./build/webpack.pro.config.js",
            "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.dev.config.js --inline --hot --progress",
            "start": "npm run dev"
        }
        "devDependencies": {
            "babel-cli": "^6.26.0",
            "babel-loader": "^7.1.5",
            "babel-preset-env": "^1.7.0",
            "cross-env": "^5.2.0",
            "css-loader": "^1.0.0",
            "extract-text-webpack-plugin": "^4.0.0-beta.0",
            "html-webpack-plugin": "^3.2.0",
            "node-notifier": "^5.2.1",
            "node-sass": "^4.9.2",
            "sass-loader": "^7.0.3",
            "style-loader": "^0.21.0",
            "url-loader": "^1.0.1",
            "webpack": "^4.15.1",
            "webpack-cli": "^3.0.8",
            "webpack-dev-server": "^3.1.4",
            "webpack-merge": "^4.1.3"
        },
        "dependencies": {
            "friendly-errors-webpack-plugin": "^1.7.0"
        }
        
        
### 小问题汇集：

    1.在webpack中实现请求拦截（接口开放），接口为/api，响应数据为"ok",get方式请求，补全下面代码：
    devServer: {
        contentBase: path.join(__dirname, "dist"),      
        watchContentBase: true,
        compress: true,      
        hot: true,
        port: 9900,
        host: 'localhost'
    }

    正确答案：setup(app) {
            app.get('/api', function(req, res) {
                res.json('ok');
            });
        }
        
    2.在webpack中实现接口的代理，如将当前项目中所有的/api接口全部代理到http://localhost:3000/服务之下：

    devServer: {
       
        contentBase: path.join(__dirname, "dist"),      
        watchContentBase: true,
        compress: true,      
        hot: true,
        port: 9900,
        host: 'localhost',
       
    }

    正确答案 proxy: {
           "/api": "http://localhost:3000/"
         }
    
    3.webpack借助（）插件实现多个文件中公共代码的提取；

    正确答案：webpack.optimize.CommonsChunkPlugin，
    
    4.在webpack中实现热启动必须配合（）插件

    正确答案：webpack.HotModuleReplacementPlugin
    
    5.在webpack中有一个叫devtool的属性，这个属性是用来做什么的；

    正确答案：形成sourcemap，方便浏览器进行debug

    6.借助webpack实现文件懒加载的配置是（）方法：；

    正确答案：require.ensure方法

## 第五部分Vue指令

###  指令的钩子函数(5个)

    bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
    
    inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    
    update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。
    
    componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
    
    unbind: 只调用一次，指令与元素解绑时调用。
    
    页面加载时:
    bind
    inserted
    
    组件更新时

    点击“更新”按钮，更改数据触发组件更新。
    
    update
    componentUpdated
    
    卸载组件时

    点击“卸载”按钮，数据置空否定判断以触发组件卸载。
    
    unbind
    
    重新安装组件时

    点击“安装”按钮，数据赋值肯定判断以触发组件重新安装。
    
    bind
    inserted
    
> 区别

    bind 和 inserted
    
        bind 时父节点为 null，inserted 时父节点存在。
    
    update 和 componentUpdated
    
        update 和 componentUpdated 就是组件更新前和更新后的区别。
        
---

### Vue的使用总结

    1.Vuejs组件
        组件要先注册后使用
        
    2.指令keep-alive
        把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染
        
    3.如何让css只在当前组件中起作用
        只需要在style中写入scoped
        
    4.vuejs循环插入图片
        在“src”属性插值将导致404请求。使用v-bind：src代替。v-bind在写的时候不能再用{{}}
        
    5.绑定value到Vue实例的一个动态属性上
        v-model绑定的value通常是静态字符串。
        想绑定value到vue实例的一个动态属性上，这时可以用v-bind实现，并且这个属性的值可以不是字符串
        

---
        
        
### vue的指令实例属性
    
    el: 指令绑定的元素。
    　　vm: 拥有该指令的上下文 ViewModel。
    　　expression: 指令的表达式，不包括参数和过滤器。
    　　arg: 指令的参数。
    　　name: 指令的名字，不包含前缀。
    　　modifiers: 一个对象，包含指令的修饰符。
    　　descriptor: 一个对象，包含指令的解析结果。
    　　
    
    
### Vue-router

    router-link标签上的（append）属性在当前（相对）路径前添加基路径
    
    路由别名：
        const router = new VueRouter({router:[path:'/a',component:A,alias:"/b"]})
    vue-router中设置连接激活时使用的css类名的配置是通过（linkActiveClass）属性进行配置的
    
### $router 
    
    $router.fullPath() 获取包含参数苏和hash的完整路径
    
    $router.path() 获取当前路径
    
    设置 append 属性后，则在当前 (相对) 路径前添加基路径
    
    设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
    
     <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
     
     设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置
     
     
### router实例属性

    router.app配置了 router 的 Vue 根实例
    
    router.mode路由使用的模式
    
    router.currentRoute当前路由对应的路由信息对象
    
    router.addRoutes动态添加更多的路由规则
    
### 路由对象的属性

    $route.path 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"
    
    $route.params一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
    
    $route.query一个 key/value 对象，表示 URL 查询参数
    
    $route.hash 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串
    
    $route.fullPath完成解析后的 URL，包含查询参数和 hash 的完整路径
    
    $route.matched一个数组，包含当前路由的所有嵌套路径片段的路由记录
    
    $route.name当前路由的名称
    
    $route.redirectedFrom如果存在重定向，即为重定向来源的路由的名字

 ### vue中所有的钩子函数
 
    beforecreate(){
        //挂载元素 实例属性 实例方法 都没有生成
    }
    created(){
        // 挂载元素  还没有被初始化
        // 实例属性 实例方法 编译出来
    }
    
    beforeMount(){
        // 挂载元素 初始化了，但是模板没有被编译、原样输出
        // 实例属性 实例方法 编译出来
    }
    mounted(){
         // 挂载元素 初始化了，模板被编译
        // 实例属性 初始化了
        // 实例方法 初始化了
    }
    
    // 全局
    
    beforeUpdate(){
        // 改变的触发
        // 数据更新之前
    }
    
    updata(){
        // 数据改变
        // 数据更新之后
    }  
    
    beforeDestroy（销毁前）
    
    destroyed（销毁后）

### 钩子函数的参数

    钩子函数的参数有：

    el: 指令所绑定的元素，可以用来直接操作 DOM 。
    binding: 一个对象，包含以下属性：
        name: 指令名，不包括 v- 前缀。
        value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
        oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
        expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
        arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
        modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
    vnode: Vue 编译生成的虚拟节点。
    oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

## 第六部分Vue路由

### 组件

    全局组件
        import Index from './components/index.vue';
        
     Vue.component("Index", Index);
     
    局部组件
    
    在template标签中
    
    <Index/>
    
    在app.vue中的script标签中
    
    import Index from './components/index.vue';
        
    export default {
      name: 'App',
      components:{
        Index
      }
    }

### router路由

    1. 
        // 下载
        cnpm install --save-dev vue-router
    
    2.
    
        // 引入
        import VueRouter from "vue-router"
        
        // 创建一个主路由并引入
        import Index from '../components/index.vue';
    
    3. 
        // 挂载路由
        Vue.use(VueRouter);
    
    4. 
        // 实例化
        
    let router = new VueRouter({
        routes: [{
            path: '/index',
            component: Index
            }]
        })

    5. 在实例化vue中添加router
    
    new Vue({
        el: '#app',
    // 添加router:router 可省略
        router,
        components: { App },
        template: '<App/>'
    })
    
    6.在app.vue的template中
    
        <router-view></router-view>
        
### 组件的概念
    
    1.组件是vue最强大的功能
    
    2.可以扩展html元素，封装可重用的代码
    
    3.组件系统让我们可复用的小组件来构建大型应用
    
 ## 第七部分Vue小知识总结

### 事件修饰符(6种)

事件修饰符 | 说明
---|---
.stop | 阻止冒泡
.prevent | 阻止默认行为
.capture | 添加事件监听器时使用事件捕获模式（即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理）
.self | 只当在 event.target 是当前元素自身时触发处理函数(事件不是从内部元素触发的)
.once | 事件将只会触发一次(可数组事件)
.passive | 滚动事件的默认行为 (即滚动行为) 将会立即触发(而不会等待 `onScroll` 完成,包含 `event.preventDefault()` 的情况)


### 按键修饰符

    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
    
### 系统修饰符

    .ctrl
    .alt
    .shift
    .meta
    
### 鼠标按钮修饰符

    .left
    .right
    .middle
    
### 表单修饰符

    .lazy 使用 change 事件进行同步
    
    .number 自动将用户的输入值转为数值类型
    
    .trim 自动过滤用户输入的首尾空白字符
    
    

### computed与watch的区别

    1. computed监听的是函数内部依赖的数据
    
        computed：一个属性依赖于多个属性时，推荐使用
    
    2. watch可以对数据进行观察，如果有数据变化，则会进一步触发数据的相应,对当前数据有依赖的所有数据进行更新
    
        watch()：多个属性依赖一个属性是，推荐使用
    
### vue属于一个mvvm架构的前端框架

> vue中可以使用key属性防止元素的复用

> vue中的条件渲染指令
    v-if v-else v-else-if
    
> vue中更新渲染列表时，默认使用“就地复用”策略

### vue中数组的变异方法

    (改变原数组，直接更新数据，页面会重新渲染)

    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
    
         push()  往数组最后面添加一个元素，成功返回当前数组的长度
         
        pop()  删除数组的最后一个元素，成功返回删除元素的值
        
        shift()  删除数组的第一个元素，成功返回删除元素的值
        
    unshift()  往数组最前面添加一个元素，成功返回当前数组的长度
    
     splice()  有三个参数，第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除
                    后想要在原位置替换的值（可选）
                    
       sort()  使数组按照字符编码默认从小到大排序,成功返回排序后的数组
       
    reverse()  将数组倒序，成功返回倒序后的数组   

## 第八部分Vue的过渡动画

### Vue的自定义过渡动画

    过渡：(transition标签)
    
    // 1
       引入animate.css
    // 2 
    <transition active-enter-class="animated bounceInLeft" leave-enter-class="animated bounceOutLeft"></transition>
    
    1.name 设置样式
    
    <transition name="fade"></transition>
    //六种状态
    // opacity:0 = > opacity:1
    v-enter  进入过渡开始状态
    v-enter-active 进入过渡生效时的状态
    v-enter-to  进入过渡结束状态
    
    // opacity:1 = > opacity:0
    v-leave  离开过渡开始状态
    v-leave-active  离开过渡生效时的状态
    v-leave-to 离开过渡结束状态
    
    2.elements
    
    3.js库
        
        celocity.js
    
    事件监听器：
    
        transitionend或animationend
        
        
### js钩子

    // 进入
    v-before-enter进入之前
    v-enter 进入
    v-after-enter 进入之后
    v-enter-cancelled 移除动画
    
    // 离开
    v-before-leave离开之前
    v-leave 离开
    v-v-after-leave 离开之后
    v-leave-cancelled 移除动画

## 第九部分Vue中的功能使用

### jsonp跨域
    
    1. npm install -D jsonp
    
    
    2.jsonp.js
    
    import originJsonp from "jsonp"
    import utils from "@/common/js/utail.js"
    export default function jsonp(url, cof, opt) {
        return new Promise((resolve, reject) => {
            url += (url.indexOf('?') < 0 ? "?" : "&") + utils.format(cof);
            console.log(url)
            originJsonp(url, opt, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })
    }
    
    
    // utail.js
    
    class Utils {
        format(opt) {
            let temp = "";
            for (let key in opt) {
                let val = opt[key] !== undefined ? opt[key] : "";
                temp += `&${key}=${encodeURI(val)}`
            }
            return temp ? temp.substring(1) : "";
        }
    }
    const utils = new Utils();
    export default utils;
    
    
    // recommend.js
    
    import jsonp from "@/common/js/jsonp.js"
    export function getrecommendList() {
        const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
        const cof = {
            tpl: 3,
            page: "detail",
            date: "2018-07-19",
            topid: 4,
            type: "top",
            song_begin: 0,
            song_num: 30,
            g_tk: 2068878057,
            loginUin: 1641249366,
            hostUin: 0,
            format: "jsonp",
            inCharset: "utf8",
            outCharset: "utf-8",
            notice: 0,
            platform: "yqq",
            needNewCode: 0
        }
        return jsonp(url, cof, {
            param: "jsonpCallback",
            prefix: "__jp"
        });
    }
    
### vue-swiper

> vue-swiper基于swiper4

    1. cnpm install --save-dev vue-awesome-swiper
    
### 拦截器

> axios 拦截器

    axios
    axios-mock-adapter
    
    const mock = new axiosAdapter(axios)
    
    mock.onGet("/getCarouselList").reply(200,{
        errCode:0,
        errMsg:'',
        result:[
            {
                url:"./static/images/banner1.png"
            },
            {
                url:"./static/images/banner2.png"
            }
        ]
    })
    
    
### element-ui中的swiper使用

    1. 引入
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css';
    2. 挂载
    Vue.use(ElementUI)
    3.显示
    <el-carousel :interval="3000" height="131px">
        <el-carousel-item>
            <img :src="item.picUrl">
        </el-carousel-item>
    </el-carousel>
    
### vue-lazyload

    1. 引入
    import VueLazyload from "vue-lazyload"
    2. 挂载
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        loading: "../static/img/loading.gif"
    })
    3.显示
    template中的v-bind:src变为v-lazy

## 第十部分组件间传递数据

### 组件命名

    1.字母全小写且必须包含一个连字符 my-componnect
    
    2.使用 kebab-case(短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 <my-component-name>
    
    3.使用 PascalCase (驼峰式命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的（非字符串的模板中使用时只有 kebab-case 是有效的)
    

### 插槽 slot标签

### 缓存页面
    
    缓存组件：
        keepAlive实现数据缓存不刷新
       
    <keepAlive>
        <router-view></router-view>
    </keepAlive> 
    
### 组件通讯
    
> 组件兄弟传递信息

    1. 定义全局
        
    window.EventHub = new Vue();
    
    2.
    在组件1methods中的方法发送数据
        EventHub.$emit("hello",this.val);
    在组件2的方法mounted中接收数据
        EventHub.$on("hello",res=>{
            this.val = res;
        });
> 组件 父=>子

    1. 在父级的data的return中定义一个变量
         solgan:"welcome to china"
         
    2. 在子组件的props中接收
        props:['solgan'] // 可以是数组或对象
        
    3. 在template中的组件标签上
        <cnp1 v-bind:solgan="solgan"></cnp1>
        
    components:{
        cnp1:{
            name:"cnp1",
            props:['solgan'],
            
        },
       cnp2:{
            name:"cnp2"
        }
    }

> 组件  子=>父

    1.在组件1methods中的方法发送数据
        this.$emit("sloganEvent",this.val);
        
    2.在template中的组件标签上
        <cnp1 v-on:sloganEvent="onSloganEvent"></cnp1>
    
    3.在父组件的methods方法中接收函数信息
        methods:{
            onSloganEvent(val){
                this.msg = val;
            }
        }
        
        
> prop 父组件传递数据的自定义属性

    prop 是单向绑定的：当父组件的属性变化时，将传导给子组件
    
    Prop 验证
    propA:{
        type:String,
        required:true,
        default: function () {
        return { message: 'hello' }
      }
    }
    
> type:可以是下面的原生构造器
    
    String
    Number
    Boolean
    Function
    Object
    Array
    
    //type 也可以是一个自定义构造器，使用 instanceof 检测。

> 自定义事件

    //父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件
    
    使用 $on(eventName) 监听事件
    使用 $emit(eventName) 触发事件
    
    //如果你想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on
    
    <my-component v-on:click.native="doTheThing"></my-component>
    
    
### ref属性
    ref="aaa" 节点上
    在mounted中
    // 找到此节点
    console.log(this.$refs.aa)
    
    
### router-link 跳转

> * 直接跳转

    <router-link to="/music/search"></router-link>

> * query地址栏 方式

    <router-link to="{path:'/music/search',query:{传递的参数}}"></router-link>

> * params

    <router-link to="{name:'search',params:{传递的参数}}"></router-link>

### vue各种方法的区别

> * methods和computed

computed是计算属性，methods是方法。

computed计算属性是基于它们的依赖进行缓存的

computed只有在它的相关依赖发生改变时才会重新求值

而对于method ，只要发生重新渲染，method 调用总会执行该函数

总之：数据量大，需要缓存的时候用computed;每次确实需要重新加载，不需要缓存时用methods

> * omputed和watch

计算属性是计算属性，侦听器watch是侦听器watch

侦听器watch是侦听一个特定的值，当该值变化时执行特定的函数

> * $router和$route

router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象

route相当于当前正在跳转的路由对象。。可以从里面获取name,path,params,query等

打印this.$route和this.$router，两个同时存在。

两者传参方式相同

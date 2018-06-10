# 课程：JavaScript前端开发上
----
## 第一单元  变量、数据类型与表达式上
### 第一节课:  了解什么是JavaScript
课程重难点
> * JavaScript的组成
> * JavaScript的重要性  

课程内容  
> * 为什么要学习JavaScript?
> * 什么是JavaScript？
> * JavaScript的特点
> * 如何使用JavaScript

### 第二节课：了解JavaScript的基础语法
课程内容
> * 了解什么是标识符
> * 掌握标识符的语法，如：不能以数字开头，区分大小写等  
> * 了解代码中的注释作用及如何规范的添加注释
> * 了解代码中的语句及语句结尾分号的可选
> * 学习变量：存储信息的"容器"

### 第三节课：掌握基础数据类型
课程内容
> * Number（数字类型）
> * String （字符串类型）
> * Boolean （布尔类型）
> * Undefined与Null
> * 掌握typeof操作获取变量的类型
> * 了解Array（数组类型）和Object（对象类型）    

介绍类型的时候注意，要先解释类型单词的英文释义
### 第四节课：基础表达式
课程内容
> * 

---
## 第七单元 数组
### 第一节课：
		定义 + 创建 + 遍历 + 去重
	
### 第二节课：	
		栈的概念： 后进先出，操作栈顶元素 push，pop，
		队列的概念： 先进先出，操作队首元素 shift，unshift
		
		流程图	
		从数组中选取若干数量元素，保证元素不重复
		埋坑，随机数加数组下标取数的方法，然后引出splice方法
		var arr = [1,2,3,4,5,6,7,8,9,10];
		function uniqItem(num){
			var newArr = [];
			for (var i=0;i<num;i++){
				var index = Math.floor(Math.random(0, 1)*arr.length)
				newArr.push(arr[index]);
				// 这里注意，如果每次取出数组后不删除后出现重复
				// arr.splice(index,1);
			}
			return newArr;
		}
		uniqItem(5);
	
### 第三节课：
		丰富的api，英文含义+定义+代码
		concat,	数组连接
		join,	数组连接
		reverse，数组反序
		sort, 	数组排序，外延数组对象的排序
		slice,  数组切片
		数组转化，把伪数组转化为数组，arguments，querySelectAll()
		Array.prototype.slice.call()

### 第四节课：
		二维数组，三维数组，数组元素是对象的数组
		数组的存储+数组遍历

		二维数组的应用： 打印班级同学名单，
		数组排序的应用： 遍历城市数据，按照首字母对城市数据进行排序
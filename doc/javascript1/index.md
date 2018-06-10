# 课程：JavaScript前端开发上
----
## 第一单元  变量、数据类型与表达式上
### 第一节课:  了解什么是JavaScript
课程重难点
> * JavaScript的组成
> * JavaScript的重要性  

<!-- 课程内容   -->
> * 为什么要学习JavaScript?
> * 什么是JavaScript？
> * JavaScript的特点
> * 如何使用JavaScript

### 第二节课：了解JavaScript的基础语法
<!-- 课程内容 -->
> * 了解什么是标识符
> * 掌握标识符的语法，如：不能以数字开头，区分大小写等  
> * 了解代码中的注释作用及如何规范的添加注释
> * 了解代码中的语句及语句结尾分号的可选
> * 学习变量 —> 存储信息的"容器"

### 第三节课：掌握基础数据类型
<!-- 课程内容 -->
> * Number（数字类型）
> * String （字符串类型）
> * Boolean （布尔类型）
> * Undefined与Null
> * 掌握typeof操作获取变量的类型
> * 了解Array（数组类型）和Object（对象类型）    

介绍类型的时候注意，要先解释类型单词的英文释义
### 第四节课：基础算术表达式
<!-- 课程内容 -->
> * **+、—、*和/** 基本算术运算符
> * **%** 求余运算符
> * **!**  取反运算符
> * &&和|| 运算符


---
## 第二单元 表达式下、运算符与简单的if语句
### 第一节课：
### 第二节课：
### 第三节课：
### 第四节课：

---
## 第三单元 if语句的嵌套及switch语句
### 第一节课：
### 第二节课：
### 第三节课：
### 第四节课：

---
## 第四单元 循环语句
### 第一节课：
### 第二节课：
### 第三节课：
### 第四节课：

---
## 第七单元 数组
### 第一节课：数组简介
> * 案例引入+问题思考：为什么要学习数组
> * 种差加属定义什么是数组
> * 对比变量和函数，外延二维三维数组
> * 介绍数组追加元素方法push  

#### 去重流程图
```flow
```
	
### 第二节课：数组的添加和删除	
> * 栈的概念： 介绍push和pop方法，
> * 队列的概念：介绍shift和unshift方法
> * 案例：从数组中选取若干数量元素，**保证元素不重复**
> * 埋坑：选取后删除元素，引出splice方法


#### 案例流程图
```flow
st=>start: 创建新数组
op1=>operation: 迭代需要选取的元素数量
op2=>operation: 生成随机下标，选取元素添加到新数组
op3=>operation: 从老数组删除该元素（学生容易忘记的点）
e=>end

st->op1->op2->op3->e
```
#### 案例代码
```js
// 从数组中选取若干元素
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
//调用
uniqItem(5);
```
	
### 第三节课：数组丰富的API
> * concat,	数组连接
> * join,	数组连接
> * reverse，数组反序
> * sort, 	数组排序，外延数组对象的排序
> * slice,  数组切片
> * 认识伪数组
	* arguments
	* document.querySelectAll()

介绍的时候注意，要先解释数组API单词的**英文释义**

### 第四节课：数组的应用
> * 数组的遍历：forEach、for循环、for...in、map
> * 复杂数组：二维数组和对象数组
> * 二维数组的应用： 打印班级同学名单，
> * 对象数组的应用： 排序城市数据，按照首字母对城市数据做升序排序

#### 城市数据如下
```js 
[{"CityID":"910","CityName":"保定","EngName":"baoding","ParentID":"9"},    
{"CityID":"909","CityName":"沧州","EngName":"cangzhou","ParentID":"9"},  
{"CityID":"912","CityName":"承德","EngName":"chengde","ParentID":"9"},  
{"CityID":"907","CityName":"邯郸","EngName":"handan","ParentID":"9"},  
{"CityID":"908","CityName":"衡水","EngName":"hengshui","ParentID":"9"},  
{"CityID":"906","CityName":"廊坊","EngName":"langfang","ParentID":"9"},  
{"CityID":"905","CityName":"秦皇岛","EngName":"qinhuangdao","ParentID":"9"},  
{"CityID":"901","CityName":"石家庄","EngName":"shijiazhuang","ParentID":"9"}, 
{"CityID":"902","CityName":"唐山","EngName":"tangshan","ParentID":"9"},  
{"CityID":"903","CityName":"邢台","EngName":"xingtai","ParentID":"9"},  
{"CityID":"911","CityName":"张家口","EngName":"zhangjiakou","ParentID":"9"}]
```
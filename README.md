# review

## Project setup

```
yarn install
```

## 贝塞尔曲线实现气泡

</br>

## vue-router 实现原理(broswer history) keep-alive 实现原理

</br>

## ES6 新特性及各功能点

</br>

## 闭包原理及优缺点

</br>

## js 继承 及 原型 原型链的深入

</br>

## js constructor 及 super

</br>

## js 函数的合成与柯里化

1. 函数的合成

    - 如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做“函数的合成”

2. 柯里化
    - 所谓“柯里化”，就是把一个多参数的函数，转化为单参数函数

```
// 柯里化之前
function add(x,y){
    return x+y;
}

add(1,2) //3

// 柯里化之后
function addX(x){
    return function(x){
        return x+y
    }
}

addX(2)(1) //3

```

有了柯里化之后，我们就能做到，所有函数只接受一个参数。

</br>

## js 纯函数(Pure function)

定义：一个函数的执行结果只依赖于他自己的参数，并且执行过程没有任何副作用

```
 1. 函数返回结果只依赖于自己的参数
 2. 函数执行过程里面没有副作用
```

对于无副作用的纯函数，我们完全可以不用考虑函数内部是如何实现的，专注于编写业务代码

随机数 date 都会使函数不纯

好处：

1. 测试以及重构

    - 如果传入相同的参数 结果永远相同
    - 重构不会影响业务层面 不会有副作用

2. 纯函数可以并行执行

</br>

## js 函数式编程思想及深入

函数式变成主要基于数学函数和他的思想

</br>

## web worker

javaScript 最大特点就是单线程，即同一时间智能做一件事，设计单线程的原因与其用途有关，js 作为脚本语言，主要用途是与用户互动，以及操作 DOM，这决定了它智能是单线程，否则会带来复杂的同步问题。比如，嘉定 javaScript 同时又两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器无法确定以哪个线程为准。

```
为了避免复杂性，从一诞生，javaScript就是单线程，这是js核心特征，将来也不会改变
为了利用多核CPU的计算能力，HTML5提出web worker标准，允许javaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM，所以这个新标准并没有改变javaScript单线程的本质
```

> 单线程的不足

-   单线程意味着所有任务都需要排队，前一个任务结束才会执行下一个任务

## js 异步

为什么需要异步呢？

```
如果JS中不存在异步，智能自上而下执行，如果上一行解析时间很长，下面的代码就会被阻塞。对用户而言，阻塞就意味着 卡死，这就导致很差的用户体验。
通过event loop实现异步

```

> 异步分为轰任务和微任务

1. 宏任务 macro task

    - 整个 script 就是一个宏任务
    - setTimeout setTimeInterval

2. 微任务 micro task

    - Promise

3. 任务队列
    1. 任务队列是一个事件的队列(也可以说是消息的队列)

## postCss

vue 中 scoped 通过 postCSS 给一个组件中的所有 dom 添加了一个独一无二的动态属性，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 dom，这种做法使得样式只作用于含有该属性的 dom 即内部组件

</br>

## addEventListener 与 on 区别

addEventListener()方法设定一个事件监听器，当某一事件发生通过设定的参数执行操作

-   addEventListerner(event,function,useCapture)
-   event 是必须的，表示监听的时间，例如 click touchstart
-   function 也是必须的，表示事件触发后调用的函数，可以是外部定义函数，也可以是匿名函数
-   useCapture 是选填 true/false， 用于描述事件是冒泡还是捕获，true 表示捕获，默认 false 表示冒泡

如果要移除 addEventListerner()

-   removeEventListerner(event,function)

为某元素设定事件触发函数时，可能会觉得 addEventListerner 与 on 事件的功能差不多，但是,addEventListerner 除了可以设置元素触发顺序外，还能多次绑定事件，因为 on 事件多次绑定的话会出现覆盖

```
<div id="div1" style="height:200px;background:#0cc">
Click me
</div>

<script>
	var dib1 = document.getElementById("div1");
	div1.addEventListener('click', function(){
		alert("message1");
	});
	div1.addEventListener('click', function(){
		alert("message2");
	});
</script>

```

结果会依次提示"message1","message2"

但是 js 这么写的话:

```
div1.onclick = function(){
	alert("message1");
};
div1.onclick = function(){
	alert("message2");
}
```

就只会提示最后一个"message2"，因为 onlcik 作为对象 div1 的一个属性，第二次对其进行赋值就回覆盖之前的函数值，这样 on 事件在某些场合就不适用了

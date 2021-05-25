1. css

   1. flex布局

      1. flex:1是哪三个属性的缩写 

         ```
         flex-grow`, `flex-shrink` 和 `flex-basis
         flex-grow 默认为0
         flex-shrink 默认为1
         flex-basis 元素本身占据的大小
         ```

      2. flex实现垂直居中

         ```
         display: flex;
         justify-content: center;
         align-items: center;
         ```
         
      3. 左边flex：1，右边固定宽度时，左边内容过大 会不会挤压到右边？

         1. 如果是行内元素，不会挤压。如果是块级元素，虽然也不会挤压大小，但是会挤压位置
         2. 解决办法就是右边设置overflow:hidden

   2. position

      1. 有哪几种定位

      2. 分别依据谁来定位

         ```
         relative: 依据自身
         absolute：依据最近的拥有position属性的父级
         fixed：依据浏览器窗口
         ```

   3. 盒模型

      1. 标准盒子模型 border和padding不算在width内  box-sizing: content-box;
      2. 怪异盒模型 border和padding算在width内 box-sizing: border-box;

   4. BFC

      1. (Block formatting context)直译为"块级格式化上下文
      2. 如何触发BFC：float!=none,position!=static和relative,display:flex,inline-block,table-cell,overflow!=visible
      3. BFC内的box，margin会重合
      4. BFC的内容不会和float的内容重合，可以一个设置float，一个设置BFC，形成左右分栏
      5. BFC计算高度时，浮动元素也参与计算，所以可以用来清除浮动

   5. 隐藏元素

      1. display：none 无法触发事件
      2. visiblity: hidden 无法触发事件
      3. opcity: 0; 可以触发事件
      4. position:absolute;z-index: -1或者top: -99999px;

   6. 渐进增强，优雅降级

      1. 渐进增强：先依据低版本浏览器实现，向上兼容
      2. 优雅降级：先依据高版本浏览器构建页面，向下兼容

   7. 如何减少重排重绘

      1. 最好使用class属性修改样式，少用style属性
      2. 将动画的元素脱离文档流
      3. 将要修改的dom元素先隐藏，修改完再显示
      4. 不要使用table
      
   8. css样式优先级

      1. 内联>id选择器>类选择器、属性选择器、伪类>标签选择器、伪元素>继承的属性

   9. css哪些属性可以继承

      1. 字体属性
      2. 文本属性
      3. 表格属性
      4. 列表属性
      5. 元素可见性

   10. padding使用百分比是依据哪个属性？

2. ES6

   1. ES6的数据类型

      1. 基本数据类型：Number，String，Boolean，Null，undefined，BigInt，Symbol
      2. 引用数据类型：Array，Function，RegExp，Date

   2. 如何判断数据类型

      1. typeof 主要用于判断基本数据类型，但是也能判断function
      2. instanceof 用来判断引用数据类型
      3. Object.prototype.toString.call() 可以判断所有数据类型

   3. 深拷贝和浅拷贝

      1. JSON.stringify和JSON.parse会有什么问题？

      ```
      function deepClone(obj) {
      	let result
      	if (typeof obj === 'object') {
      		result = obj instanceof Array ? [] : {}
      		for (let i in obj) {
      			result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj][i]
      		}
      	} else {
      		result = obj
      	}
      	
      	return result
   }
      ```

   4. Promise
      1. Promise解决了 什么问题？还有哪些方法也能解决？
         1. 异步调用
         2. callback，genetator，async/await
   2. Promise在事件循环中的使用
      
   3. Promise在业界的实现有哪些？
      
   5. 数组去重

      1. Set
      2. 遍历
   3. filter，判断在数组中的第一个索引是不是当前的索引
      
   4. 利用Map，不能用相同key值
      
   6. 数组扁平化

   1. arr.flat(Infinity)
      
   2. concat也会拍平数组
      
   7. 递归，排序

      ```
      var arr = [29,45,51,68,72,97];
      //外层循环，控制趟数，每一次找到一个最大值
      for (var i = 0; i < arr.length - 1; i++) {
      	// 内层循环,控制比较的次数，并且判断两个数的大小
      	for (var j = 0; j < arr.length - 1 - i; j++) {
      	// 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
      		if (arr[j] > arr[j + 1]) {
      			var temp = arr[j];
      			arr[j] = arr[j + 1];
      			arr[j + 1] = temp;
      		}
      	}
   }
      ```

3. js

   1. 事件循环

      1. ```js
         document.body.addEventListener('click', () => {
           Promise.resolve().then(() => console.log(1))
           console.log(2);
         }, false)
         
         document.body.addEventListener('click', () => {
           Promise.resolve().then(() => console.log(3))
           console.log(4);
         }, false)
         ```

      2. commonjs 及 ES6 Module 的区别

      3. 事件捕获，事件冒泡

      4. axios的get，post

      5. 强缓存与协商缓存

4. Vue

   1. Vue的生命周期
   2. 父子组件的生命周期
      1. 父子组件的渲染顺序（同步引入还是异步）
   3. Vue双向绑定的原理
   4. Vue组件之间传值（父子、兄弟、多层级）
      1. props，$emit
      2. Inject,provide
      3. eventbus
      4. Vuex
   5. Computed和Watch的区别
      1. computed和watch的区别
         1. computed有缓存，不支持异步，有返回值，watch不支持缓存，支持异步
         2. 当一个属性是由其他属性计算而来，使用computed，而一个属性的变化会触发相应操作的使用watch
      2. Computed和methods实现相同的目的，什么时候用？
         1. computed当她依赖的属性未发生变化时，会使用缓存，所以多次使用到同一个计算结果时，使用computed
         2. computed和methods的调用方式不一样
   6. $nexttick
      1. 使用场景
      2. 原理
         1. 将回调延迟到下次DOM循环更新之后执行
         2. Promise>MutationObserver>setImmediate>setTimeout
   7. $set
      1. 使用场景
         1. 在对象上新增属性
         2. 利用索引修改数组的某一项，或者直接修改数组长度
      2. 原理
         1. 数组：使用了hack过的splice方法
         2. 对象：调用defineReactive响应式处理，ob.dep.notify()触发视图更新
   8. Vuex state/getters/mutations/actions 
      1. mutations和actions如何触发修改state
      2. mutations和actions有什么区别
      3. actions为何要先触发mutations，而不是直接触发修改state
      4. 为什么mutations里不能使用异步
   9. Vue-router
      1. 哈希模式和history模式的原理
   10. Less,sass

5. 手写

   1. apply、call、bind

      ```js
      Function.prototype.myCall = function (context, ...args) {
          context = context || window
          const name = Symbol()
          context[name] = this
          const result = context[name](args)
          delete context[name]
          return result
      }
      ```

   2. 防抖节流

      ```js
      // 防抖
      function debounce(fn, wait) {
          let timer, result;
          return (...args) => {
              clearTimeout(timer)
              timer = setTimeout(() => {
                  result = fn(...args)
              }, wait)
              return result
          }
      }
      // 节流
      function throttle(fn, wait) {
          let timer, previous = 0
          return (...args) => {
              if (!timer) {
                  timer = setTimeout(() => {
                      timer = null
                      fn(...args)
                  }, wait)
              }
          }
      }
      ```

   3. 柯里化

      ```js
      function myCurry(fn) {
      	return function curryFn(...args1) {
      		if (args1.length < fn.length) {
      			return function (...agrs2) {
      				return curryFn(...args1.concat(...args2))
      			}
      		}
      		return fn(...args1)
      	}
      }
      ```

   4. compose

      ```js
      function compose(...args) {
          return function (...args2) {
              let result;
              while (args.length) {
                  result = args.shift()(...args2)
              }
              return result
          }
      }
      
      function add(x, y) {
          console.log(this);
          return x + y
      }
      
      function toString(s) {
          return s.toString()
      }
      let com = compose(toString, add)
      ```

   5. new 

      ```js
      function myNew(fn, ...rest) {
          let newObj = Object.create(fn.prototype)
          const result = fn.apply(newObj, rest)
          return result instanceof Object ? result : newObj
      }
      ```

6. 其他

   1. 基本的git指令

      1. `git branch -a --contains commitId`
      2. `git stash git stash pop`
      3. `git log`
      4. git复制本地分支，推送到新的远程分支
         1. `git checkout -b newBranch`
         2. `git push origin newBranch`
         3. `git branch --set-upstream-to=origin/newBranch`

   2. webpack

   3. nginx

   4. docker

   5. http协议

      1. https与http有什么区别
      2. http状态码

   6. localstroage，sessionstroage，cookie，session

      1. localstroage，sessionstroagehe，cookie，session有什么不同

         |                | 位置   | 大小 | 生命周期                                           |
         | -------------- | ------ | ---- | -------------------------------------------------- |
         | cookie         | 浏览器 | 4K   | 不设置过期时间，浏览器关闭；设置过期时间，时间到期 |
         | session        | 服务器 |      |                                                    |
         | localstroage   | 浏览器 | 5MB  | 永久                                               |
         | sessionstroage | 浏览器 | 5MB  | 页面关闭                                           |

      2. cookie有哪些属性？如何设置，删除cookie，如何禁止js操作cookie

         1. cookie的属性有：name，value，domain，path，expires/max-age，size，http-only，secure，samesite，sameparty，priority

         2. 作用是：

            domain：设置可以访问该cookie的域名；

            path：设置可以访问该cookie的页面路径；

            expires/max-age：设置cookie的过期时间；

            http-only：为true时，只会在http请求头中携带cookie，禁止通过js操作cookie；

            secure：设置是否通过https来传递此cookie；

            samesite：是否禁止第三方cookie，参数有strict，lax，none

   7. 如何解决跨域 （协议+域名+端口"三者相同才不算跨域）

      1. jsonp
      2. window.domain,iframe
      3. postMessage
      4. CORS
      5. nginx代理跨域
      6. nodejs中间件代理跨域
      7. Vue项目中devServer的proxy中设置

   8. 安全相关

      1. XSS 及解决方案
      2. CORS攻击

   9. 发布订阅模式

7. 算法

   1. 两个链表不知道长度，在某一个节点之后他们是相等的，找出这个节点
   2. 广度优先和深度优先
   3. 判断最长回文字符串
   4. 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
   5. 判断对称二叉树
   6. 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。 目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1， 最多能让1个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能 让2个孩子满足
   7. 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值; X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和; 现在需要你找出数列a的所有区间中, X值最大的那个区间; 如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
   8. 两个有序链表和并成一个有序链表
   9. 合并乱序区间

8. 平时遇到的问题，如何解决

9. 能不能加班，抗压能力
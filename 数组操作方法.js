  let array = [1,2,3,4,5]

  /**1.concat() **/

  // (1)不改变原数组
  // (2)返回被连接数组的一个副本
  // let array1 = [1,2,3,4,5]
  // let array2 = [11,22]
  // let array3 = array1.concat(array2)
  // let array3 = array1.concat(11,22)
  // console.log(array3)


  /**2.copyWithin() **/
  
  // (1)改变原数组
  // (2)方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
  // (3)array.copyWithin(target, start, end)：（必需,复制到指定目标索引位置；	可选,元素复制的起始位置; 可选,停止复制的索引位置：*不包括结束索引位的元素 (默认为 array.length),如果为负值，表示倒数;）
  // let array1 = [1,2,3,4,5,6]
  // let array2 = array1.copyWithin(2,0,3)
  // console.log(array1) //[1, 2, 1, 2, 3, 6]
  // console.log(array2) //[1, 2, 1, 2, 3, 6]

  /**3.every() **/
  
  // (1)不改变原数组
  // (2)方法用于检测数组所有元素是否都符合指定条件。
  // (3)如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测；如果所有元素都满足条件，则返回 true。


  /**4.some() **/
  
  // (1)不改变原数组
  // (2)方法用于检测数组中的元素是否满足指定条件。
  // (3)如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测；如果没有满足条件的元素，则返回false。


  /**5.fill() **/
  
  // (1)改变原数组
  // (2)方法用于将一个固定值替换数组的元素。
  // (3)array.fill(value, start, end)：（必需,填充的值；可选，开始填充位置; 可选,停止填充位置：*不包括停止索引位的元素 (默认为 array.length)；）
  // let array1 = [1,2,3,4,5,6];
  // let array2 = array1.fill(2,0,3);
  // console.log(array1) //[2, 2, 2, 4, 5, 6]
  // console.log(array2) //[2, 2, 2, 4, 5, 6]


  /**6.map() **/
  
  // (1)不改变原数组
  // (2)数组中的元素为原始数组元素调用函数处理后的值。不会对空数组进行检测。
  // (3)注意：为json时，返回值为具体的元素或true/false; 
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   }
  // ];
  // let array2 = array1.map((item, index)=>{
  //   return item.a
  // });
  // console.log(array2) //["11", "33"]

  // let array2 = array1.map((item, index)=>{
  //   return item.a === "33"
  // });
  // console.log(array2) //[false, true]


  /**7.filter() **/
  
  // (1)不改变原数组
  // (2)新数组中的元素是通过检查指定数组中符合条件的所有元素。不会对空数组进行检测。如果没有符合条件的元素则返回空数组。
  // (3)注意：为json时，返回为符合条件的元素对象; 
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   }
  // ];
  // let array2 = array1.filter((item, index)=>{
  //   return item.a;
  // });
  // console.log(array2) //[{a:"11",b:"22"},{a:"33",b:"44"}]

  // let array2 = array1.filter((item, index)=>{
  //   if(item.a === "33"){
  //     return item;
  //   }
  //   return item.a === "33";
  // });
  // console.log(array2) //[{a:"33",b:"44"}]


  /**8.includes() **/
  
  // (1)不改变原数组
  // (2)方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
  // (3)arr.includes(searchElement, fromIndex)：必须，需要查找的元素值；可选，从该索引处开始查找 searchElement，如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索，默认为 0;计算结果为负数时,搜索整个数组。
  // let array1 = [1,2,3,4,5];
  // let array2 = array1.includes(3, 0);
  // console.log(array2)  // true

  // let array2 = array1.includes(3, -100);
  // console.log(array2)  //true


  /**9.find() **/
  
  // (1)不改变原数组
  // (2)方法返回通过测试（函数内判断）的数组的第一个元素的值。
  // (3)当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数；如果没有符合条件的元素返回 undefined；
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   },
  // ];
  // let array2 = array1.find((item, index)=>{
  //   return item.a;
  // });
  // console.log(array2) //{a:"11",b:"22"}

  // let array2 = array1.find((item, index)=>{
  //   return item.a === "33";
  // });
  // console.log(array2) //{a:"33",b:"44"}

  // let array2 = array1.find((item, index)=>{
  //   return item.a === "55";
  // });
  // console.log(array2) //undefined


  /**10.findIndex() **/
  
  // (1)不改变原数组
  // (2)方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
  // (3)当数组中的元素符合测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数；如果没有符合条件的元素返回 -1;
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   },
  // ];
  // let array2 = array1.findIndex((item, index)=>{
  //   return item.a;
  // });
  // console.log(array2) // 0

  // let array2 = array1.findIndex((item, index)=>{
  //   return item.a === "33";
  // });
  // console.log(array2) // 1

  // let array2 = array1.findIndex((item, index)=>{
  //   return item.a === "55";
  // });
  // console.log(array2) // -1


  /**11.values() **/
  
  // (1)不改变原数组
  // (2)values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   },
  // ];
  // let array2 = array1.values();
  // console.log(array2) // Array Iterator {}
  // for (let value of array2){
  //   console.log(value)  // {a: "11", b: "22"}
  //                       // {a: "33", b: "44"}
  // }

  // let array1 = [1,2,3,4,5]
  // let array2 = array1.values();
  // console.log(array2) // Array Iterator {}
  // for(let item of array2){
  //   console.log(item)  // 1 /2 /3 /4 /5
  // }


  /**12.keys() **/    //和values类似,但返回的是key的Iterator对象
  
  // (1)不改变原数组
  // (2)keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   },
  // ];
  // let array2 = array1.keys();
  // console.log(array2) // Array Iterator {}
  // for (let value of array2){
  //   console.log(value)  // 0 / 1
  // }

  // let array1 = [1,2,3,4,5]
  // let array2 = array1.keys();
  // console.log(array2) // Array Iterator {}
  // for(let item of array2){
  //   console.log(item)  // 0 /1 /2 /3 /4
  // }

  
  /**13.forEach() **/
  
  // (1)方法用于调用数组的每个元素，并将元素传递给回调函数。无返回值；
  // (2)注意** 如果是引用类型的值，会改变原数组；否则不会改变原数组；
  // let array1 = [
  //   {
  //     a:"11",
  //     b:"22",
  //   },
  //   {
  //     a:"33",
  //     b:"44",
  //   },
  // ];
  // array1.forEach((item, index)=>{
  //   if(item.a === '11'){
  //     item.a = Number(item.a)
  //   }
  // });
  // console.log(array1) // [{a:11,b:"22",},{a:"33",b:"44",}]

  
  /**14.join() **/
  // (1)不改变原数组
  // (2)join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
  // (3)arrayObject.join(separator): 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

  // let array1 = [1,2,3,4,5];
  // console.log(array1.join(), array1) // '1,2,3,4,5'
  // console.log(array1.join('-'), array1) // '1-2-3-4-5'

  /**15.indexOf() **/
  
  // (1)indexOf() 方法可返回数组中某个指定的元素位置。
  // (2)该方法将从头到尾地检索数组，看它是否含有对应的元素。如果找到一个 item，则返回 item 的第一次出现的位置。
  // (3)array.indexOf(item, start): 	必须,查找的元素; 可选的整数参数。规定在数组中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索
  // let array1 = [1,2,2,3,4,5];
  // console.log(array1.indexOf(2)) // 1
  // console.log(array1.indexOf(6)) // -1
  // console.log(array1.indexOf(2, 2)) // 2
  // console.log(array1.indexOf(2,23)) // -1


  /**16.lastIndexOf() **/
  
  // (1)lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置。如果要检索的元素没有出现，则该方法返回 -1。
  // (2)该方法将从尾到头地检索数组中指定元素 item。开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时）。如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置。数组的索引开始位置是从 0 开始的。
  // (3)array.indexOf(item,start): 	必需。规定需检索的字符串值; 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
  // let array1 = [1,4,3,4,5];
  // console.log(array1.lastIndexOf(4)) // 3
  // console.log(array1.lastIndexOf(6)) // -1
  // console.log(array1.lastIndexOf(4,2)) // 1


  /**17.entries() **/
  
  // (1)不改变原数组
  // (2)entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
  // (3)迭代对象中数组的索引值作为 key， 数组元素作为 value。
  // var fruits = ["Banana", "Orange", "Apple", "Mango"];
  // var ss = fruits.entries();
  // for(let a of ss){
  //   console.log(a)  // [0, "Banana"] / [1, "Orange"] / [2, "Apple"] / [3, "Mango"]
  // }


  /**18.slice() **/  //切片
  
  // (1)不改变原数组
  // (2)slice() 方法可从已有的数组中返回选定的元素。
  // (3)array.slice(start, end)    
    // (3-1)可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
    // (3-2)可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。 
  // var fruits = ["Banana", "Orange", "Apple", "Mango"];
  // var ss = fruits.slice(); //没有参数只复制整个数组;
  // var ss = fruits.slice(2,1); //参数指定错误，返回[];
  // var ss = fruits.slice(2,4); //返回["Apple", "Mango"];
  // console.log(ss)


  /**19.splice() **/
  
  // (1)改变原数组
  // (2)splice() 方法用于添加或删除数组中的元素。返回值：如果仅删除一个元素，则返回一个元素的数组。 如果未删除任何元素，则返回空数组。
  // (3)array.splice(index,howmany,item1,.....,itemX) ：必需，规定从何处添加/删除元素，该参数是开始插入和（或）删除的数组元素的下标，必须是数字；	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素；可选。要添加到数组的新元素；
    
  // var fruits = ["Banana", "Orange", "Apple", "Mango"];
  // var ss = fruits.splice(2,1,"Lemon","Kiwi");
  // console.log(ss)  //["Apple"]
  // console.log(fruits)  //["Banana", "Orange", "Lemon", "Kiwi", "Mango"]


  /**20.push() **/
  
  // (1)改变原数组
  // (2)push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
  // (3) 新元素将添加在数组的末尾。注意： 此方法改变数组的长度。
    
  // var fruits = [1,2,3,4,5];
  // var ss = fruits.push(2,1);  
  // console.log(ss)  // 7
  // console.log(fruits)  //[1,2,3,4,5,2,1]


  /**22.unshift() **/
  
  // (1)改变原数组
  // (2)unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
  // (3) 新元素将添加在数组的头部。注意： 此方法改变数组的长度。
    
  // var fruits = [1,2,3,4,5];
  // var ss = fruits.unshift(2,1,0);
  // console.log(ss)  // 8
  // console.log(fruits)  //[2,1,0,1,2,3,4,5]


  /**23.pop() **/
  
  // (1)改变原数组
  // (2)pop() 方法用于删除数组的最后一个元素并返回删除的元素。
    
  // var fruits = [1,2,3,4,5];
  // var ss = fruits.pop();
  // console.log(ss)  // 5
  // console.log(fruits)  //[1,2,3,4]
  

  /**24.shift() **/
  // (1)改变原数组
  // (1)shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
      
  // var fruits = [1,2,3,4,5];
  // var ss = fruits.shift();
  // console.log(ss)  // 1
  // console.log(fruits)  //[2,3,4,5]


  /**25.reverse() **/
  
  // (1)改变原数组
  // (2)reverse() 方法用于颠倒数组中元素的顺序。
    
  // var fruits = [1,2,3,4,5];
  // var ss = fruits.reverse();
  // console.log(ss)  //[5,4,3,2,1]
  // console.log(fruits)  //[5,4,3,2,1]


  /**26.sort() **/
  
  // (1)改变原数组
  // (2)sort() 方法用于对数组的元素进行排序。
  // (3)arrayObject.sort(sortby): 可选。规定排序顺序。必须是函数; 没有使用参数，将按字母顺序对数组中的元素进行排序。应把数组的元素都转换成字符串（如有必要），以便进行比较。
  // (4)注意，数组中undefined的元素都排列在数组末尾。即使你提供了自定义的排序函数也是这样，因为undefined值不会被传递给你提供的orderfunc。
    
  // let fruits = [1,3,4,2,5];
  // let ss = fruits.sort((a, b)=>{
  //   return a - b  //升序
  // })
  // console.log(ss, , fruits, "升序")

  // let ss = fruits.sort((a, b)=>{
  //   return b - a //降序
  // })
  // console.log(ss, fruits, "降序")

  // let fruits = [   //为json时，根据某个值进行排序
  //   {
  //     key: 3,
  //     name: "aa",
  //   },  
  //   { 
  //     key: 1,
  //     name: "bb",
  //   },
  //   {
  //     key: 2,
  //     name: "cc",
  //   }
  // ];
  // let ss = fruits.sort((a,b)=>{
  //   let val1 = a.key;
  //   let val2 = b.key;
  //   return val1 - val2;  //升序
  // })

  // console.log(ss, fruits, "升序")



  /**27.
   * 
   * 
   * 
   * () **/
  
  // (1)不改变原数组
  // (2)toString() 方法可把数组转换为字符串，并返回结果
  // (3)arrayObject.toString() : arrayObject 的字符串表示。返回值与没有参数的 join() 方法返回的字符串相同。
    
  // let fruits = [1,3,4,2,5];
  // let ss = fruits.toString();
  // console.log(ss, fruits)  // "1,3,4,2,5"

  // let fruits = [   //为json时
  //   {
  //     key: 3,
  //     name: "aa",
  //   },  
  //   { 
  //     key: 1,
  //     name: "bb",
  //   },
  //   {
  //     key: 2,
  //     name: "cc",
  //   }
  // ];
  // let ss = fruits.toString();  //[object Object],[object Object],[object Object]
  // let ss = JSON.stringify(fruits) //"[{"key":3,"name":"aa"},{"key":1,"name":"bb"},{"key":2,"name":"cc"}]"
  // console.log(ss, fruits)


  /**28.toLocaleString() **/
  
  // (1)toLocaleString 方法是用于返回格式化对象后的字符串，该字符串格式因语言不同返回值也会不同，可以通过传参决定返回的语言及具体的表现，其语法如下：
  // (2)object.toLocaleString([locales [, options]]); locales 参数用于指定格式化对象时使用的语言环境，可以不传。该参数具体可选值可以参考这里，一般而言使用 en 或 zh 即可应对大部分的情况；
  // (3)options 参数是输出样式的配置项，根据 object 类型的不同会有不同的选项，后面会详细介绍这个参数，但是需要注意的是如果不传 locales 参数，那么 options 参数是无效的；
    
  // 需要给整数部分每三位加一个逗号   toLocaleString 在数字类型上的使用（非常之nb）
  // let num = 5201314;
  // console.log(num.toLocaleString())  // 5,201,314
  


  /**29.reduce() **/
  
  // (1)不改变原数组
  // (2)reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值; 对于空数组是不会执行回调函数的。
  // (3)array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)
    
  // let fruits = [1,2,3,4,5];
  // let ss = fruits.reduce((pre, cur, index, array)=>{
  //   console.log(pre, cur, index, array)
  //   return pre + cur;
  // },0)

  // console.log(ss, "累加值")  //15

  
  /**30.reduceRight() **/
  
  // (1)不改变原数组
  // (2)reduceRight() 和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
  // (3)array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)
    
  // let fruits = [1,2,3,4,5];
  // let ss = fruits.reduceRight((pre, cur, index, array)=>{
  //   console.log(pre, cur, index, array)
  //   return pre + cur;
  // },0)

  // console.log(ss, "累加值")  //15

  // reduce的高级用法
  // （1）计算数组中每个元素出现的次数
  // let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  // let ss = names.reduce((pre, cur)=>{
  //   console.log(pre, cur)
  //   if(cur in pre){
  //     pre[cur] ++;
  //   }else{
  //     pre[cur] = 1;
  //   }
  //   return pre;
  // },{})
  // console.log(ss)

  // (2)数组去重
  // let arr = [1,2,3,4,4,1]
  // let ss = arr.reduce((pre, cur)=>{
  //   if(!pre.includes(cur)){
  //     return pre.concat(cur);
  //   }else{
  //     return pre;
  //   }
  // },[])
  // console.log(ss)
  
  // （3）将二维数组转化为一维数组
  // let arr = [[0, 1], [2, 3], [4, 5]]
  // let ss = arr.reduce((pre, cur)=>{
  //   return pre.concat(cur)
  // },[])

  // console.log(ss)

  // (4) 将多维数组转化为一维数组
  // let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
  // let ss = function(arr){
  //   return arr.reduce((pre, cur)=>{
  //     return pre.concat(Array.isArray(cur) ? ss(cur) : cur)
  //   },[])
  // }
  // console.log(ss(arr))

  // (5)对象里的属性求和
  // let result = [
  //   {
  //     subject: 'math',
  //     score: 10
  //   },
  //   {
  //     subject: 'chinese',
  //     score: 20
  //   },
  //   {
  //     subject: 'english',
  //     score: 30
  //   }
  // ];

  // let ss = result.reduce((pre, cur)=>{
  //   return pre + cur.score;
  // },0) 
  // console.log(ss)


  /**31.Array.isArray() **/
  
  // (1)Array.isArray() 用于确定传递的值是否是一个Array。
  // Array.isArray([1, 2, 3]);  // true
  
  // Array.isArray({foo: 123});  // false
  
  // Array.isArray("foobar");  // false
  
  // Array.isArray(undefined);  // false


  /**32.ES6 Array.from() **/
  
  // https://www.cnblogs.com/jf-67/p/8440758.html  博文
  // (1)将类数组对象转换为真正数组
  // (2)将Set结构的数据转换为真正的数组
  // (3)将字符串转换为数组
  // (4)Array.from参数是一个真正的数组
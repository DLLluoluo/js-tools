const a = {
  name: "jeff",
  phone: "234234234234",
  address: "上海市"
}
const b = {
  name: "",
  phone: ""
}

//(1) ES5中新增Object.keys()
// Object.keys方法是JavaScript中用于遍历对象属性的一个方法 。它传入的参数是一个对象，返回的是一个数组，数组中包含的是该对象所有的属性名。
Object.keys(b).forEach(item => {
  b[item] = a[item] || ''; 
})
console.log(b)  //{name: "jeff", phone: "234234234234"} 


//(2) ES5中新增Object.values()
// Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值。Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值。
console.log(Object.values(a))  //["jeff", "234234234234", "上海市"]
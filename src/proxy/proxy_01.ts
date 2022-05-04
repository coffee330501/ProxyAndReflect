// 被代理的对象
const user = { name: "张三", age: 13 };

// 代理
const proxy = new Proxy(user, {
  /**
   * user的get行为被代理了,每次获取属性都将打印
   * @param target 类
   * @param propKey 获取的属性名称
   * @param receiver proxy实例本身(可选)
   * @returns
   */
  get: function (target, propKey, receiver) {
    console.log(target, propKey, receiver);
    return Reflect.get(target, propKey, receiver);
  },
});

console.log(proxy.name);
proxy.name = "李四";
console.log(proxy.name);

import Demo from "./Demo/index.js";
import MyBtn from "./MyBtn/index.js";
console.log(Demo, "-----------Demo");
let install = function (Vue) {
  Vue.component(Demo.name, Demo);
  Vue.component(MyBtn.name, MyBtn);
};
export { Demo, MyBtn };
export default {
  install,
};

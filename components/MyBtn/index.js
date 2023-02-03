import MyBtn from "./src/index.vue";

MyBtn.install = function (Vue) {
  Vue.component(MyBtn.name, MyBtn);
};

export default MyBtn;

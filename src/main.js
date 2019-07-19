// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

//处理移动端click事件300毫秒延迟。
import FastClick from "fastclick";
FastClick.attach(document.body);
//解决input输入框需要连续点击两次或者长按才能获取焦点
FastClick.prototype.focus = function(targetElement) {
  var length;
  if (
    deviceIsIOS &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf("date") !== 0 &&
    targetElement.type !== "time" &&
    targetElement.type !== "month"
  ) {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};

// vant与样式
import Vant from "vant";
import "vant/lib/index.css";
import "@/styles/index.less";
Vue.use(Vant);

//滚动
import vuescroll from "vuescroll";
// vuescroll全局配置
Vue.use(vuescroll, {
  ops: {
    mode: "slide",
    bar: {
      background: "#4963C2",
      minSize: "0.1"
    }
  },
  name: "vueScroll"
});

// 注册全局组件
import * as components from "@/components";

Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

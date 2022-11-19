<template>
  <div class="box">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var box = document.querySelector(".box");
      var box1 = document.querySelector(".box1");
      var box2 = document.querySelector(".box2");
      var box3 = document.querySelector(".box3");
      var touch_arr = [];

      box1.addEventListener("touchmove", (e) => {
        touch_arr.push(e.targetTouches[0].clientY);

        if (touch_arr[0] < touch_arr[1]) {
          box1.style.transform = "translateY(100px)";
          touch_arr = [];
        } else if (touch_arr[0] > touch_arr[1]) {
          box1.style.transform = "translateY(-100px)";
          touch_arr = [];
        }
      });

      box1.addEventListener("touchstart", () => {
        if (touch_arr[0]) {
          touch_arr = [];
        }
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.box1 {
  width: 100%;
  height: 100vh;
  background: darkgoldenrod;
  transition: all 1s;
}
.box2 {
  width: 100%;
  height: 100vh;
  background: darkkhaki;
  transition: all 1s;
}
.box3 {
  width: 100%;
  height: 100vh;
  background: darkmagenta;
  transition: all 1s;
}
</style>
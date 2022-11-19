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

      box1.addEventListener("touchstart", () => {
        console.log(box1.pageY);
      });
      box1.addEventListener("touchend", () => {
        console.log(screenY);
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
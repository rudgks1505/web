<template>
  <div class="aaa">
    <div class="aaa_wrap">
      <div class="aaa1"></div>
      <div class="aaa2"></div>
      <div class="aaa3"></div>
      <div class="aaa4"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var aaa = document.querySelector(".aaa");
      var aaa_wrap = document.querySelector(".aaa_wrap");
      var aaa1 = document.querySelector(".aaa1");
      var aaa2 = document.querySelector(".aaa2");
      var aaa3 = document.querySelector(".aaa3");
      var aaa4 = document.querySelector(".aaa4");
      var touch_arr = [];

      aaa.addEventListener("touchmove", (e) => {
        touch_arr.push(e.touches[0].clientY);
      });

      aaa.addEventListener("touchstart", () => {
        if (touch_arr[0] < touch_arr[1]) {
          aaa_wrap.style.transform = `translateY(-${window.innerHeight}px)`;
          touch_arr = [];
        } else if (touch_arr[0] > touch_arr[1]) {
          aaa_wrap.style.transform = `translateY(0px)`;
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
.aaa {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.aaa1 {
  width: 100%;
  height: 100vh;
  background: darkblue;
}
.aaa2 {
  width: 100%;
  height: 100vh;
  background: darkcyan;
}
.aaa3 {
  width: 100%;
  height: 100vh;
  background: darkgoldenrod;
}
.aaa4 {
  width: 100%;
  height: 100vh;
  background: darkgray;
}
.aaa_wrap {
  transition: all 1s;
}
</style>
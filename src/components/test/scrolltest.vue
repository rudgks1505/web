<template>
  <div class="port_con">
    <div class="port_wrap">
      <div class="port_box1"></div>
      <div class="port_box2"></div>
      <div class="port_box3">
        <footer-1></footer-1>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import footer1 from "../footer/footer1.vue";

export default {
  components: { footer1 },
  setup() {
    const state = reactive({
      count: 0,
    });
    onMounted(() => {
      var port_wrap = document.querySelector(".port_wrap");
      var port_box1 = document.querySelector(".port_box1");
      var port_box2 = document.querySelector(".port_box2");
      var port_box3 = document.querySelector(".port_box3");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
      respon_f();
      function respon_f(params) {
        if (max_600px.matches) {
        }
        if (min_600px_max_1000px.matches) {
        }
        if (min_1000px.matches) {
          wheel_f();
        }
      }

      function wheel_f() {
        window.addEventListener("wheel", (e) => {
          //휠돌렷을시 높이 재정비
          if (
            Math.floor(port_box1.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box1.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(${-window.innerHeight}px)`;
              flip();
            }
          } else if (
            Math.floor(port_box2.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box2.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(0px)`;
            } else if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight + port_box3.clientHeight
              }px)`;
            }
          } else if (
            Math.floor(port_box3.getBoundingClientRect().top) ===
              window.innerHeight - port_box3.clientHeight ||
            Math.floor(port_box3.getBoundingClientRect().top) - 1 ===
              window.innerHeight - port_box3.clientHeight
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(-${window.innerHeight}px)`;
            }
          }
        });
      }
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.port_con {
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.port_wrap {
  transition: all 1s;
}
.port_box1 {
  width: 100%;
  height: 100vh;
  background: darkcyan;
}
.port_box2 {
  width: 100%;
  height: 100vh;
  background: darkgoldenrod;
}
</style>
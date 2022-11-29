<template>
  <div class="port_con">
    <div class="port_wrap">
      <div class="port_box1">1</div>
      <div class="port_box2">2</div>
      <div class="port_box3">3</div>
      <div class="port_box4">4</div>
      <div class="port_box5">5</div>
      <div class="port_box6"><footer-1></footer-1></div>
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
      var port_box4 = document.querySelector(".port_box4");
      var port_box5 = document.querySelector(".port_box5");
      var port_box6 = document.querySelector(".port_box6");
      var touch_arr = [];
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      let vh = window.innerHeight * 0.01;

      document.querySelector(".port_con").style.setProperty("--vh", `${vh}px`);
      respon_f();
      function respon_f(params) {
        if (max_600px.matches) {
          touch_f();
        }
        if (min_600px_max_1000px.matches) {
          touch_f();
        }
        if (min_1000px.matches) {
          wheel_f();
        }
      }

      //터치이벤트
      function touch_f(params) {
        port_wrap.addEventListener("touchmove", (e) => {
          touch_arr.push(e.targetTouches[0].clientY);

          if (touch_arr[0] > touch_arr[1]) {
            port_wrap.style.transform = `translateY(-${window.innerHeight}px)`;
            touch_arr = [];
          } else if (touch_arr[0] < touch_arr[1]) {
            port_wrap.style.transform = `translateY(-${0}px)`;
            touch_arr = [];
          }
        });
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
            }
          } else if (
            Math.floor(port_box2.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box2.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(0px)`;
            } else if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 2
              }px)`;
            }
          } else if (
            Math.floor(port_box3.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box3.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(-${window.innerHeight}px)`;
            } else if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 3
              }px)`;
            }
          } else if (
            Math.floor(port_box4.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box4.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 2
              }px)`;
            } else if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 4
              }px)`;
            }
          } else if (
            Math.floor(port_box5.getBoundingClientRect().top) === 0 ||
            Math.floor(port_box5.getBoundingClientRect().top) === -1
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 3
              }px)`;
            } else if (e.wheelDeltaY < 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 4 + port_box6.clientHeight
              }px)`;
            }
          } else if (
            Math.floor(port_box6.getBoundingClientRect().top) ===
              window.innerHeight - port_box6.clientHeight ||
            Math.floor(port_box6.getBoundingClientRect().top) - 1 ===
              window.innerHeight - port_box6.clientHeight
          ) {
            if (e.wheelDeltaY > 0) {
              port_wrap.style.transform = `translateY(-${
                window.innerHeight * 4
              }px)`;
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
@media screen and (max-width: 600px) {
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
}

@media screen and (min-width: 1025px) {
}

.port_con {
  overflow: hidden;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
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
.port_box3 {
  width: 100%;
  height: 100vh;
  background: darkkhaki;
}
.port_box4 {
  width: 100%;
  height: 100vh;
  background: darkgreen;
}
.port_box5 {
  width: 100%;
  height: 100vh;
  background: darkgray;
}
.port_box6 {
  width: 100%;
}
</style>
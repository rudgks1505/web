<template>
  <div class="port_con">
    <div class="port_wrap">
      <div class="port_box1">
        <div class="port_box1_img"></div>
        <div class="port_box1_img1"></div>
        <div class="port_box1_img2"></div>
        <div class="port_box1_img3"></div>

        <div class="port_box1_btnbox">
          <button class="port_box1_btn">1</button>
          <button class="port_box1_btn">2</button>
          <button class="port_box1_btn">3</button>
          <button class="port_box1_btn">4</button>
          <button class="port_box1_btn">5</button>
        </div>
      </div>
      <div class="port_box2">
        <div class="port_box2_item"><p>1</p></div>
        <div class="port_box2_item1"><p>2</p></div>
        <div class="port_box2_item2"><p>3</p></div>
        <div class="port_box2_item3"><p>4</p></div>
      </div>
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
      var port_box2_item = document.querySelector(".port_box2_item");
      var port_box2_item1 = document.querySelector(".port_box2_item1");
      var port_box2_item2 = document.querySelector(".port_box2_item2");
      var port_box2_item3 = document.querySelector(".port_box2_item3");
      var port_box1_btn = document.querySelectorAll(".port_box1_btn");
      var port_box1_img = document.querySelector(".port_box1_img");
      var port_box1_img1 = document.querySelector(".port_box1_img1");
      var port_box1_img2 = document.querySelector(".port_box1_img2");
      var port_box1_img3 = document.querySelector(".port_box1_img3");
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
          slide_f();
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
      //휠이벤트
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
      //박스1슬라이더
      function slide_f(params) {
        port_box1_btn[0].addEventListener("click", () => {
          port_box1_img.style.transform = "translateX(0%)";
          port_box1_img1.style.transform = "translateX(0%)";
          port_box1_img2.style.transform = "translateX(0%)";
          port_box1_img3.style.transform = "translateX(0%)";

          //박스2
          port_box2_item.style.transform = "translateX(0%)";
          port_box2_item1.style.transform = "translateX(0%)";
          port_box2_item2.style.transform = "translateX(0%)";
          port_box2_item3.style.transform = "translateX(0%)";
        });
        port_box1_btn[1].addEventListener("click", () => {
          port_box1_img.style.transform = "translateX(-100%)";
          port_box1_img1.style.transform = "translateX(-100%)";
          port_box1_img2.style.transform = "translateX(-100%)";
          port_box1_img3.style.transform = "translateX(-100%)";
          //박스2
          port_box2_item.style.transform = "translateX(-100%)";
          port_box2_item1.style.transform = "translateX(-100%)";
          port_box2_item2.style.transform = "translateX(-100%)";
          port_box2_item3.style.transform = "translateX(-100%)";
        });
        port_box1_btn[2].addEventListener("click", () => {
          port_box1_img.style.transform = "translateX(-200%)";
          port_box1_img1.style.transform = "translateX(-200%)";
          port_box1_img2.style.transform = "translateX(-200%)";
          port_box1_img3.style.transform = "translateX(-200%)";
          //박스2
          port_box2_item.style.transform = "translateX(-200%)";
          port_box2_item1.style.transform = "translateX(-200%)";
          port_box2_item2.style.transform = "translateX(-200%)";
          port_box2_item3.style.transform = "translateX(-200%)";
        });
        port_box1_btn[3].addEventListener("click", () => {
          port_box1_img.style.transform = "translateX(-300%)";
          port_box1_img1.style.transform = "translateX(-300%)";
          port_box1_img2.style.transform = "translateX(-300%)";
          port_box1_img3.style.transform = "translateX(-300%)";
          //박스2
          port_box2_item.style.transform = "translateX(-300%)";
          port_box2_item1.style.transform = "translateX(-300%)";
          port_box2_item2.style.transform = "translateX(-300%)";
          port_box2_item3.style.transform = "translateX(-300%)";
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
  height: 100vh;
}
.port_wrap {
  transition: all 1s;
}
.port_box1 {
  width: 100%;
  height: 100vh;
  background: darkcyan;
  position: relative;
  display: flex;
  overflow: hidden;
}
.port_box2 {
  width: 100%;
  height: 100vh;
  background: darkgoldenrod;
  position: relative;
  display: flex;
  overflow: hidden;
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
/* 박스1 */
.port_box1_btnbox {
  position: absolute;
  width: 100%;
  top: 0px;
}
.port_box1_img {
  background-image: url("../../assets/slide/slide1.jpg");
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  transition: all 1s;
}
.port_box1_img1 {
  background-image: url("../../assets/slide/slide2.jpg");
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  transition: all 1s;
}
.port_box1_img2 {
  background-image: url("../../assets/slide/slide3.jpg");
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  transition: all 1s;
}
.port_box1_img3 {
  background-image: url("../../assets/slide/slide4.jpg");
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  transition: all 1s;
}
/* 박스2 */
.port_box2_item {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  background: red;
}
.port_box2_item1 {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  background: blue;
}
.port_box2_item2 {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  background: salmon;
}
.port_box2_item3 {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-size: cover;
  background: silver;
}
</style>
<template>
  <div class="spinner">
    <div class="spinner_nav"></div>
    <video
      src="../../assets/explore/People2.mp4"
      class="spinner_video"
      autoplay
      muted
    ></video>
    <div class="spinner_border_box">
      <div class="spinner_border_box_h">
        <h1 class="spinner_border_box_span1">SIMPLE IS</h1>
        <h1 class="spinner_border_box_span2">THE BEST!</h1>
      </div>
    </div>
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
      load_f();
      function load_f(latex) {
        window.addEventListener("load", () => {
          var body = document.querySelector("body");
          var box = document.querySelector(".box");
          var spinner = document.querySelector(".spinner");
          var spinner_border_box = document.querySelector(
            ".spinner_border_box"
          );
          var spinner_border_box_h = document.querySelector(
            ".spinner_border_box_h"
          );
          var spinner_border_box_span1 = document.querySelector(
            ".spinner_border_box_span1"
          );
          var spinner_border_box_span2 = document.querySelector(
            ".spinner_border_box_span2"
          );
          var max_600px = window.matchMedia("screen and (max-width: 600px)");
          var min_600px_max_1000px = window.matchMedia(
            "screen and (min-width: 600px) and (max-width: 1025px)"
          );
          var min_1000px_max_1600px = window.matchMedia(
            "screen and (min-width: 1025px) and (max-width: 1600px)"
          );
          var min_1600px = window.matchMedia("screen and (min-width: 1600px)");
          body.style.overflowY = "hidden";
          spinner_border_box_span1.style.transition = `all 2s`;
          spinner_border_box_span2.style.transition = `all 2s`;

          setTimeout(() => {
            spinner_border_box.style.border = "50px solid white";
            setTimeout(() => {
              spinner_border_box_span1.style.transform = `translateX(${0}%)`;
              spinner_border_box_span1.style.opacity = "1";
            }, 500);

            setTimeout(() => {
              spinner_border_box_span2.style.transform = `translateX(${0}%)`;
              spinner_border_box_span2.style.opacity = "1";
            }, 1000);

            setTimeout(() => {
              spinner_border_box.style.border = "0px solid white";
              spinner_border_box_span1.style.transition = `all 0.5s`;
              spinner_border_box_span2.style.transition = `all 0.5s`;
              setTimeout(() => {
                spinner_border_box_span1.style.opacity = `0`;
                spinner_border_box_span2.style.opacity = `0`;
                setTimeout(() => {
                  slide_line1[0].style.width = `${home_con_item_slide_item[0].clientWidth}`;
                }, 400);
              }, 1000);
            }, 2000);

            setTimeout(() => {
              scrollTo(0, 0);
            }, 100);
          }, 1000);
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
  .spinner_border_box_h {
    font-size: 30px;
    height: 150px;
  }
  .spinner_border_box_span1 {
    transform: translateX(-20%);
  }
  .spinner_border_box_span2 {
    transform: translateX(-20%);
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .spinner_border_box_h {
    font-size: 50px;
    height: 300px;
  }
  .spinner_border_box_span1 {
    transform: translateX(-20%);
  }
  .spinner_border_box_span2 {
    transform: translateX(-20%);
  }
}

@media screen and (min-width: 1025px) and (max-width: 1600px) {
  .spinner_border_box_h {
    font-size: 70px;
    height: 400px;
  }
  .spinner_border_box_span1 {
    transform: translateX(-20%);
  }
  .spinner_border_box_span2 {
    transform: translateX(-20%);
  }
}
@media screen and (min-width: 1600px) {
  .spinner_border_box_h {
    font-size: 100px;
    height: 600px;
  }
  .spinner_border_box_span1 {
    transform: translateX(-20%);
  }
  .spinner_border_box_span2 {
    transform: translateX(-20%);
  }
}
* {
  box-sizing: border-box;
}
/* 스피너 */
.spinner {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 300;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
}

.spinner_border_box {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0px;
  border: 0px solid white;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.spinner_border_box_h {
  color: white;
  width: 1400px;
  position: relative;
  display: flex;
  justify-content: center;
}
.spinner_border_box_span1 {
  display: inline;
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0px;
  opacity: 0;
}
.spinner_border_box_span2 {
  display: inline;
  bottom: 0px;
  right: 0px;
  margin: 0px;
  position: absolute;
  opacity: 0;
}
</style>
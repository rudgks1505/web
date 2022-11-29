<template>
  <div class="box1">
    <div class="home_flex">
      <div class="home_back">
        <div class="home_back_con">
          <div class="home_con_item">
            <div class="home_con_hcon">
              <div>
                <h1 class="home_con_h">
                  마음을 움직이는<br />스토리텔링 웹/앱 개발 기업
                  <br />
                  <span style="font-size: 0.5em"
                    >웹/앱 개발의 자존심, 타협하지 않는 최고의 퀄리티</span
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home_back2">
        <div class="home_back_con">
          <div class="home_con_item">
            <div class="home_con_hcon">
              <div>
                <h1 class="home_con_h">
                  게임인스의<br />현재진행형 포트폴리오
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_back3">
        <div class="home_back_con">
          <div class="home_con_item">
            <div class="home_con_hcon">
              <div>
                <h1 class="home_con_h">
                  게임인스만의<br />고객 니즈 맞춤 설계
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_back4">
        <div class="home_back_con">
          <div class="home_con_item">
            <div class="home_con_hcon">
              <div>
                <h1 class="home_con_h">
                  게임인스는<br />도전하는 인재를 찾습니다.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_wrap">
      <div class="home_con_slide">
        <div class="home_con_item">
          <div class="home_con_item_slide">
            <div class="home_con_item_slide_item">
              <div class="slide_line"></div>
              <div class="slide_line1"></div>
              <h3 class="slide_h">
                마음을 움직이는 스토리텔링 웹/앱 개발 기업
              </h3>
            </div>
            <div class="home_con_item_slide_item">
              <div class="slide_line"></div>
              <div class="slide_line1"></div>
              <h3 class="slide_h">PORTFOLIO</h3>
            </div>
            <div class="home_con_item_slide_item">
              <div class="slide_line"></div>
              <div class="slide_line1"></div>
              <h3 class="slide_h">STORY</h3>
            </div>
            <div class="home_con_item_slide_item">
              <div class="slide_line"></div>
              <div class="slide_line1"></div>
              <h3 class="slide_h">문의&의뢰</h3>
            </div>
            <div class="home_con_item_slide_item">
              <div class="slide_line"></div>
              <div class="slide_line1"></div>
              <h3 class="slide_h">인재채용</h3>
            </div>
          </div>
        </div>
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
      var home_con_item_slide_item = document.querySelectorAll(
        ".home_con_item_slide_item"
      );
      var home_wrap = document.querySelector(".home_wrap");
      var home_back = document.querySelector(".home_back");
      var home_back2 = document.querySelector(".home_back2");
      var home_back3 = document.querySelector(".home_back3");
      var home_back4 = document.querySelector(".home_back4");
      var home_back_con = document.querySelectorAll(".home_back_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var slide_line = document.querySelectorAll(".slide_line");
      var slide_h = document.querySelectorAll(".slide_h");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      window.addEventListener("resize", () => {
        resize_f();
      });

      resize_f();
      function resize_f(params) {
        if (max_600px.matches) {
          for (let index = 0; index < slide_h.length; index++) {
            slide_h[index].style.display = "none";
          }
        }
        if (min_600px_max_1000px.matches) {
          for (let index = 0; index < slide_h.length; index++) {
            slide_h[index].style.display = "none";
            slide_line[
              index
            ].style.width = `${home_con_item_slide_item[index].clientWidth}px`;
          }
        }
        if (min_1000px.matches) {
          for (let index = 0; index < slide_h.length; index++) {
            slide_h[index].style.display = "block";
            slide_line[
              index
            ].style.width = `${home_con_item_slide_item[index].clientWidth}px`;
          }
        }
      }

      //슬라이더수동

      window.addEventListener("resize", () => {
        resize_f();
      });

      function line_color() {}

      slide_f();
      function slide_f(params) {
        home_con_item_slide_item[0].addEventListener("click", () => {
          slide_line1[0].style.transition = "all 4s";
          slide_line1[1].style.transition = "all 4s";
          slide_line1[2].style.transition = "all 4s";
          slide_line1[3].style.transition = "all 4s";
          slide_line1[4].style.transition = "all 4s";
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";
          home_back.style.transform = "translateX(0%)";
          home_back2.style.transform = "translateX(0%)";
          home_back3.style.transform = "translateX(0%)";
          home_back4.style.transform = "translateX(0%)";

          slide_line1[0].style.width = `${home_con_item_slide_item[0].clientWidth}px`;
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";

          setTimeout(() => {
            home_back_con[0].style.top = "40%";
            home_back_con[0].style.opacity = "1";
          }, 500);
        });
        home_con_item_slide_item[1].addEventListener("click", () => {
          slide_line1[0].style.transition = "all 4s";
          slide_line1[1].style.transition = "all 4s";
          slide_line1[2].style.transition = "all 4s";
          slide_line1[3].style.transition = "all 4s";
          slide_line1[4].style.transition = "all 4s";
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";
          home_back.style.transform = "translateX(-100%)";
          home_back2.style.transform = "translateX(-100%)";
          home_back3.style.transform = "translateX(-100%)";
          home_back4.style.transform = "translateX(-100%)";
          slide_line1[0].style.width = "0%";
          slide_line1[1].style.width = `${home_con_item_slide_item[0].clientWidth}px`;
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";
          setTimeout(() => {
            home_back_con[1].style.top = "40%";
            home_back_con[1].style.opacity = "1";
          }, 500);
        });
        home_con_item_slide_item[2].addEventListener("click", () => {
          slide_line1[0].style.transition = "all 4s";
          slide_line1[1].style.transition = "all 4s";
          slide_line1[2].style.transition = "all 4s";
          slide_line1[3].style.transition = "all 4s";
          slide_line1[4].style.transition = "all 4s";
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";
          home_back.style.transform = "translateX(-200%)";
          home_back2.style.transform = "translateX(-200%)";
          home_back3.style.transform = "translateX(-200%)";
          home_back4.style.transform = "translateX(-200%)";
          slide_line1[0].style.width = "0%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = `${home_con_item_slide_item[0].clientWidth}px`;
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";
          setTimeout(() => {
            home_back_con[2].style.top = "40%";
            home_back_con[2].style.opacity = "1";
          }, 500);
        });
        home_con_item_slide_item[3].addEventListener("click", () => {
          slide_line1[0].style.transition = "all 4s";
          slide_line1[1].style.transition = "all 4s";
          slide_line1[2].style.transition = "all 4s";
          slide_line1[3].style.transition = "all 4s";
          slide_line1[4].style.transition = "all 4s";
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";
          home_back.style.transform = "translateX(-300%)";
          home_back2.style.transform = "translateX(-300%)";
          home_back3.style.transform = "translateX(-300%)";
          home_back4.style.transform = "translateX(-300%)";
          slide_line1[0].style.width = "0%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = `${home_con_item_slide_item[0].clientWidth}px`;
          slide_line1[4].style.width = "0%";
          slide_line[3].style.width = `${home_con_item_slide_item[3].clientWidth}px`;
          setTimeout(() => {
            home_back_con[3].style.top = "40%";
            home_back_con[3].style.opacity = "1";
          }, 500);
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
  .home_con_h {
    font-size: 40px;
  }
  .home_con_item {
    width: 600px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .home_con_h {
    font-size: 60px;
  }
  .home_con_item {
    width: 1025px;
  }
}
@media screen and (min-width: 1025px) {
  .home_con_item {
    width: 1400px;
  }
  .home_con_h {
    font-size: 70px;
  }
}
* {
  box-sizing: border-box;
}
.box1 {
  width: 100%;
  height: 100vh;
}
/* 슬라이더클릭 */
.home_con_slide {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
}
.home_wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 1;
  transition: all 0.4s;
  top: 0;
}
.home_con_item_slide {
  display: flex;
  width: 100%;
  height: 100%;
}
.home_con_item_slide_item {
  width: 20%;
  height: 60px;
  color: white;
  cursor: pointer;
  position: relative;
  margin: 0px 20px;
  font-size: 18.72px;
}
.slide_line {
  height: 2px;
  background: gray;
  position: absolute;
  top: 0;
}
.slide_line1 {
  width: 0%;
  height: 2px;
  background: #0053c9;
  position: absolute;
  top: 0;
  z-index: 3;
  transition: all 4s;
}
/* 슬라이더 */
.home_con_h {
  color: white;
  position: absolute;
  margin: 0px;
  transition: all 0.5s;
  opacity: 1;
  width: 100%;
  text-align: center;
}
.home_con_hcon {
  width: 100%;
  height: 100%;
  position: relative;
}
.home_back {
  background-image: url("../../assets/slide/slide1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  transition: all 1.2s;
}
.home_back2 {
  background-image: url("../../assets/slide/slide2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  transition: all 1.2s;
}
.home_back3 {
  background-image: url("../../assets/slide/slide3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  transition: all 1.2s;
}
.home_back4 {
  background-image: url("../../assets/slide/slide4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  transition: all 1.2s;
}
.home_flex {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
}
.home_back_con {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 50%;
  transition: all 1.2s;
  opacity: 0;
}
.slide_h {
  margin: 0px;
  width: 100%;
}
</style>
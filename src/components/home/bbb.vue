<template>
  <Nav class="aaa_nav"></Nav>
  <div class="aaa">
    <div class="aaa1">
      <div class="home_flex">
        <div class="home_back">
          <div class="home_back_con">
            <div class="home_con_item">
              <div class="home_con_hcon">
                <div>
                  <h1 class="home_con_h">
                    마음을 움직이는<br />스토리텔링 웹/앱 개발 기업
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
                <h3 style="margin-top: 0px">aaaaa</h3>
              </div>
              <div class="home_con_item_slide_item">
                <div class="slide_line"></div>
                <div class="slide_line1"></div>
                <h3 style="margin-top: 0px">vvvv</h3>
              </div>
              <div class="home_con_item_slide_item">
                <div class="slide_line"></div>
                <div class="slide_line1"></div>
                <h3 style="margin-top: 0px">bbbbb</h3>
              </div>
              <div class="home_con_item_slide_item">
                <div class="slide_line"></div>
                <div class="slide_line1"></div>
                <h3 style="margin-top: 0px">qqqq</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aaa2">
      <div class="home_con" style="height: 100%">
        <div class="home_con_item" style="display: flex">
          <div>
            <portline class="portline"></portline>
            <port-1 class="port1"></port-1>
          </div>
        </div>
      </div>
    </div>
    <div class="aaa3">
      <div class="home_con" style="height: 100%">
        <div class="home_con_item" style="display: flex">
          <div>
            <portline-1 class="portline1"></portline-1>
            <port-1 class="port1"></port-1>
          </div>
        </div>
      </div>
    </div>
    <div class="aaa4"></div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Nav from "../nav/nav.vue";
import Portline from "../port/portline.vue";
import Port1 from "../port/port1.vue";
import Portline1 from "../port/portline1.vue";
export default {
  components: {
    Nav,
    Portline,
    Port1,
    Portline1,
  },

  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var aaa = document.querySelector(".aaa");
      var aaa1 = document.querySelector(".aaa1");
      var aaa2 = document.querySelector(".aaa2");
      var aaa3 = document.querySelector(".aaa3");
      var aaa4 = document.querySelector(".aaa4");
      var home_con_item_slide_item = document.querySelectorAll(
        ".home_con_item_slide_item"
      );
      var home_back = document.querySelector(".home_back");
      var home_back2 = document.querySelector(".home_back2");
      var home_back3 = document.querySelector(".home_back3");
      var home_back4 = document.querySelector(".home_back4");
      var home_back_con = document.querySelectorAll(".home_back_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var port1 = document.querySelector(".port1");
      var portline = document.querySelector(".portline");
      var portline1_wrap = document.querySelector(".portline1_wrap");
      var port2_item_item = document.querySelector(".port2_item_item");
      var port2_item1_l = document.querySelector(".port2_item1_l");
      var port2_item1_r = document.querySelector(".port2_item1_r");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
      var tete = 0;
      let timer;

      // 슬라이더함수
      slide_f();
      function slide_f(params) {
        home_con_item_slide_item[0].addEventListener("click", () => {
          home_back.style.transform = "translateX(0%)";
          home_back2.style.transform = "translateX(0%)";
          home_back3.style.transform = "translateX(0%)";
          home_back4.style.transform = "translateX(0%)";

          setTimeout(() => {
            home_back_con[0].style.top = "40%";
            home_back_con[0].style.opacity = "1";
          }, 800);
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";

          slide_line1[0].style.width = "90%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
        });
        home_con_item_slide_item[1].addEventListener("click", () => {
          home_back.style.transform = "translateX(-100%)";
          home_back2.style.transform = "translateX(-100%)";
          home_back3.style.transform = "translateX(-100%)";
          home_back4.style.transform = "translateX(-100%)";
          setTimeout(() => {
            home_back_con[1].style.top = "40%";
            home_back_con[1].style.opacity = "1";
          }, 800);
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";

          slide_line1[1].style.width = "90%";
          slide_line1[0].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
        });
        home_con_item_slide_item[2].addEventListener("click", () => {
          home_back.style.transform = "translateX(-200%)";
          home_back2.style.transform = "translateX(-200%)";
          home_back3.style.transform = "translateX(-200%)";
          home_back4.style.transform = "translateX(-200%)";
          setTimeout(() => {
            home_back_con[2].style.top = "40%";
            home_back_con[2].style.opacity = "1";
          }, 800);
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";
          home_back_con[3].style.top = "50%";
          home_back_con[3].style.opacity = "0";

          slide_line1[2].style.width = "90%";
          slide_line1[1].style.width = "0%";
          slide_line1[0].style.width = "0%";
          slide_line1[3].style.width = "0%";
        });
        home_con_item_slide_item[3].addEventListener("click", () => {
          home_back.style.transform = "translateX(-300%)";
          home_back2.style.transform = "translateX(-300%)";
          home_back3.style.transform = "translateX(-300%)";
          home_back4.style.transform = "translateX(-300%)";
          setTimeout(() => {
            home_back_con[3].style.top = "40%";
            home_back_con[3].style.opacity = "1";
          }, 800);
          home_back_con[1].style.top = "50%";
          home_back_con[1].style.opacity = "0";
          home_back_con[2].style.top = "50%";
          home_back_con[2].style.opacity = "0";
          home_back_con[0].style.top = "50%";
          home_back_con[0].style.opacity = "0";

          slide_line1[3].style.width = "90%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[0].style.width = "0%";
        });
      }
      // 스크롤함수
      function vvv() {
        if (tete === 0) {
          window.addEventListener("wheel", (e) => {
            if (e.wheelDeltaY < 0) {
              aaa1.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa2.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa3.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa4.style.transform = `translateY(${-window.innerHeight}px)`;
              tete = 1;
              setTimeout(() => {
                portline.style.width = "100%";
                port1.style.transform = "translateX(0px)";
                port1.style.opacity = "1";
              }, 1000);
            }
          });
        } else if (tete === 1) {
          window.addEventListener("wheel", (e) => {
            if (e.wheelDeltaY > 0) {
              aaa1.style.transform = `translateY(${0}px)`;
              aaa2.style.transform = `translateY(${0}px)`;
              aaa3.style.transform = `translateY(${0}px)`;
              aaa4.style.transform = `translateY(${0}px)`;
              tete = 0;
            } else if (e.wheelDeltaY < 0) {
              aaa1.style.transform = `translateY(${-window.innerHeight * 2}px)`;
              aaa2.style.transform = `translateY(${-window.innerHeight * 2}px)`;
              aaa3.style.transform = `translateY(${-window.innerHeight * 2}px)`;
              aaa4.style.transform = `translateY(${-window.innerHeight * 2}px)`;
              tete = 2;
            }
          });
        } else if (tete === 2) {
          window.addEventListener("wheel", (e) => {
            if (e.wheelDeltaY > 0) {
              aaa1.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa2.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa3.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa4.style.transform = `translateY(${-window.innerHeight}px)`;
              tete = 1;
            }
          });
        }
      }

      window.addEventListener("wheel", () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          vvv();
        }, 500);
      });
      window.addEventListener("load", () => {
        home_back_con[0].style.top = "40%";
        home_back_con[0].style.opacity = "1";
        slide_line1[0].style.width = "90%";
        setTimeout(() => {
          scrollTo(0, 0);
        }, 100);
      });
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
* {
  box-sizing: border-box;
}
/* 스크롤배경움직이기 */
.aaa_nav {
  position: fixed;
  top: 0px;
  z-index: 200;
}
.aaa1 {
  width: 100%;
  height: 100vh;
  transition: all 1s;
}
.aaa2 {
  width: 100%;
  height: 100vh;
  transition: all 1s;
  background: black;
  color: white;
}
.aaa3 {
  width: 100%;
  height: 100vh;
  transition: all 1s;
}
.aaa {
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

/* 배경전체틀 */
.home_con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home_con_item {
  width: 1400px;
  align-items: center;
  justify-content: center;
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
  width: 25%;
  height: 60px;
  color: white;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.slide_line {
  width: 90%;
  height: 2px;
  background: gray;
  position: absolute;
  top: 0;
  left: 15px;
}
.slide_line1 {
  width: 0%;
  height: 2px;
  background: #0053c9;
  position: absolute;
  top: 0;
  z-index: 3;
  transition: all 2s;
  left: 15px;
}
/* 슬라이더 */
.home_con_h {
  font-size: 70px;
  color: white;
  position: absolute;
  margin: 0px;
  transition: all 0.5s;
  opacity: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
/* 포트라인 */
.portline {
  width: 0px;
  margin-bottom: 50px;
}
.port1 {
  transform: translateX(200px);
  transition: all 1s;
  opacity: 0;
}
.portline1 {
  width: 0px;
  margin-bottom: 50px;
}
</style>
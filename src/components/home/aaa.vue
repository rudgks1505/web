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
    <div class="aaa2"></div>

    <div class="aaa3">
      <div class="home_con" style="height: 100vh">
        <div class="home_con_item" style="display: flex">
          <div style="width: 100%">
            <portline-1 class="portline1_wrap"></portline-1>
            <div class="port2_con">
              <div class="port2_item">
                <div class="port2_item_item">
                  <h3 style="margin: 0px">
                    다양한 플랫폼과 새로운 기술로 빠르게 변화하는 환경에
                    능동적으로 대응하며,
                  </h3>
                  <h3>
                    커뮤니케이션을 통한 유지보수로 클라이언트의 만족감을
                    이어나갑니다.
                  </h3>
                </div>
              </div>
              <div class="port2_item1">
                <div class="port2_item1_l">
                  <img
                    src="../../assets/port2/img1.png"
                    alt=""
                    class="port2_item1_img"
                  />
                  <h1>웹/앱 서비스 개발</h1>
                  <h3>
                    웹/앱 기반 서비스로 쇼핑몰, 플랫폼, 커뮤니티 등 모든 형태의
                    서비스 개발
                  </h3>
                </div>
                <div class="port2_item1_r">
                  <img
                    src="../../assets/port2/img2.png"
                    alt=""
                    class="port2_item1_img"
                  />
                  <h1>UI/UX 디자인</h1>
                  <h3>브랜드 가치를 높일 수 있는 모던 UI/UX개발</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer-1></footer-1>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Nav from "../nav/nav.vue";
import Port1 from "../port/port1.vue";
import Port2 from "../port/port2.vue";
import Portline from "../port/portline.vue";
import Portline1 from "../port/portline1.vue";
import Port3 from "../port/port3.vue";
import footer1 from "../footer/footer1.vue";

export default {
  components: {
    Nav,
    Port1,
    Port2,
    Portline,
    Portline1,
    Port3,
    footer1,
  },

  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      //   port@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      var home_con_item_slide_item = document.querySelectorAll(
        ".home_con_item_slide_item"
      );
      var home_back = document.querySelector(".home_back");
      var home_back2 = document.querySelector(".home_back2");
      var home_back3 = document.querySelector(".home_back3");
      var home_back4 = document.querySelector(".home_back4");
      var home_back_con = document.querySelectorAll(".home_back_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var aaa = document.querySelector(".aaa");
      var aaa1 = document.querySelector(".aaa1");
      var aaa2 = document.querySelector(".aaa2");
      var aaa3 = document.querySelector(".aaa3");
      var port1_con = document.querySelector(".port1_con");
      var port2_wrap = document.querySelector(".port2_wrap");
      var portline_wrap = document.querySelector(".portline_wrap");
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

      slide_f();

      function aaa_slide(e) {
        if (tete === 0) {
          if (e.wheelDeltaY === -120) {
            aaa1.style.transform = `translateY(${-window.innerHeight}px)`;
            aaa2.style.transform = `translateY(${-window.innerHeight}px)`;
            aaa3.style.transform = `translateY(${-window.innerHeight}px)`;

            setTimeout(() => {
              tete = 1;
            }, 1000);
          } else if (e.wheelDeltaY === 120) {
            aaa1.style.transform = `translateY(${0}px)`;
            aaa2.style.transform = `translateY(${0}px)`;
            aaa3.style.transform = `translateY(${0}px)`;

            setTimeout(() => {
              tete = 0;
            }, 1000);
          }
        } else if (tete === 1) {
          if (e.wheelDeltaY === -120) {
            aaa1.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;
            aaa2.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;
            aaa3.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;

            setTimeout(() => {
              tete = 2;

              portline1_wrap.style.width = "100%";

              port2_item_item.style.opacity = "1";

              port2_item1_l.style.opacity = "1";

              port2_item1_r.style.opacity = "1";
            }, 1000);
          } else if (e.wheelDeltaY === 120) {
            aaa1.style.transform = `translateY(${-window.innerHeight}px)`;
            aaa2.style.transform = `translateY(${-window.innerHeight}px)`;
            aaa3.style.transform = `translateY(${-window.innerHeight}px)`;
            setTimeout(() => {
              tete = 0;
            }, 1000);
          }
        } else if (tete === 2) {
          if (e.wheelDeltaY === 120) {
            aaa1.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;
            aaa2.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;
            aaa3.style.transform = `translateY(${-(window.innerHeight * 2)}px)`;
            setTimeout(() => {
              tete = 1;
            }, 1000);
          }
        }
      }

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

      window.addEventListener("wheel", (e) => {
        setTimeout(() => {
          aaa_slide(e);
        }, 100);
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
  background: black;
  height: 100vh;
  transition: all 1s;
}
.aaa3 {
  width: 100%;
  height: 100vh;
  transition: all 1s;
  position: relative;
}
.aaa4 {
  width: 100%;
  height: 100vh;
  transition: all 1s;
}
.aaa {
  overflow: hidden;
  height: 100vh;
  width: 100%;
}
* {
  box-sizing: border-box;
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

/* portline */
.portline1_wrap {
  width: 0%;
  transition: all 1s;
}

/* port2 */
.port2_con {
  width: 100%;
}
.port2_item {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
}
.port2_item1 {
  width: 100%;
  display: flex;
  color: black;
}
.port2_item1_img {
  width: 360px;
  height: 360px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.port2_item1_h {
  text-align: center;
}
.port2_item_item {
  transition: all 1s;
  color: black;
  opacity: 0;
}
.port2_item1_l {
  width: 50%;
  text-align: center;
  transition: all 1s;
  opacity: 0;
}
.port2_item1_r {
  width: 50%;
  text-align: center;
  transition: all 1s;
  opacity: 0;
}
/* //footer */
</style>
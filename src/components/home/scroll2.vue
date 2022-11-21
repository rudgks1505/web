<template>
  <div class="spinner">
    <video
      src="../../assets/explore/Ocean.mp4"
      autoplay
      loop
      muted
      class="spinner_video"
    ></video>
    <div class="spinner_div1"></div>
    <div class="spinner_div2"></div>
    <div class="spinner_div3"></div>
    <div class="spinner_div4"></div>
  </div>

  <Nav class="aaa_nav"></Nav>

  <div class="gage">
    <h1 class="gage_h">1</h1>
    <div class="gage_item">
      <div class="gage_item_color"></div>
    </div>
    <h1 class="gage_h">4</h1>
  </div>

  <div class="box">
    <div class="box_wrap">
      <div class="box1">
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
      <div class="box2">
        <div class="home_con" style="height: 100%">
          <div class="home_con_item" style="display: flex">
            <div>
              <portline class="portline"></portline>
              <Port1 class="port1"></Port1>
            </div>
          </div>
        </div>
      </div>
      <div class="box3">
        <div class="home_con" style="height: 100%">
          <div class="home_con_item" style="display: flex">
            <div>
              <portline-1 class="portline_1"></portline-1>
              <div class="port2_con">
                <div class="port2_item_item">
                  <h3 style="margin: 0px" class="port2_h3">
                    다양한 플랫폼과 새로운 기술로 빠르게 변화하는 환경에
                    능동적으로 대응하며,
                  </h3>
                  <h3 class="port2_h3">
                    커뮤니케이션을 통한 유지보수로 클라이언트의 만족감을
                    이어나갑니다.
                  </h3>
                </div>

                <div class="port2_item1">
                  <div class="port2_item1_l">
                    <img
                      src="../../assets/port2/img1.png"
                      alt=""
                      class="port2_item1_img"
                    />
                    <h1 class="port2_h1">웹/앱 서비스 개발</h1>
                    <h3 class="port2_h3">
                      웹/앱 기반 서비스로 쇼핑몰, 플랫폼, 커뮤니티 등 모든
                      형태의 서비스 개발
                    </h3>
                  </div>
                  <div class="port2_item1_r">
                    <img
                      src="../../assets/port2/img2.png"
                      alt=""
                      class="port2_item1_img"
                    />
                    <h1 class="port2_h1">UI/UX 디자인</h1>
                    <h3 class="port2_h3">
                      브랜드 가치를 높일 수 있는 모던 UI/UX개발
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box4"><footer-1></footer-1></div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Footer1 from "../footer/footer1.vue";
import Nav from "../nav/nav.vue";
import Portline from "../port/portline.vue";
import Port1 from "../port/port1.vue";
import Portline1 from "../port/portline1.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Footer1,
    Nav,
    Portline,
    Port1,
    Portline1,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var box = document.querySelector(".box");
      var spinner = document.querySelector(".spinner");
      var spinner_video = document.querySelector(".spinner_video");
      var box1 = document.querySelector(".box1");
      var box2 = document.querySelector(".box2");
      var box3 = document.querySelector(".box3");
      var box4 = document.querySelector(".box4");
      var box_wrap = document.querySelector(".box_wrap");
      var home_con_item_slide_item = document.querySelectorAll(
        ".home_con_item_slide_item"
      );
      var home_back = document.querySelector(".home_back");
      var home_back2 = document.querySelector(".home_back2");
      var home_back3 = document.querySelector(".home_back3");
      var home_back4 = document.querySelector(".home_back4");
      var home_back_con = document.querySelectorAll(".home_back_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var gage_h = document.querySelectorAll(".gage_h");
      var gage_item_color = document.querySelector(".gage_item_color");
      var port1 = document.querySelector(".port1");
      var portline = document.querySelector(".portline");
      var portline_1 = document.querySelector(".portline_1");
      var port2_item_item = document.querySelector(".port2_item_item");
      var port2_item1_l = document.querySelector(".port2_item1_l");
      var port2_item1_r = document.querySelector(".port2_item1_r");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      //반응형
      window.addEventListener("resize", () => {
        respon_f();
      });

      respon_f();
      function respon_f(params) {
        if (max_600px.matches) {
          repon_scroll();
        }
        if (min_600px_max_1000px.matches) {
          repon_scroll();
        }
        if (min_1000px.matches) {
          wheel_f();
        }
      }

      //태블릿,모바일에서 스크롤이벤트
      function repon_scroll(params) {
        box.addEventListener("scroll", () => {
          if (scrollY >= window.innerHeight / 2) {
            portline.style.width = "100%";
            port1.style.transform = "translateX(0px)";
            port1.style.opacity = "1";
          }
          // if (scrollY >= window.innerHeight) {
          //   portline_1.style.width = "100%";
          //   port2_item_item.style.transform = "translateY(0px)";
          //   port2_item_item.style.opacity = "1";
          //   port2_item1_l.style.transform = "translateY(0px)";
          //   port2_item1_l.style.opacity = "1";
          //   port2_item1_r.style.transform = "translateY(0px)";
          //   port2_item1_r.style.opacity = "1";
          // }
        });
      }

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

      //로드시

      window.addEventListener("load", () => {
        setTimeout(() => {
          setTimeout(() => {
            spinner_video.style.padding = "0%";
            setTimeout(() => {
              spinner.style.background = "black";
            }, 999);
            setTimeout(() => {
              spinner.style.transition = "all 0.5s";
              spinner.style.opacity = "0";
              spinner_video.style.opacity = "0";
            }, 1000);
            gage_h[0].innerText = "1";
            gage_item_color.style.transform = "translateY(0%)";
            box_wrap.style.transform = `translateY(0px)`;
          }, 1000);
          home_back_con[0].style.top = "40%";
          home_back_con[0].style.opacity = "1";
          slide_line1[0].style.width = "90%";
          setTimeout(() => {
            scrollTo(0, 0);
          }, 100);
        }, 1000);
      });

      //  스크롤
      function wheel_f() {
        window.addEventListener("wheel", (e) => {
          if (box1.getBoundingClientRect().y === 0) {
            if (e.wheelDeltaY < 0) {
              gage_h[0].innerText = "2";
              gage_item_color.style.transform = "translateY(100%)";
              box_wrap.style.transform = `translateY(${-window.innerHeight}px)`;
              setTimeout(() => {
                portline.style.width = "100%";
                port1.style.transform = "translateX(0px)";
                port1.style.opacity = "1";
              }, 1000);
            }
          } else if (box2.getBoundingClientRect().y === 0) {
            if (e.wheelDeltaY > 0) {
              gage_h[0].innerText = "1";
              gage_item_color.style.transform = "translateY(0%)";
              box_wrap.style.transform = `translateY(0px)`;
            } else if (e.wheelDeltaY < 0) {
              gage_h[0].innerText = "3";
              gage_h[0].style.color = "black";
              gage_h[1].style.color = "black";
              gage_item_color.style.transform = "translateY(200%)";
              box_wrap.style.transform = `translateY(-${
                window.innerHeight * 2
              }px)`;
              setTimeout(() => {
                portline_1.style.width = "100%";
                port2_item_item.style.transform = "translateY(0px)";
                port2_item_item.style.opacity = "1";
                port2_item1_l.style.transform = "translateY(0px)";
                port2_item1_l.style.opacity = "1";
                port2_item1_r.style.transform = "translateY(0px)";
                port2_item1_r.style.opacity = "1";
              }, 1000);
            }
          } else if (box3.getBoundingClientRect().y === 0) {
            if (e.wheelDeltaY > 0) {
              gage_h[0].innerText = "2";
              gage_h[0].style.color = "white";
              gage_h[1].style.color = "white";
              gage_item_color.style.transform = "translateY(100%)";
              box_wrap.style.transform = `translateY(-${window.innerHeight}px)`;
            } else if (e.wheelDeltaY < 0) {
              gage_h[0].innerText = "4";
              gage_item_color.style.transform = "translateY(300%)";
              box_wrap.style.transform = `translateY(-${
                window.innerHeight * 2 + box4.clientHeight
              }px)`;
            }
          } else if (
            box4.getBoundingClientRect().y ===
            window.innerHeight - box4.clientHeight
          ) {
            if (e.wheelDeltaY > 0) {
              gage_h[0].innerText = "3";
              gage_item_color.style.transform = "translateY(200%)";
              box_wrap.style.transform = `translateY(-${
                window.innerHeight * 2
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
  .home_con_h {
    font-size: 30px;
  }
  .gage {
    display: none;
  }
  .home_con_item {
    width: 300px;
  }
  .port2_item1_img {
    width: 100px;
    height: 100px;
  }
  .port2_h1 {
    font-size: 18px;
  }
  .port2_h3 {
    font-size: 5px;
  }
  .box {
    overflow: scroll;
    height: auto;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .home_con_h {
    font-size: 40px;
  }
  .gage {
    display: none;
  }
  .home_con_item {
    width: 600px;
  }
  .port2_item1_img {
    width: 185.57px;
    height: 185.57px;
  }
  .port2_h1 {
    font-size: 28px;
  }
  .port2_h3 {
    font-size: 15px;
  }
  .box {
    overflow: scroll;
    height: auto;
  }
}

@media screen and (min-width: 1025px) {
  .home_con_h {
    font-size: 70px;
  }
  .gage {
    display: block;
  }
  .home_con_item {
    width: 1400px;
  }
  .port2_item1_img {
    width: 360px;
    height: 360px;
  }
  .port2_h1 {
    font-size: 32px;
  }
  .port2_h3 {
    font-size: 18.72px;
  }
  .box {
    overflow: hidden;
    height: 100vh;
  }
}
* {
  box-sizing: border-box;
}
/* 레이아웃 */
.box {
  width: 100%;
}
.box1 {
  width: 100%;
  height: 100vh;
}
.box2 {
  width: 100%;
  height: 100vh;
  background: black;
}
.box3 {
  width: 100%;
  height: 100vh;
}
.box_wrap {
  transition: all 1s;
}
/* 배경전체틀 */
.home_con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home_con_item {
  align-items: center;
  justify-content: center;
}
/* 네브바 */
.aaa_nav {
  position: fixed;
  top: 0px;
  z-index: 200;
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
  left: 5%;
}
.slide_line1 {
  width: 0%;
  height: 2px;
  background: #0053c9;
  position: absolute;
  top: 0;
  z-index: 3;
  transition: all 2s;
  left: 5%;
}
/* 슬라이더 */
.home_con_h {
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
/* 게이지 */
.gage {
  position: fixed;
  width: 100px;
  z-index: 100;
  top: 30%;
  left: 100px;
}
.gage_item {
  width: 5px;
  height: 150px;
  background: #808080;
  margin-left: auto;
  margin-right: auto;
}
.gage_h {
  text-align: center;
  color: white;
  transition: all 0.5s;
}
.gage_item_color {
  width: 5px;
  height: 25%;
  background: #0053c9;
  transition: all 1s;
}
/* 포트라인 */
.portline {
  width: 0px;
  margin-bottom: 50px;
  transition: all 1s;
}
.portline_1 {
  width: 0px;
  margin-bottom: 50px;
  transition: all 1s;
}
.port1 {
  transform: translateX(200px);
  transition: all 1s;
  opacity: 0;
  color: white;
}
.portline1 {
  width: 0px;
  margin-bottom: 50px;
}
/* 포트2 */
.port2_con {
  width: 100%;
}
.port2_item1 {
  width: 100%;
  display: flex;
  color: black;
}
.port2_item1_img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.port2_item1_h {
  text-align: center;
}
.port2_item_item {
  transition: all 1s;
  transform: translateY(50px);
  color: black;
  opacity: 0;
  margin-bottom: 60px;
}
.port2_item1_l {
  width: 50%;
  text-align: center;
  transition: all 1s;
  opacity: 0;
  transform: translateY(-50px);
}
.port2_item1_r {
  width: 50%;
  text-align: center;
  transition: all 1s;
  opacity: 0;
  transform: translateY(-50px);
}
/* 스피너 */
.spinner {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 300;
  transition: all 2s;
  background: white;
  overflow: hidden;
}

.spinner_video {
  width: 100%;
  height: 100vh;
  transition: all 1s;
  padding: 50px;
  object-fit: cover;
}
</style>
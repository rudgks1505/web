<template>
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
              <h1 class="home_con_h">게임인스의<br />현재진행형 포트폴리오</h1>
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
              <h1 class="home_con_h">게임인스만의<br />고객 니즈 맞춤 설계</h1>
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
    <div class="home_con">
      <div class="home_con_item" style="width: 100%">
        <Nav></Nav>
      </div>
    </div>

    <div class="home_con_slide">
      <div class="home_con_item">
        <div class="home_con_item_slide">
          <div class="home_con_item_slide_item">
            <div class="slide_line"></div>
            <div class="slide_line1"></div>
            제목1
          </div>
          <div class="home_con_item_slide_item">
            <div class="slide_line"></div>
            <div class="slide_line1"></div>
            제목2
          </div>
          <div class="home_con_item_slide_item">
            <div class="slide_line"></div>
            <div class="slide_line1"></div>
            제목3
          </div>
          <div class="home_con_item_slide_item">
            <div class="slide_line"></div>
            <div class="slide_line1"></div>
            제목4
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="home_con">
    <div class="home_con_img">
      <div class="home_con_img_cover"></div>
    </div>
  </div>

  <div class="home_con">
    <div class="home_con_item">
      <port-1></port-1>
    </div>
  </div>
  <div class="home_con">
    <div class="home_con_item">
      <portline></portline>
    </div>
  </div>

  <div class="home_con">
    <div class="home_con_item">
      <port-2></port-2>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Nav from "../nav/nav.vue";
import Port1 from "../port/port1.vue";
import Port2 from "../port/port2.vue";
import Portline from "../port/portline.vue";

export default {
  components: {
    Nav,
    Port1,
    Port2,
    Portline,
  },

  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var home_con_item_slide_item = document.querySelectorAll(
        ".home_con_item_slide_item"
      );
      var home_back = document.querySelector(".home_back");
      var home_back2 = document.querySelector(".home_back2");
      var home_back3 = document.querySelector(".home_back3");
      var home_back4 = document.querySelector(".home_back4");
      var home_back_con = document.querySelectorAll(".home_back_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var home_con_img = document.querySelector(".home_con_img");

      window.addEventListener("load", () => {
        home_back_con[0].style.top = "40%";
        home_back_con[0].style.opacity = "1";
        slide_line1[0].style.width = "80%";
        setTimeout(() => {
          scrollTo(0, 0);
        }, 100);
      });

      window.addEventListener("scroll", () => {
        if (scrollY > window.innerHeight / 2) {
          home_con_img.style.width = `${scrollY / 10}`;
        }
      });

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

          slide_line1[0].style.width = "80%";
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

          slide_line1[1].style.width = "80%";
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

          slide_line1[2].style.width = "80%";
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

          slide_line1[3].style.width = "80%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[0].style.width = "0%";
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
.home_con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home_con_slide {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0px;
}
.home_con_item {
  width: 1200px;
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
}
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
.slide_line {
  width: 80%;
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
  transition: all 2s;
}
.home_con_img {
  width: 0%;
  height: 560px;
  background-image: url("../../assets/port/vision.png");
  background-size: cover;
}
.home_con_img_cover {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
</style>
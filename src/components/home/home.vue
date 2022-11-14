<template>
  <div class="home_wrap">
    <div class="home_con">
      <div class="home_con_item" style="width: 100%">
        <Nav></Nav>
      </div>
    </div>

    <div class="home_con" style="height: 70vh">
      <div class="home_con_item">
        <div class="home_con_hcon">
          <div>
            <h1 class="home_con_h">
              마음을 움직이는<br />스토리텔링 웹/앱 개발 기업
            </h1>
            <h1 class="home_con_h">게임인스의<br />현재진행형 포트폴리오</h1>
            <h1 class="home_con_h">게임인스만의<br />고객 니즈 맞춤 설계</h1>
            <h1 class="home_con_h">
              게임인스는<br />도전하는 인재를 찾습니다.
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="home_con">
      <div class="home_con_item">
        <div class="home_con_item_slide">
          <div class="home_con_item_slide_item">111</div>
          <div class="home_con_item_slide_item">222</div>
          <div class="home_con_item_slide_item">333</div>
          <div class="home_con_item_slide_item">444</div>
        </div>
      </div>
    </div>

    <div class="home_con">
      <div class="home_con_item">
        <portline></portline>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Nav from "../nav/nav.vue";
import Portline from "../port/portline.vue";

export default {
  components: {
    Nav,
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
      var home_wrap = document.querySelector(".home_wrap");
      var home_con_h = document.querySelectorAll(".home_con_h");

      const top_slider_imagearray = [
        require("../../assets/slide/slide1.jpg"),
        require("../../assets/slide/slide2.jpg"),
        require("../../assets/slide/slide3.jpg"),
        require("../../assets/slide/slide4.jpg"),

        ,
      ];

      window.addEventListener("load", () => {
        home_con_h[0].style.transform = "translateY(300px)";
        home_con_h[0].style.opacity = "1";
      });

      for (let index = 0; index < home_con_item_slide_item.length; index++) {
        home_con_item_slide_item[index].addEventListener("click", () => {
          home_wrap.style.backgroundImage = `url(${top_slider_imagearray[index]})`;
        });
      }
      home_con_item_slide_item[0].addEventListener("click", () => {
        setTimeout(() => {
          home_con_h[0].style.transform = "translateY(300px)";
          home_con_h[0].style.opacity = "1";
          home_con_h[1].style.transform = "translateY(320px)";
          home_con_h[1].style.opacity = "0";
          home_con_h[2].style.transform = "translateY(320px)";
          home_con_h[2].style.opacity = "0";
          home_con_h[3].style.transform = "translateY(320px)";
          home_con_h[3].style.opacity = "0";
        }, 500);
      });

      home_con_item_slide_item[1].addEventListener("click", () => {
        setTimeout(() => {
          home_con_h[1].style.transform = "translateY(300px)";
          home_con_h[1].style.opacity = "1";
          home_con_h[0].style.transform = "translateY(320px)";
          home_con_h[0].style.opacity = "0";
          home_con_h[2].style.transform = "translateY(320px)";
          home_con_h[2].style.opacity = "0";
          home_con_h[3].style.transform = "translateY(320px)";
          home_con_h[3].style.opacity = "0";
        }, 500);
      });
      home_con_item_slide_item[2].addEventListener("click", () => {
        setTimeout(() => {
          home_con_h[2].style.transform = "translateY(300px)";
          home_con_h[2].style.opacity = "1";
          home_con_h[0].style.transform = "translateY(320px)";
          home_con_h[0].style.opacity = "0";
          home_con_h[1].style.transform = "translateY(320px)";
          home_con_h[1].style.opacity = "0";
          home_con_h[3].style.transform = "translateY(320px)";
          home_con_h[3].style.opacity = "0";
        }, 500);
      });
      home_con_item_slide_item[3].addEventListener("click", () => {
        setTimeout(() => {
          home_con_h[3].style.transform = "translateY(300px)";
          home_con_h[3].style.opacity = "1";
          home_con_h[0].style.transform = "translateY(320px)";
          home_con_h[0].style.opacity = "0";
          home_con_h[1].style.transform = "translateY(320px)";
          home_con_h[1].style.opacity = "0";
          home_con_h[2].style.transform = "translateY(320px)";
          home_con_h[2].style.opacity = "0";
        }, 500);
      });
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
.home_con_item {
  width: 1200px;
}
.home_wrap {
  background-image: url("../../assets/slide/slide1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  opacity: 1;
  transition: all 0.4s;
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
}
.home_con_h {
  font-size: 70px;
  color: white;
  position: absolute;
  transform: translateY(320px);
  margin: 0px;
  transition: all 0.5s;
  opacity: 0;
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
</style>
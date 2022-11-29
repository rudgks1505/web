<template>
  <div class="overwrap_hidden">
    <div class="flex_div">
      <div class="flex_div_item">
        <div>
          <h1 class="flex_div_item_h">마음을 움직이는</h1>
          <h1 class="flex_div_item_h">스토리텔링 웹/앱 개발 기업</h1>
          <h3 class="flex_div_item_h1">
            웹/앱개발의 자존심,타협하지 않는 최고의 퀄리티
          </h3>
        </div>
      </div>
    </div>
    <div class="flex_div1">
      <div class="flex_div_item"></div>
    </div>
    <div class="flex_div2"><div class="flex_div_item"></div></div>
    <div class="flex_div3"><div class="flex_div_item"></div></div>
    <div class="mobile_bottom_wrap">
      <div class="mobile_bottom">
        <div class="mobile_bottom_line">
          <h1 class="mobile_bottom_line_h">aaaaaa</h1>
        </div>
        <div class="mobile_bottom_line">
          <h1 class="mobile_bottom_line_h">PORTFOLIO</h1>
        </div>
        <div class="mobile_bottom_line">
          <h1 class="mobile_bottom_line_h">STORY</h1>
        </div>
        <div class="mobile_bottom_line">
          <h1 class="mobile_bottom_line_h">문의&의뢰</h1>
        </div>
        <div class="mobile_bottom_line">
          <h1 class="mobile_bottom_line_h">인재채용</h1>
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
      window.addEventListener("resize", () => {
        line_shrink();
      });

      var mobile_bottom_line = document.querySelectorAll(".mobile_bottom_line");
      var mobile_bottom_line_h = document.querySelectorAll(
        ".mobile_bottom_line_h"
      );
      var flex_div_item = document.querySelector(".flex_div_item");
      var flex_div = document.querySelector(".flex_div");
      var flex_div1 = document.querySelector(".flex_div1");
      var flex_div2 = document.querySelector(".flex_div2");
      var flex_div3 = document.querySelector(".flex_div3");

      line_shrink();
      function line_shrink(params) {
        mobile_bottom_line[0].style.width = `${
          flex_div_item.clientWidth / 3
        }px`;
        mobile_bottom_line[0].style.flexShrink = `0`;
        mobile_bottom_line[1].style.width = "20%";
        mobile_bottom_line[1].style.flexShrink = `1`;
        mobile_bottom_line[2].style.width = "20%";
        mobile_bottom_line[2].style.flexShrink = `1`;
        mobile_bottom_line[3].style.width = "20%";
        mobile_bottom_line[3].style.flexShrink = `1`;
        mobile_bottom_line[4].style.width = "20%";
        mobile_bottom_line[4].style.flexShrink = `1`;

        //눌럿을때 보이게
        mobile_bottom_line_h[0].style.opacity = "1";
        mobile_bottom_line_h[1].style.opacity = "0";
        mobile_bottom_line_h[2].style.opacity = "0";
        mobile_bottom_line_h[3].style.opacity = "0";
        mobile_bottom_line_h[4].style.opacity = "0";

        mobile_bottom_line_h[0].addEventListener("click", () => {
          //눌럿을때 보이게
          mobile_bottom_line_h[0].style.opacity = "1";
          mobile_bottom_line_h[1].style.opacity = "0";
          mobile_bottom_line_h[2].style.opacity = "0";
          mobile_bottom_line_h[3].style.opacity = "0";
          mobile_bottom_line_h[4].style.opacity = "0";

          //슬라이드
          flex_div.style.transform = "translateX(0px)";
          flex_div1.style.transform = "translateX(0px)";
          flex_div2.style.transform = "translateX(0px)";
          flex_div3.style.transform = "translateX(0px)";

          //반응성선
          mobile_bottom_line[0].style.width = `${
            flex_div_item.clientWidth / 3
          }px`;
          mobile_bottom_line[0].style.flexShrink = `0`;
          mobile_bottom_line[1].style.width = "20%";
          mobile_bottom_line[1].style.flexShrink = `1`;
          mobile_bottom_line[2].style.width = "20%";
          mobile_bottom_line[2].style.flexShrink = `1`;
          mobile_bottom_line[3].style.width = "20%";
          mobile_bottom_line[3].style.flexShrink = `1`;
          mobile_bottom_line[4].style.width = "20%";
          mobile_bottom_line[4].style.flexShrink = `1`;
        });
        mobile_bottom_line_h[1].addEventListener("click", () => {
          //눌럿을때 보이게
          mobile_bottom_line_h[1].style.opacity = "1";
          mobile_bottom_line_h[0].style.opacity = "0";
          mobile_bottom_line_h[2].style.opacity = "0";
          mobile_bottom_line_h[3].style.opacity = "0";
          mobile_bottom_line_h[4].style.opacity = "0";
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth}px)`;

          mobile_bottom_line[1].style.width = `${
            flex_div_item.clientWidth / 3
          }px`;
          mobile_bottom_line[1].style.flexShrink = `0`;
          mobile_bottom_line[0].style.width = "20%";
          mobile_bottom_line[0].style.flexShrink = `1`;
          mobile_bottom_line[2].style.width = "20%";
          mobile_bottom_line[2].style.flexShrink = `1`;
          mobile_bottom_line[3].style.width = "20%";
          mobile_bottom_line[3].style.flexShrink = `1`;
          mobile_bottom_line[4].style.width = "20%";
          mobile_bottom_line[4].style.flexShrink = `1`;
        });
        mobile_bottom_line_h[2].addEventListener("click", () => {
          //눌럿을때 보이게
          mobile_bottom_line_h[2].style.opacity = "1";
          mobile_bottom_line_h[1].style.opacity = "0";
          mobile_bottom_line_h[0].style.opacity = "0";
          mobile_bottom_line_h[3].style.opacity = "0";
          mobile_bottom_line_h[4].style.opacity = "0";
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 2}px)`;

          mobile_bottom_line[2].style.width = `${
            flex_div_item.clientWidth / 3
          }px`;
          mobile_bottom_line[2].style.flexShrink = `0`;
          mobile_bottom_line[1].style.width = "20%";
          mobile_bottom_line[1].style.flexShrink = `1`;
          mobile_bottom_line[0].style.width = "20%";
          mobile_bottom_line[0].style.flexShrink = `1`;
          mobile_bottom_line[3].style.width = "20%";
          mobile_bottom_line[3].style.flexShrink = `1`;
          mobile_bottom_line[4].style.width = "20%";
          mobile_bottom_line[4].style.flexShrink = `1`;
        });
        mobile_bottom_line_h[3].addEventListener("click", () => {
          //눌럿을때 보이게
          mobile_bottom_line_h[3].style.opacity = "1";
          mobile_bottom_line_h[1].style.opacity = "0";
          mobile_bottom_line_h[2].style.opacity = "0";
          mobile_bottom_line_h[0].style.opacity = "0";
          mobile_bottom_line_h[4].style.opacity = "0";
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 3}px)`;

          mobile_bottom_line[3].style.width = `${
            flex_div_item.clientWidth / 3
          }px`;
          mobile_bottom_line[3].style.flexShrink = `0`;
          mobile_bottom_line[1].style.width = "20%";
          mobile_bottom_line[1].style.flexShrink = `1`;
          mobile_bottom_line[2].style.width = "20%";
          mobile_bottom_line[2].style.flexShrink = `1`;
          mobile_bottom_line[0].style.width = "20%";
          mobile_bottom_line[0].style.flexShrink = `1`;
          mobile_bottom_line[4].style.width = "20%";
          mobile_bottom_line[4].style.flexShrink = `1`;
        });
        mobile_bottom_line_h[4].addEventListener("click", () => {
          //눌럿을때 보이게
          mobile_bottom_line_h[4].style.opacity = "1";
          mobile_bottom_line_h[1].style.opacity = "0";
          mobile_bottom_line_h[2].style.opacity = "0";
          mobile_bottom_line_h[3].style.opacity = "0";
          mobile_bottom_line_h[0].style.opacity = "0";
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 4}px)`;

          mobile_bottom_line[4].style.width = `${
            flex_div_item.clientWidth / 3
          }px`;
          mobile_bottom_line[4].style.flexShrink = `0`;
          mobile_bottom_line[1].style.width = "20%";
          mobile_bottom_line[1].style.flexShrink = `1`;
          mobile_bottom_line[2].style.width = "20%";
          mobile_bottom_line[2].style.flexShrink = `1`;
          mobile_bottom_line[3].style.width = "20%";
          mobile_bottom_line[3].style.flexShrink = `1`;
          mobile_bottom_line[0].style.width = "20%";
          mobile_bottom_line[0].style.flexShrink = `1`;
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
  .flex_div_item {
    width: 300px;
  }
  .mobile_bottom {
    width: 300px;
  }
  .flex_div_item_h1 {
    font-size: 3vw;
  }
  .flex_div_item_h {
    font-size: 6vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .flex_div_item {
    width: 600px;
  }
  .mobile_bottom {
    width: 600px;
  }
  .flex_div_item_h1 {
    font-size: 3vw;
  }
  .flex_div_item_h {
    font-size: 6vw;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1600px) {
  .flex_div_item {
    width: 1025px;
  }
  .mobile_bottom {
    width: 1025px;
  }
  .flex_div_item_h1 {
    font-size: 3vw;
  }
  .flex_div_item_h {
    font-size: 6vw;
  }
}
@media screen and (min-width: 1600px) {
  .flex_div_item {
    width: 1600px;
  }
  .mobile_bottom {
    width: 1600px;
  }
  .flex_div_item_h1 {
    font-size: 30px;
  }
  .flex_div_item_h {
    font-size: 70px;
  }
}
* {
  box-sizing: border-box;
}
.overwrap_hidden {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
}
.flex_div {
  width: 100%;
  height: 100%;
  background: darkblue;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.flex_div1 {
  width: 100%;
  height: 100%;
  background: darkgoldenrod;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.flex_div2 {
  width: 100%;
  height: 100%;
  background: darkgreen;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.flex_div3 {
  width: 100%;
  height: 100%;
  background: darkgreen;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.mobile_bottom {
  height: 100%;
  display: flex;
  align-items: center;
}
.mobile_bottom_line {
  width: 100%;
  height: 5px;
  background: #3180f1;
  margin: 0px 20px;
  transition: all 1s;
  position: relative;
  min-width: 20px;
}
.flex_div_item {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile_bottom_line_h {
  color: white;
  font: 10px;
  position: absolute;
  top: 0px;
  margin: 0px;
  opacity: 0;
  transition: all 0.5s;
  display: none;
}
.mobile_bottom_wrap {
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
}
.flex_div_item_h {
  color: white;
  text-align: center;
  margin: 0px;
}
.flex_div_item_h1 {
  color: white;
  text-align: center;
  margin: 0px;
}
</style>
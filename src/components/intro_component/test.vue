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
      <div class="flex_div_item">
        <div>
          <h1 class="flex_div_item_h">게임인스의</h1>
          <h1 class="flex_div_item_h">현재진행형 포트폴리오</h1>
          <h3 class="flex_div_item_h1">
            웹/앱개발의 자존심,타협하지 않는 최고의 퀄리티
          </h3>
        </div>
      </div>
    </div>
    <div class="flex_div2">
      <div class="flex_div_item">
        <div>
          <h1 class="flex_div_item_h">게임인스의</h1>
          <h1 class="flex_div_item_h">현재진행형 포트폴리오</h1>
          <h3 class="flex_div_item_h1">
            웹/앱개발의 자존심,타협하지 않는 최고의 퀄리티
          </h3>
        </div>
      </div>
    </div>
    <div class="flex_div3">
      <div class="flex_div_item">
        <div>
          <h1 class="flex_div_item_h">게임인스의</h1>
          <h1 class="flex_div_item_h">현재진행형 포트폴리오</h1>
          <h3 class="flex_div_item_h1">
            웹/앱개발의 자존심,타협하지 않는 최고의 퀄리티
          </h3>
        </div>
      </div>
    </div>
    <div class="mobile_bottom_wrap">
      <div class="mobile_bottom">
        <div class="mobile_bottom_line">
          <div class="mobile_bottom_line1"></div>
          <h1 class="mobile_bottom_line_h">기업소개</h1>
          <h4 class="mobile_bottom_line_h1">aaaa</h4>
        </div>
        <div class="mobile_bottom_line">
          <div class="mobile_bottom_line1"></div>
          <h1 class="mobile_bottom_line_h">PORTFOLIO</h1>
          <h4 class="mobile_bottom_line_h1">aaaa</h4>
        </div>
        <div class="mobile_bottom_line">
          <div class="mobile_bottom_line1"></div>
          <h1 class="mobile_bottom_line_h">STORY</h1>
          <h4 class="mobile_bottom_line_h1">aaaa</h4>
        </div>
        <div class="mobile_bottom_line">
          <div class="mobile_bottom_line1"></div>
          <h1 class="mobile_bottom_line_h">문의&의뢰</h1>
          <h4 class="mobile_bottom_line_h1">aaaa</h4>
        </div>
        <div class="mobile_bottom_line">
          <div class="mobile_bottom_line1"></div>
          <h1 class="mobile_bottom_line_h">인재채용</h1>
          <h4 class="mobile_bottom_line_h1">aaaa</h4>
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
      var mobile_bottom_line1 = document.querySelectorAll(
        ".mobile_bottom_line1"
      );
      var mobile_bottom_line_h = document.querySelectorAll(
        ".mobile_bottom_line_h"
      );
      var mobile_bottom_line_h1 = document.querySelectorAll(
        ".mobile_bottom_line_h1"
      );
      var mobile_bottom_line_small = document.querySelectorAll(
        ".mobile_bottom_line_small"
      );
      var flex_div_item = document.querySelector(".flex_div_item");
      var flex_div = document.querySelector(".flex_div");
      var flex_div1 = document.querySelector(".flex_div1");
      var flex_div2 = document.querySelector(".flex_div2");
      var flex_div3 = document.querySelector(".flex_div3");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px_max_1600px = window.matchMedia(
        "screen and (min-width: 1025px) and (max-width: 1600px)"
      );

      var min_1600px = window.matchMedia("screen and (min-width: 1600px)");

      line_shrink();
      function line_shrink(params) {
        mobile_bottom_line[0].style.width = `${
          flex_div_item.clientWidth * 0.25
        }px`;

        if (max_600px.matches) {
          mobile_bottom_line_h1[0].style.display = "none";
        }

        if (min_600px_max_1000px.matches) {
          mobile_bottom_line_h1[0].style.display = "none";
        }

        if (min_1000px_max_1600px.matches) {
          mobile_bottom_line_h1[0].style.display = "block";
        }

        if (min_1600px.matches) {
          mobile_bottom_line_h1[0].style.display = "block";
        }
        //글내용
        mobile_bottom_line_h1[0].style.display = "block";
        mobile_bottom_line_h1[1].style.display = "none";
        mobile_bottom_line_h1[2].style.display = "none";
        mobile_bottom_line_h1[3].style.display = "none";
        mobile_bottom_line_h1[4].style.display = "none";
        mobile_bottom_line_h[0].style.display = "block";
        mobile_bottom_line_h[1].style.display = "none";
        mobile_bottom_line_h[2].style.display = "none";
        mobile_bottom_line_h[3].style.display = "none";
        mobile_bottom_line_h[4].style.display = "none";

        mobile_bottom_line_h[0].style.fontSize = "30px";
        mobile_bottom_line[0].style.flexShrink = `0`;
        mobile_bottom_line[1].style.width = "20%";
        mobile_bottom_line[1].style.flexShrink = `1`;
        mobile_bottom_line[2].style.width = "20%";
        mobile_bottom_line[2].style.flexShrink = `1`;
        mobile_bottom_line[3].style.width = "20%";
        mobile_bottom_line[3].style.flexShrink = `1`;
        mobile_bottom_line[4].style.width = "20%";
        mobile_bottom_line[4].style.flexShrink = `1`;

        //선채우기
        mobile_bottom_line1[0].style.width = "100%";
        mobile_bottom_line1[1].style.width = "0%";
        mobile_bottom_line1[2].style.width = "0%";
        mobile_bottom_line1[3].style.width = "0%";
        mobile_bottom_line1[4].style.width = "0%";

        mobile_bottom_line[0].addEventListener("click", () => {
          //글내용
          setTimeout(() => {
            mobile_bottom_line_h1[0].style.display = "block";
            mobile_bottom_line_h1[1].style.display = "none";
            mobile_bottom_line_h1[2].style.display = "none";
            mobile_bottom_line_h1[3].style.display = "none";
            mobile_bottom_line_h1[4].style.display = "none";
            mobile_bottom_line_h[0].style.display = "block";
            mobile_bottom_line_h[1].style.display = "none";
            mobile_bottom_line_h[2].style.display = "none";
            mobile_bottom_line_h[3].style.display = "none";
            mobile_bottom_line_h[4].style.display = "none";
          }, 1000);

          //선채우기
          mobile_bottom_line1[0].style.width = "100%";
          mobile_bottom_line1[1].style.width = "0%";
          mobile_bottom_line1[2].style.width = "0%";
          mobile_bottom_line1[3].style.width = "0%";
          mobile_bottom_line1[4].style.width = "0%";

          //슬라이드
          flex_div.style.transform = "translateX(0px)";
          flex_div1.style.transform = "translateX(0px)";
          flex_div2.style.transform = "translateX(0px)";
          flex_div3.style.transform = "translateX(0px)";

          //반응성선
          mobile_bottom_line[0].style.width = `${
            flex_div_item.clientWidth * 0.25
          }px`;
          mobile_bottom_line_h[0].style.fontSize = "30px";
          mobile_bottom_line_h[1].style.fontSize = "20px";
          mobile_bottom_line_h[2].style.fontSize = "20px";
          mobile_bottom_line_h[3].style.fontSize = "20px";
          mobile_bottom_line_h[4].style.fontSize = "20px";
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
        mobile_bottom_line[1].addEventListener("click", () => {
          //글내용
          mobile_bottom_line_h1[1].style.display = "block";
          mobile_bottom_line_h1[0].style.display = "none";
          mobile_bottom_line_h1[2].style.display = "none";
          mobile_bottom_line_h1[3].style.display = "none";
          mobile_bottom_line_h1[4].style.display = "none";
          mobile_bottom_line_h[1].style.display = "block";
          mobile_bottom_line_h[0].style.display = "none";
          mobile_bottom_line_h[2].style.display = "none";
          mobile_bottom_line_h[3].style.display = "none";
          mobile_bottom_line_h[4].style.display = "none";

          //선채우기
          mobile_bottom_line1[1].style.width = "100%";
          mobile_bottom_line1[0].style.width = "0%";
          mobile_bottom_line1[2].style.width = "0%";
          mobile_bottom_line1[3].style.width = "0%";
          mobile_bottom_line1[4].style.width = "0%";

          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth}px)`;

          mobile_bottom_line[1].style.width = `${
            flex_div_item.clientWidth * 0.25
          }px`;
          mobile_bottom_line_h[1].style.fontSize = "30px";
          mobile_bottom_line_h[0].style.fontSize = "20px";
          mobile_bottom_line_h[2].style.fontSize = "20px";
          mobile_bottom_line_h[3].style.fontSize = "20px";
          mobile_bottom_line_h[4].style.fontSize = "20px";
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
        mobile_bottom_line[2].addEventListener("click", () => {
          //글내용
          mobile_bottom_line_h1[2].style.display = "block";
          mobile_bottom_line_h1[1].style.display = "none";
          mobile_bottom_line_h1[0].style.display = "none";
          mobile_bottom_line_h1[3].style.display = "none";
          mobile_bottom_line_h1[4].style.display = "none";
          mobile_bottom_line_h[2].style.display = "block";
          mobile_bottom_line_h[1].style.display = "none";
          mobile_bottom_line_h[0].style.display = "none";
          mobile_bottom_line_h[3].style.display = "none";
          mobile_bottom_line_h[4].style.display = "none";

          //선채우기
          mobile_bottom_line1[2].style.width = "100%";
          mobile_bottom_line1[1].style.width = "0%";
          mobile_bottom_line1[0].style.width = "0%";
          mobile_bottom_line1[3].style.width = "0%";
          mobile_bottom_line1[4].style.width = "0%";

          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 2}px)`;

          mobile_bottom_line[2].style.width = `${
            flex_div_item.clientWidth * 0.25
          }px`;
          mobile_bottom_line_h[2].style.fontSize = "30px";
          mobile_bottom_line_h[1].style.fontSize = "20px";
          mobile_bottom_line_h[0].style.fontSize = "20px";
          mobile_bottom_line_h[3].style.fontSize = "20px";
          mobile_bottom_line_h[4].style.fontSize = "20px";
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
        mobile_bottom_line[3].addEventListener("click", () => {
          //글내용

          mobile_bottom_line_h1[3].style.display = "block";
          mobile_bottom_line_h1[1].style.display = "none";
          mobile_bottom_line_h1[2].style.display = "none";
          mobile_bottom_line_h1[0].style.display = "none";
          mobile_bottom_line_h1[4].style.display = "none";
          mobile_bottom_line_h[3].style.display = "block";
          mobile_bottom_line_h[1].style.display = "none";
          mobile_bottom_line_h[2].style.display = "none";
          mobile_bottom_line_h[0].style.display = "none";
          mobile_bottom_line_h[4].style.display = "none";

          //선채우기
          mobile_bottom_line1[3].style.width = "100%";
          mobile_bottom_line1[1].style.width = "0%";
          mobile_bottom_line1[2].style.width = "0%";
          mobile_bottom_line1[0].style.width = "0%";
          mobile_bottom_line1[4].style.width = "0%";

          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 3}px)`;

          mobile_bottom_line[3].style.width = `${
            flex_div_item.clientWidth * 0.25
          }px`;
          mobile_bottom_line_h[3].style.fontSize = "30px";
          mobile_bottom_line_h[1].style.fontSize = "20px";
          mobile_bottom_line_h[2].style.fontSize = "20px";
          mobile_bottom_line_h[0].style.fontSize = "20px";
          mobile_bottom_line_h[4].style.fontSize = "20px";
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
        mobile_bottom_line[4].addEventListener("click", () => {
          //글내용
          mobile_bottom_line_h1[4].style.display = "block";
          mobile_bottom_line_h1[1].style.display = "none";
          mobile_bottom_line_h1[2].style.display = "none";
          mobile_bottom_line_h1[3].style.display = "none";
          mobile_bottom_line_h1[0].style.display = "none";
          mobile_bottom_line_h[4].style.display = "block";
          mobile_bottom_line_h[1].style.display = "none";
          mobile_bottom_line_h[2].style.display = "none";
          mobile_bottom_line_h[3].style.display = "none";
          mobile_bottom_line_h[0].style.display = "none";

          //선채우기
          mobile_bottom_line1[4].style.width = "100%";
          mobile_bottom_line1[1].style.width = "0%";
          mobile_bottom_line1[2].style.width = "0%";
          mobile_bottom_line1[3].style.width = "0%";
          mobile_bottom_line1[0].style.width = "0%";

          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 4}px)`;

          mobile_bottom_line[4].style.width = `${
            flex_div_item.clientWidth * 0.25
          }px`;
          mobile_bottom_line_h[4].style.fontSize = "30px";
          mobile_bottom_line_h[1].style.fontSize = "20px";
          mobile_bottom_line_h[2].style.fontSize = "20px";
          mobile_bottom_line_h[3].style.fontSize = "20px";
          mobile_bottom_line_h[0].style.fontSize = "20px";
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
  .mobile_bottom_line {
    margin: 0px 5px;
  }
  .mobile_bottom_line_h {
    display: none;
  }
  .mobile_bottom_line_h1 {
    display: none;
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
  .mobile_bottom_line {
    margin: 0px 20px;
  }
  .mobile_bottom_line_h {
    display: none;
  }
  .mobile_bottom_line_h1 {
    display: none;
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
  .mobile_bottom_line {
    margin: 0px 20px;
  }
  .mobile_bottom_line_h {
    display: block;
  }
  .mobile_bottom_line_h1 {
    display: none;
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
  .mobile_bottom_line {
    margin: 0px 20px;
  }
  .mobile_bottom_line_h {
    display: block;
  }
  .mobile_bottom_line_h1 {
    display: none;
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
  background: white;
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
  font-size: 20px;
  position: absolute;
  top: 0px;
  margin: 0px;
  transition: all 0.5s;
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
.mobile_bottom_line1 {
  width: 0px;
  height: 100%;
  background: #3180f1;
  position: absolute;
  top: 0;
  transition: all 1s;
}
.mobile_bottom_line_h1 {
  position: absolute;
  top: 20px;
  color: white;
}
</style>
<template>
  <!-- 슬라이더 -->
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
    <div class="flex_div4">
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

    <!-- //슬라이더버튼 -->
    <div class="slide_bottom">
      <div class="slide_bottom_wrap">
        <div class="slide_line_con">
          <div class="slide_line">
            <div class="slide_line1"></div>
            <div class="slide_ment_wrap">
              <h1 class="slide_ment_wrap_h">기업소개</h1>
              <h3 style="margin: 0px">aaaaaaaaaaa</h3>
            </div>
          </div>
        </div>
        <div class="slide_line_con">
          <div class="slide_line">
            <div class="slide_line1"></div>
            <div class="slide_ment_wrap">
              <h1 class="slide_ment_wrap_h">PORTFOLIO</h1>
              <h3 style="margin: 0px">aaaaaaaaaaa</h3>
            </div>
          </div>
        </div>
        <div class="slide_line_con">
          <div class="slide_line">
            <div class="slide_line1"></div>
            <div class="slide_ment_wrap">
              <h1 class="slide_ment_wrap_h">STORY</h1>
              <h3 style="margin: 0px">aaaaaaaaaaa</h3>
            </div>
          </div>
        </div>
        <div class="slide_line_con">
          <div class="slide_line">
            <div class="slide_line1"></div>
            <div class="slide_ment_wrap">
              <h1 class="slide_ment_wrap_h">문의의뢰</h1>
              <h3 style="margin: 0px">aaaaaaaaaaa</h3>
            </div>
          </div>
        </div>
        <div class="slide_line_con">
          <div class="slide_line">
            <div class="slide_line1"></div>
            <div class="slide_ment_wrap">
              <h1 class="slide_ment_wrap_h">인재채용</h1>
              <h3 style="margin: 0px">aaaaaaaaaaa</h3>
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
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px_max_1600px = window.matchMedia(
        "screen and (min-width: 1025px) and (max-width: 1600px)"
      );

      var min_1600px = window.matchMedia("screen and (min-width: 1600px)");

      //slidebottom
      var slide_line_con = document.querySelectorAll(".slide_line_con");
      var slide_line1 = document.querySelectorAll(".slide_line1");
      var slide_ment_wrap = document.querySelectorAll(".slide_ment_wrap");

      load_f();
      function load_f(params) {
        slide_line_width_f();

        if (max_600px.matches) {
          slide_line_font_display_f();
          slide_width_f();
          slide_line_font_f();
        }

        if (min_600px_max_1000px.matches) {
          slide_line_font_display_f();
          slide_width_f();
          slide_line_font_f();
        }
        if (min_1000px_max_1600px.matches) {
          slide_line_font_display_f();
          slide_width_f1();
          slide_line_font_f1();
        }
        if (min_1600px.matches) {
          slide_width_f1();
          slide_line_font_f1();
        }
      }

      function slide_line_font_display_f(params) {
        slide_ment_wrap[0].style.display = "block";
        slide_ment_wrap[1].style.display = "none";
        slide_ment_wrap[2].style.display = "none";
        slide_ment_wrap[3].style.display = "none";
        slide_ment_wrap[4].style.display = "none";

        slide_line_con[0].addEventListener("click", () => {
          slide_ment_wrap[0].style.display = "block";
          slide_ment_wrap[1].style.display = "none";
          slide_ment_wrap[2].style.display = "none";
          slide_ment_wrap[3].style.display = "none";
          slide_ment_wrap[4].style.display = "none";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_ment_wrap[1].style.display = "block";
          slide_ment_wrap[0].style.display = "none";
          slide_ment_wrap[2].style.display = "none";
          slide_ment_wrap[3].style.display = "none";
          slide_ment_wrap[4].style.display = "none";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_ment_wrap[2].style.display = "block";
          slide_ment_wrap[0].style.display = "none";
          slide_ment_wrap[1].style.display = "none";
          slide_ment_wrap[3].style.display = "none";
          slide_ment_wrap[4].style.display = "none";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_ment_wrap[3].style.display = "block";
          slide_ment_wrap[0].style.display = "none";
          slide_ment_wrap[2].style.display = "none";
          slide_ment_wrap[1].style.display = "none";
          slide_ment_wrap[4].style.display = "none";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_ment_wrap[4].style.display = "block";
          slide_ment_wrap[0].style.display = "none";
          slide_ment_wrap[2].style.display = "none";
          slide_ment_wrap[3].style.display = "none";
          slide_ment_wrap[1].style.display = "none";
        });
      }
      function slide_line_font_f1(params) {
        slide_ment_wrap[0].style.fontSize = "30px";
        slide_ment_wrap[1].style.fontSize = "15px";
        slide_ment_wrap[2].style.fontSize = "15px";
        slide_ment_wrap[3].style.fontSize = "15px";
        slide_ment_wrap[4].style.fontSize = "15px";

        slide_line_con[0].addEventListener("click", () => {
          slide_ment_wrap[0].style.fontSize = "30px";
          slide_ment_wrap[1].style.fontSize = "15px";
          slide_ment_wrap[2].style.fontSize = "15px";
          slide_ment_wrap[3].style.fontSize = "15px";
          slide_ment_wrap[4].style.fontSize = "15px";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_ment_wrap[1].style.fontSize = "30px";
          slide_ment_wrap[0].style.fontSize = "15px";
          slide_ment_wrap[2].style.fontSize = "15px";
          slide_ment_wrap[3].style.fontSize = "15px";
          slide_ment_wrap[4].style.fontSize = "15px";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_ment_wrap[2].style.fontSize = "30px";
          slide_ment_wrap[1].style.fontSize = "15px";
          slide_ment_wrap[0].style.fontSize = "15px";
          slide_ment_wrap[3].style.fontSize = "15px";
          slide_ment_wrap[4].style.fontSize = "15px";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_ment_wrap[3].style.fontSize = "30px";
          slide_ment_wrap[1].style.fontSize = "15px";
          slide_ment_wrap[2].style.fontSize = "15px";
          slide_ment_wrap[0].style.fontSize = "15px";
          slide_ment_wrap[4].style.fontSize = "15px";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_ment_wrap[4].style.fontSize = "30px";
          slide_ment_wrap[1].style.fontSize = "15px";
          slide_ment_wrap[2].style.fontSize = "15px";
          slide_ment_wrap[3].style.fontSize = "15px";
          slide_ment_wrap[0].style.fontSize = "15px";
        });
      }
      function slide_line_font_f(params) {
        slide_ment_wrap[0].style.fontSize = "10px";
        slide_ment_wrap[1].style.fontSize = "5px";
        slide_ment_wrap[2].style.fontSize = "5px";
        slide_ment_wrap[3].style.fontSize = "5px";
        slide_ment_wrap[4].style.fontSize = "5px";

        slide_line_con[0].addEventListener("click", () => {
          slide_ment_wrap[0].style.fontSize = "10px";
          slide_ment_wrap[1].style.fontSize = "5px";
          slide_ment_wrap[2].style.fontSize = "5px";
          slide_ment_wrap[3].style.fontSize = "5px";
          slide_ment_wrap[4].style.fontSize = "5px";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_ment_wrap[1].style.fontSize = "10px";
          slide_ment_wrap[0].style.fontSize = "5px";
          slide_ment_wrap[2].style.fontSize = "5px";
          slide_ment_wrap[3].style.fontSize = "5px";
          slide_ment_wrap[4].style.fontSize = "5px";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_ment_wrap[2].style.fontSize = "10px";
          slide_ment_wrap[1].style.fontSize = "5px";
          slide_ment_wrap[0].style.fontSize = "5px";
          slide_ment_wrap[3].style.fontSize = "5px";
          slide_ment_wrap[4].style.fontSize = "5px";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_ment_wrap[3].style.fontSize = "10px";
          slide_ment_wrap[1].style.fontSize = "5px";
          slide_ment_wrap[2].style.fontSize = "5px";
          slide_ment_wrap[0].style.fontSize = "5px";
          slide_ment_wrap[4].style.fontSize = "5px";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_ment_wrap[4].style.fontSize = "10px";
          slide_ment_wrap[1].style.fontSize = "5px";
          slide_ment_wrap[2].style.fontSize = "5px";
          slide_ment_wrap[3].style.fontSize = "5px";
          slide_ment_wrap[0].style.fontSize = "5px";
        });
      }

      function slide_line_width_f(params) {
        slide_line1[0].style.width = "100%";
        slide_line1[1].style.width = "0%";
        slide_line1[2].style.width = "0%";
        slide_line1[3].style.width = "0%";
        slide_line1[4].style.width = "0%";
        slide_line_con[0].addEventListener("click", () => {
          slide_line1[0].style.width = "100%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_line1[1].style.width = "100%";
          slide_line1[0].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_line1[2].style.width = "100%";
          slide_line1[1].style.width = "0%";
          slide_line1[0].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[4].style.width = "0%";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_line1[3].style.width = "100%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[0].style.width = "0%";
          slide_line1[4].style.width = "0%";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_line1[4].style.width = "100%";
          slide_line1[1].style.width = "0%";
          slide_line1[2].style.width = "0%";
          slide_line1[3].style.width = "0%";
          slide_line1[0].style.width = "0%";
        });
      }

      function slide_width_f(params) {
        slide_line_con[0].style.width = "60%";
        slide_line_con[1].style.width = "10%";
        slide_line_con[2].style.width = "10%";
        slide_line_con[3].style.width = "10%";
        slide_line_con[4].style.width = "10%";

        slide_line_con[0].addEventListener("click", () => {
          slide_line_con[0].style.width = "60%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_line_con[1].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_line_con[2].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_line_con[3].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_line_con[4].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[3].style.width = "10%";
        });
      }
      function slide_width_f1(params) {
        slide_line_con[0].style.width = "60%";
        slide_line_con[1].style.width = "10%";
        slide_line_con[2].style.width = "10%";
        slide_line_con[3].style.width = "10%";
        slide_line_con[4].style.width = "10%";

        slide_line_con[0].addEventListener("click", () => {
          slide_line_con[0].style.width = "60%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[1].addEventListener("click", () => {
          slide_line_con[1].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[2].addEventListener("click", () => {
          slide_line_con[2].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[3].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[3].addEventListener("click", () => {
          slide_line_con[3].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[4].style.width = "10%";
        });
        slide_line_con[4].addEventListener("click", () => {
          slide_line_con[4].style.width = "60%";
          slide_line_con[0].style.width = "10%";
          slide_line_con[2].style.width = "10%";
          slide_line_con[1].style.width = "10%";
          slide_line_con[3].style.width = "10%";
        });
      }
      window.addEventListener("resize", () => {
        load_f();
      });

      //slide
      var flex_div_item = document.querySelector(".flex_div_item");
      var flex_div = document.querySelector(".flex_div");
      var flex_div1 = document.querySelector(".flex_div1");
      var flex_div2 = document.querySelector(".flex_div2");
      var flex_div3 = document.querySelector(".flex_div3");
      var flex_div4 = document.querySelector(".flex_div4");
      line_shrink();
      function line_shrink(params) {
        if (max_600px.matches) {
          slide_f();
        }

        if (min_600px_max_1000px.matches) {
          slide_f();
        }

        if (min_1000px_max_1600px.matches) {
          slide_f();
        }

        if (min_1600px.matches) {
          slide_f();
        }
      }
      function slide_f(params) {
        slide_line_con[0].addEventListener("click", () => {
          //슬라이드
          flex_div.style.transform = "translateX(0px)";
          flex_div1.style.transform = "translateX(0px)";
          flex_div2.style.transform = "translateX(0px)";
          flex_div3.style.transform = "translateX(0px)";
        });
        slide_line_con[1].addEventListener("click", () => {
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth}px)`;
          flex_div4.style.transform = `translateX(-${window.innerWidth}px)`;
        });

        slide_line_con[2].addEventListener("click", () => {
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 2}px)`;
          flex_div4.style.transform = `translateX(-${window.innerWidth * 2}px)`;
        });
        slide_line_con[3].addEventListener("click", () => {
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 3}px)`;
          flex_div4.style.transform = `translateX(-${window.innerWidth * 3}px)`;
        });
        slide_line_con[4].addEventListener("click", () => {
          //슬라이드
          flex_div.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div1.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div2.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div3.style.transform = `translateX(-${window.innerWidth * 4}px)`;
          flex_div4.style.transform = `translateX(-${window.innerWidth * 4}px)`;
        });
      }
      window.addEventListener("resize", () => {
        line_shrink();
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
/* 슬라이더 */
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
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.flex_div4 {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/slide/slide2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.flex_div_item {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* 슬라이더버튼 */
@media screen and (max-width: 600px) {
  .slide_line {
    margin: 0px 5px;
  }
  .slide_ment_wrap {
    display: 0;
  }
  .slide_bottom_wrap {
    width: 300px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .slide_line {
    margin: 0px 10px;
  }
  .slide_ment_wrap {
    display: 0;
  }
  .slide_bottom_wrap {
    width: 600px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1600px) {
  .slide_line {
    margin: 0px 15px;
  }
  .slide_ment_wrap {
    display: 1;
  }
  .slide_bottom_wrap {
    width: 1025px;
  }
}
@media screen and (min-width: 1600px) {
  .slide_line {
    margin: 0px 20px;
  }
  .slide_ment_wrap {
    display: 1;
  }
  .slide_bottom_wrap {
    width: 1600px;
  }
}
.slide_bottom {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 100px;
  justify-content: center;
}
.slide_line_con {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  flex-shrink: 0;
}
.slide_line {
  width: 100%;
  height: 6px;
  background: white;
  position: relative;
}
.slide_line1 {
  width: 0px;
  height: 100%;
  background: #3180f1;
  transition: all 0.5s;
}
.slide_ment_wrap {
  width: 100%;
  position: absolute;
  transition: all 0.5s;
  color: white;
  word-break: keep-all;
}
.slide_ment_wrap_h {
  margin: 0px;
}
.slide_bottom_wrap {
  display: flex;
  justify-content: center;
}
</style>
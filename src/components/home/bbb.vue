<template>
  <div class="flex_container">
    <div style="width: 100%">
      <h1 class="gameins">GAMEINS SERVICE</h1>
      <div class="gameins_img">
        <h1 class="gameins_img_h">UI/UX 디자인</h1>
        <h3 class="gameins_img_h1">
          브랜드 가치를 높일 수 있는 모던 UI/UX개발
        </h3>
        <div class="gameins_img_line">
          <div style="width: 40%">
            <div class="gameins_img_line_circle">
              <h1 class="gameins_img_line_circle_bottom">웹/앱 서비스개발</h1>
              <div class="gameins_img_line_circle_hover">
                <img
                  src="../../assets/service/hoverimg.png"
                  alt=""
                  class="gameins_img_line_circle_hover_img"
                />
                <div class="gameins_img_line_circle_hover_circle"></div>
                <h1 class="gameins_img_line_circle_hover_h">
                  웹/앱 서비스개발
                </h1>
              </div>
            </div>
          </div>
          <div class="gameins_img_line_circle1">
            <h1 class="gameins_img_line_circle1_bottom">UI/UX 디자인</h1>
            <div class="gameins_img_line_circle1_hover">
              <img
                src="../../assets/service/hoverimg.png"
                alt=""
                class="gameins_img_line_circle1_hover_img"
              />
              <div class="gameins_img_line_circle1_hover_circle"></div>
              <h1 class="gameins_img_line_circle1_hover_h">UI/UX 디자인</h1>
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
      var gameins_img_line_circle1_hover = document.querySelector(
        ".gameins_img_line_circle1_hover"
      );
      var gameins_img_line_circle_hover = document.querySelector(
        ".gameins_img_line_circle_hover"
      );

      gameins_img_line_circle1_hover.addEventListener("mouseenter", () => {
        gameins_img_line_circle1_hover.style.opacity = "1";
      });
      gameins_img_line_circle1_hover.addEventListener("mouseleave", () => {
        gameins_img_line_circle1_hover.style.opacity = "0";
      });
      gameins_img_line_circle_hover.addEventListener("mouseenter", () => {
        gameins_img_line_circle_hover.style.opacity = "1";
      });
      gameins_img_line_circle_hover.addEventListener("mouseleave", () => {
        gameins_img_line_circle_hover.style.opacity = "0";
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.flex_container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
}
.gameins {
  font-size: 60px;
  color: #262626;
  text-align: center;
  margin: 34px;
}
.gameins_img {
  background-image: url("../../assets/service/bbbimg.png");
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1px;
  position: relative;
}
.gameins_img_h {
  text-align: center;
  color: white;
  font-size: 60px;
  margin-top: 100px;
  margin-bottom: 0px;
}
.gameins_img_h1 {
  text-align: center;
  color: white;
  font-size: 20px;
  margin-top: 15px;
}
.gameins_img_line {
  width: 100%;
  height: 4px;
  background: white;
  margin-top: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gameins_img_line_circle {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: relative;
}
.gameins_img_line_circle1 {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: relative;
}
.gameins_img_line_circle_hover {
  width: 260px;
  height: 260px;
  background: #3180f1;
  position: absolute;
  right: -122px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  transition: all 1s;
  opacity: 0;
}
.gameins_img_line_circle_hover_circle {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
}
.gameins_img_line_circle1_hover {
  width: 260px;
  height: 260px;
  background: #3180f1;
  position: absolute;
  right: -122px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  transition: all 1s;
  opacity: 0;
}
.gameins_img_line_circle1_hover_circle {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
}
.gameins_img_line_circle_hover_img {
  width: 36px;
  height: 42.15px;
  position: absolute;
  top: 60px;
}
.gameins_img_line_circle_hover_h {
  font-size: 26px;
  color: white;
  position: absolute;
  top: 150px;
  margin: 0px;
}
.gameins_img_line_circle1_hover_img {
  width: 36px;
  height: 42.15px;
  position: absolute;
  top: 60px;
}
.gameins_img_line_circle1_hover_h {
  font-size: 26px;
  color: white;
  position: absolute;
  top: 150px;
  margin: 0px;
}
.gameins_img_line_circle_bottom {
  position: absolute;
  color: white;
  font-size: 26px;
  width: 186px;
  height: 26px;
  top: 11px;
  left: -85px;
}
.gameins_img_line_circle1_bottom {
  position: absolute;
  color: white;
  font-size: 26px;
  width: 186px;
  height: 26px;
  top: 11px;
  left: -65px;
}
</style>
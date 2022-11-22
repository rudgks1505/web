<template>
  <div class="top_img">
    <div class="top_img_gra"></div>

    <h3 class="top_img_h">회사소개</h3>

    <div class="top_img_bottom_gra">
      <div
        class="top_img_bottom_gra_menu_centerdiv"
        :style="state.styleObject1"
        @click="nav_routera(1)"
      >
        <p class="top_img_bottom_gra_menu_centerdiv_p">CEO 인사말</p>
      </div>
      <div
        class="top_img_bottom_gra_menu_centerdiv"
        :style="state.styleObject2"
        @click="nav_routera(2)"
      >
        <p class="top_img_bottom_gra_menu_centerdiv_p">연혁</p>
      </div>
      <div
        class="top_img_bottom_gra_menu_centerdiv"
        :style="state.styleObject3"
        @click="nav_routera(3)"
      >
        <p class="top_img_bottom_gra_menu_centerdiv_p">조직도</p>
      </div>
      <div
        class="top_img_bottom_gra_menu_centerdiv"
        :style="state.styleObject4"
        @click="nav_routera(4)"
      >
        <p class="top_img_bottom_gra_menu_centerdiv_p">CI 소개</p>
      </div>
      <div
        class="top_img_bottom_gra_menu_centerdiv"
        :style="state.styleObject5"
        @click="nav_routera(5)"
      >
        <p class="top_img_bottom_gra_menu_centerdiv_p">찾아오시는길</p>
      </div>
    </div>
  </div>

  <!-- 밑에글 -->
  <div class="intro5_back">
    <div class="intro5_back_centerdiv">
      <div class="intro5_back_centerdiv_con">
        <div>
          <h3 style="margin-top: 0px; text-align: center">CI소개</h3>
          <p>게임인스의 CI는 IT 웹 개발 전문 기업으로서</p>
          <p style="margin-bottom: 30px">전문성과 도전정신을 표현하였습니다.</p>
          <p>
            곡선과 직선을 결합해 부드러움과 힘 있게 뻗어나가는 로고 타입를 통해
            IT기업으로
          </p>
          <p>
            성장하는 기업의 현재와 미래를 나타내었습니다. 또한 틀에 박혀있지
            않고, 자유로움과 힘 있는
          </p>
          <p>
            이미지를 전달하는 Blue 색상과 Black 색상을 통해 힘 있게 뻗어나갈 수
            있는 기업임을 표현하였습니다.
          </p>
        </div>
      </div>

      <h3 style="text-align: center">Corporate Logo</h3>
      <img
        src="../../assets/wallpaper/intrologo.png"
        alt=""
        class="intrologo"
      />
      <h3 style="text-align: center">단색형</h3>
      <img
        src="../../assets/wallpaper/intrologo1.png"
        alt=""
        class="intrologo"
      />
      <h1 class="color_sys">컬러 시스템</h1>
      <h3 style="font-size: 20px">- Main Color</h3>

      <div class="color_flex_div">
        <div class="color_flex_item">
          <div class="color_flex_item_color"></div>
          <div class="color_flex_item_h">
            <div class="color_flex_item_h_item">
              <p>RGB</p>
              <p>HEX</p>
              <p>CMYK</p>
            </div>
            <div class="color_flex_item_h_item">
              <div style="height: 33%">
                <p style="height: 50%">54/132/245,</p>
                <p style="height: 50%">1/54/158</p>
              </div>
              <div style="height: 33%">
                <p style="height: 50%">3684F5,</p>
                <p style="height: 50%">01369E</p>
              </div>
              <div style="height: 33%">
                <p style="height: 50%">78/46/0/4,</p>
                <p style="height: 50%">99/66/0/38</p>
              </div>
            </div>
          </div>
        </div>
        <div class="color_flex_item">
          <div class="color_flex_item_color_blue"></div>
          <div class="color_flex_item_h">
            <div class="color_flex_item_h_item">
              <p>RGB</p>
              <p>HEX</p>
              <p>CMYK</p>
            </div>
            <div class="color_flex_item_h_item">
              <p>0/83/201</p>
              <p>0053C9</p>
              <p>90/68/0/0</p>
            </div>
          </div>
        </div>
      </div>

      <h3 style="font-size: 20px">- Sub Color</h3>

      <div class="color_flex_div1" style="margin-bottom: 140px">
        <div class="color_flex_item">
          <div class="color_flex_item_color1"></div>
          <div class="color_flex_item_h">
            <div class="color_flex_item_h_item">
              <p>RGB</p>
              <p>HEX</p>
              <p>CMYK</p>
            </div>
            <div class="color_flex_item_h_item">
              <p>45/45/45</p>
              <p>2D2D2D</p>
              <p>80/75/73/50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-1></footer-1>
</template>

<script>
import { onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import Footer1 from "../footer/footer1.vue";

export default {
  components: { Footer1 },
  setup() {
    const router = useRouter();

    const state = reactive({
      count: 0,
      styleObject: {},
      styleObject1: {},
      styleObject2: {},
      styleObject3: {},
      styleObject4: {},
      styleObject5: {},
    });

    function routertest(params) {
      router.push("/");
    }
    function nav_routera(i) {
      router.push(`/intro${i}`);
    }

    function bordercolor(params) {
      state.styleObject4.borderBottom = "3px solid #3180F1";
      state.styleObject.borderBottom = "none";
      state.styleObject2.borderBottom = "none";
      state.styleObject3.borderBottom = "none";
      state.styleObject1.borderBottom = "none";
      state.styleObject5.borderBottom = "none";
    }

    bordercolor();

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      if (max_600px.matches) {
      }
      if (min_600px_max_1000px.matches) {
      }
      if (min_1000px.matches) {
      }
    });

    return {
      state,
      routertest,
      bordercolor,
      nav_routera,
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

p {
  font-weight: bold;
  margin: 0px;
}

* {
  box-sizing: border-box;
}

/* @@@@@@@ */
.top_img {
  width: 100%;
  height: 419px;
  background-image: url("../../assets/wallpaper/businessman32136591.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.top_img_gra {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}

.top_img_bottom_gra {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  height: 66px;
  display: flex;
  justify-content: center;
}

.top_img_bottom_gra_menu {
  position: absolute;
  bottom: 0;
  width: auto;
  margin-right: 250px;
}

.top_img_bottom_gra_menu_centerdiv {
  width: 140px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.top_img_bottom_gra_menu_centerdiv_p {
  margin: 0px;
  color: white;
  font-size: 20px;
}

.top_img_h {
  position: absolute;
  top: 40%;
  color: white;
  font-size: 40px;
  width: 100%;
  text-align: center;
  margin: 0;
}

/* 22@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
@media screen and (max-width: 600px) {
  .intrologo {
    width: 100%;
  }
  .intro5_back_centerdiv {
    width: 90%;
  }
  .color_flex_item_color_blue {
    width: 50%;
  }
  .color_flex_item_color1 {
    width: 50%;
  }
  .color_flex_item_color {
    width: 50%;
  }
  .intro5_back p {
    font-size: 12px;
  }
  .color_flex_item_h p {
    font-size: 12px;
  }
  .intro5_back h3 {
    font-size: 20px;
    text-align: center;
  }
  .color_flex_div1 {
    justify-content: center;
  }
  .color_sys {
    margin-top: 100px;
    font-size: 20px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .intrologo {
    width: 100%;
  }
  .intro5_back_centerdiv {
    width: 90%;
  }
  .color_flex_item_color_blue {
    width: 50%;
  }
  .color_flex_item_color1 {
    width: 50%;
  }
  .color_flex_item_color {
    width: 50%;
  }
  .intro5_back p {
    font-size: 18px;
  }
  .color_flex_item_h p {
    font-size: 16px;
  }
  .intro5_back h3 {
    font-size: 30px;
    text-align: center;
  }
  .color_flex_div1 {
    justify-content: center;
  }
  .color_sys {
    margin-top: 150px;
    font-size: 30px;
  }
}

@media screen and (min-width: 1025px) {
  .intrologo {
    width: 100%;
  }
  .intro5_back_centerdiv {
    width: 1200px;
  }
  .color_flex_item_color_blue {
    width: 400px;
  }
  .color_flex_item_color1 {
    width: 400px;
  }
  .color_flex_item_color {
    width: 400px;
  }
  .intro5_back p {
    font-size: 20px;
  }
  .color_flex_item_h p {
    font-size: 16px;
  }
  .intro5_back h3 {
    font-size: 30px;
    text-align: left;
  }
  .color_flex_div1 {
    justify-content: left;
  }
  .color_sys {
    margin-top: 200px;
    font-size: 30px;
  }
}

* {
  box-sizing: border-box;
}

.intrologo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.intro5_back {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
}
.intro5_back_centerdiv_con {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 140px;
  margin-bottom: 170px;
}
.color_flex_div {
  display: flex;
  width: 100%;
  min-height: 140px;
  flex-wrap: wrap;
  justify-content: center;
}
.color_flex_div1 {
  display: flex;
  width: 100%;
  min-height: 140px;
  flex-wrap: wrap;
}
.color_flex_item {
  width: 600px;
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
.color_flex_item_color {
  height: 100%;
  background-image: url("../../assets/wallpaper/bluecolor.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.color_flex_item_color_blue {
  height: 100%;
  background-color: #0052c9;
}
.color_flex_item_color1 {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #2d2d2d;
}
.color_flex_item_h {
  display: flex;
  padding: 10px;
  padding-right: 0px;
}
.color_flex_item_h p {
  height: 33%;
}
.color_flex_item_h_item {
  width: 80px;
}
.color_sys {
  text-align: center;
}
</style>
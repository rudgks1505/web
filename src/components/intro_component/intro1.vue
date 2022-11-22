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
  <div class="intro2_back">
    <div class="intro2_back_centerdiv">
      <div class="intro2_back_centerdiv_box">
        <h1>SIMPLE IS THE BEST!</h1>
        <p style="margin-bottom: 30px">
          게임인스는 SIMPLE IS THE BEST를 지향합니다.
        </p>
        <p>
          어떠한 복잡한 기능을 가진 서비스도 정말 필요한 요소인지 우선 파악하고,
        </p>
        <p>UX/UI적으로 불필요한 요소를 제거하여 유저가 이용하기 쉽도록</p>
        <p style="margin-bottom: 30px">
          단순하면서도 직관적인 서비스를 기획/디자인 합니다.
        </p>
        <p>또한, 서비스를 기획하기 전에 시장조사를 통해 비슷한 분야의</p>
        <p>타사 서비스를 분석하고, 고객의 니즈에 맞는 서비스 개발은 물론</p>
        <p style="margin-bottom: 30px">차별화된 컨셉 혹은 기능을 제안합니다.</p>
        <p>게임인스는 고객을 위한 서비스 혹은 자사 서비스 모두 사람들에게</p>
        <p>선한 가치를 제공할 수 있도록 노력합니다.</p>
      </div>
      <div class="intro2_back_centerdiv_box">
        <img
          src="../../assets/wallpaper/ceo.png"
          alt=""
          class="intro2_back_centerdiv_box_img"
        />

        <h2 style="margin: 0px; text-align: center">(주)게임인스</h2>
        <h2 style="margin: 0px; text-align: center">대표이사 김웅겸</h2>
        <img
          src="../../assets/wallpaper/sign.png"
          alt=""
          style="width: 150px"
          class="intro2_back_centerdiv_box_img"
        />
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
      state.styleObject1.borderBottom = "3px solid #3180F1";
      state.styleObject.borderBottom = "none";
      state.styleObject2.borderBottom = "none";
      state.styleObject3.borderBottom = "none";
      state.styleObject4.borderBottom = "none";
      state.styleObject5.borderBottom = "none";
    }

    bordercolor();

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      var top_img_bottom_gra_menu_centerdiv = document.querySelectorAll(
        ".top_img_bottom_gra_menu_centerdiv"
      );
      var top_img_bottom_gra_menu_centerdiv_p = document.querySelectorAll(
        ".top_img_bottom_gra_menu_centerdiv_p"
      );
      var body = document.querySelector("body");
      body.style.overflowY = "scroll";

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
  .intro2_back_centerdiv_box img {
    width: 300px;
  }
  .intro2_back_centerdiv_box {
    width: 300px;
  }
  .intro2_back_centerdiv_box h1 {
    font-size: 30px;
  }
  .intro2_back_centerdiv_box h2 {
    font-size: 20px;
  }
  .intro2_back_centerdiv_box p {
    font-size: 20px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .intro2_back_centerdiv_box img {
    width: 500px;
  }
  .intro2_back_centerdiv_box {
    width: 600px;
  }
  .intro2_back_centerdiv_box h1 {
    font-size: 30px;
  }
  .intro2_back_centerdiv_box h2 {
    font-size: 20px;
  }
  .intro2_back_centerdiv_box p {
    font-size: 20px;
  }
}

@media screen and (min-width: 1025px) {
  .intro2_back_centerdiv_box img {
    width: 500px;
  }
  .intro2_back_centerdiv_box {
    width: 600px;
  }
  .intro2_back_centerdiv_box h1 {
    font-size: 30px;
  }
  .intro2_back_centerdiv_box h2 {
    font-size: 20px;
  }
  .intro2_back_centerdiv_box p {
    font-size: 20px;
  }
}
.intro2_back {
  display: flex;
  justify-content: center;
  padding: 140px 0px;
  background-image: url("../../assets/wallpaper/sky.jpg");
  background-size: contain;
  width: 100%;
  min-height: 834px;
  background-position-y: 100%;
  background-repeat: no-repeat;
}
.intro2_back_centerdiv {
  width: 1200px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
}
.intro2_back_centerdiv_box {
  position: relative;
}
.intro2_back_centerdiv_box_h {
  position: absolute;
  bottom: 100px;
  left: 150px;
}
.intro2_back_centerdiv_box_img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
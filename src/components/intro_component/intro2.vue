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
  <div class="intro3_back">
    <div class="intro3_back_centerdiv">
      <img src="../../assets/wallpaper/history.jpg" alt="" />
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
      state.styleObject2.borderBottom = "3px solid #3180F1";
      state.styleObject.borderBottom = "none";
      state.styleObject1.borderBottom = "none";
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
  .intro3_back_centerdiv img {
    width: 350px;
    height: 350px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .intro3_back_centerdiv img {
    width: 600px;
    height: 600px;
  }
}

@media screen and (min-width: 1025px) {
  .intro3_back_centerdiv img {
    width: 1000px;
    height: 100%;
  }
}
.intro3_back {
  display: flex;
  justify-content: center;
  margin: 140px 0px;
  width: 100%;
  height: 934px;
}
.intro3_back_centerdiv {
  width: 1200px;
  display: flex;
  justify-content: center;
}
</style>
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
  <div class="intro6_back">
    <div class="intro6_back_centerdiv">
      <div>
        <h3 style="text-align: center; margin-top: 0px; font-size: 30px">
          주소
        </h3>
        <h3 style="text-align: center">부산광역시 사상구 백양대로 684</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.548042668115!2d128.9868924160836!3d35.1678907655588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ea7f35096129%3A0x26e62be76f0388cf!2z67aA7IKw6rSR7Jet7IucIOyCrOyDgeq1rCDrsLHslpHrjIDroZwgNjg0!5e0!3m2!1sko!2skr!4v1668045718480!5m2!1sko!2skr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="googlemap"
        ></iframe>
        <div class="intro6_textbox" style="margin-top: 85px">
          <h3>지하철</h3>
          <p>부산2호선 사상역</p>
        </div>
        <div class="intro6_textbox">
          <h3>버스</h3>
          <p class="intro6_textbox_p">
            지선 128-1, 133, 169-1, 62, 129-1 신라대 입구 하차
          </p>
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
      state.styleObject5.borderBottom = "3px solid #3180F1";
      state.styleObject.borderBottom = "none";
      state.styleObject2.borderBottom = "none";
      state.styleObject3.borderBottom = "none";
      state.styleObject4.borderBottom = "none";
      state.styleObject1.borderBottom = "none";
    }

    bordercolor();

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
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
  .googlemap {
    width: 100%;
    height: 460px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .googlemap {
    width: 600px;
    height: 460px;
  }
}

@media screen and (min-width: 1025px) {
  .googlemap {
    width: 1000px;
    height: 460px;
  }
}
.intro6_back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.intro6_back_centerdiv {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 140px 0px;
}
.intro6_back_centerdiv h3 {
  font-size: 20px;
}
.intro6_textbox {
  display: flex;
  align-items: center;
}
.intro6_textbox h3 {
  width: 90px;
  font-size: 20px;
}
.intro6_textbox progress {
  font-size: 20px;
}
.googlemap {
  border: none;
}
</style>
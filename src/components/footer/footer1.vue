<template>
  <!-- 풋터 -->
  <div class="bottom_nav">
    <div class="bottom_nav_item">
      <div>
        <img src="../../assets/wallpaper/bottomlogo.png" alt="" />
        <div class="bottom_nav_item_hbox">
          <p style="margin: 0px">이용약관</p>
          <p style="margin: 0px 5px">|</p>
          <p style="margin: 0px">개인정보처리방침</p>
          <p style="margin: 0px 5px">|</p>
          <p style="margin: 0px">책임의 한계와 법적고지</p>
        </div>
        <div class="bottom_nav_item_hbox">
          <p style="margin: 0px; margin-right: 10px">(주)게임인스</p>
          <p style="margin: 0px; margin-right: 10px">대표이사:김웅겸</p>
          <p style="margin: 0px; margin-right: 10px">
            주소:부산광역시 사상구 백양대로684 1F E-mail:gameinscokr@naver.com
          </p>
          <p style="margin: 0px; margin-right: 10px">
            사업자등록번호:362-88-00435
          </p>
          <p style="margin: 0px; margin-right: 10px">
            통신판매업 등록번호:1649-3196-3663-0809
          </p>
        </div>
        <div class="bottom_nav_item_hbox">
          <p style="margin: 0px">Copyright 2022 GAMEINS All right reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";

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
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      var bottom_nav = document.querySelector(".bottom_nav");

      function footer_fun(params) {
        if (max_600px.matches) {
          bottom_nav.style.display = "flex";
        }
        if (min_600px_max_1000px.matches) {
          bottom_nav.style.display = "flex";
        }
        if (min_1000px.matches) {
          bottom_nav.style.display = "flex";
        }
      }

      footer_fun();
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .bottom_nav_item_hbox {
    font-size: 10px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .bottom_nav_item_hbox {
    font-size: 15px;
  }
}

@media screen and (min-width: 1025px) {
  .bottom_nav_item_hbox {
    font-size: 18.72px;
  }
}

* {
  box-sizing: border-box;
}

.bottom_nav {
  width: 100%;
  min-height: 100px;
  background: #212121;
  justify-content: center;
  text-align: center;
}

.bottom_nav_item {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom_nav_item img {
  width: 145.25px;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 10px;
}

.bottom_nav_item_hbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  color: #eeeeee;
  flex-wrap: wrap;
}
</style>
<template>
  <div class="box2">
    <div class="home_con" style="height: 100%">
      <div
        class="home_con_item"
        style="display: flex; color: white; text-align: center"
      >
        <div style="position: relative">
          <div class="box2_line"></div>
          <h1 class="ment1" style="margin: 0px">
            (주)게임인스는 기술 지향적 솔루션 구축,
          </h1>
          <h1 class="ment2" style="margin: 0px">
            인터넷 플랫폼 서비스 개발 등 한 차원 높은 서비스를
          </h1>
          <h1 class="ment3" style="margin: 0px">
            제공하기 위한 목표를 가지고 매년 성장 중인 Total IT활용 솔루션
          </h1>
          <div class="ment4">
            <h1>개발 전문기업입니다.</h1>
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
      var box2_line = document.querySelector(".box2_line");
      var ment1 = document.querySelector(".ment1");
      var ment2 = document.querySelector(".ment2");
      var ment3 = document.querySelector(".ment3");
      var ment4 = document.querySelector(".ment4");
      var ment_cover = document.querySelector(".ment_cover");
      setTimeout(() => {
        box2_line.style.opacity = "1";
        setTimeout(() => {
          ment1.style.transform = "scaleY(1)";
          ment1.style.opacity = "1";
          setTimeout(() => {
            ment2.style.transform = "scaleY(1)";
            ment2.style.opacity = "1";
            setTimeout(() => {
              ment3.style.transform = "scaleY(1)";
              ment3.style.opacity = "1";
              setTimeout(() => {
                ment4.style.transform = "scaleY(1)";
                ment4.style.opacity = "1";
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.box2 {
  width: 100%;
  height: 100vh;
  background: black;
  position: relative;
}
/* 배경전체틀 */
.home_con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home_con_item {
  align-items: center;
  justify-content: center;
}
/* 멘트 */
.box2_line {
  width: 80px;
  height: 6px;
  background: #0053c9;
  margin-left: auto;
  margin-right: auto;
  transition: all 1s;
  opacity: 0;
}
.ment1 {
  position: relative;
  transition: all 1s;
  transform: scaleY(-1);
  opacity: 0;
}
.ment2 {
  position: relative;
  transition: all 1s;
  transform: scaleY(-1);
  opacity: 0;
}
.ment3 {
  position: relative;
  transition: all 1s;
  transform: scaleY(-1);
  opacity: 0;
}
.ment4 {
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 1s;
  transform: scaleY(-1);
  opacity: 0;
}
.ment4 h1 {
  color: black;
  background: white;
  padding: 0px 15px;
  margin: 10px 0px;
}
.ment_cover {
  width: 100%;
  height: 210px;
  position: absolute;
  top: 0;
  z-index: 10;
  transition: 1s;
}
</style>
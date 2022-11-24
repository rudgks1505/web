<template>
  <div class="ffff">
    <div class="simple">
      <h1 class="simple_h">"SIMPLE</h1>
      <h1 class="simple_h1">IS</h1>
    </div>
    <h1 class="thebest">THE BEST"</h1>
  </div>
  <div class="flex_container">
    <div class="monitor">
      <div>
        <div class="vision_flex">
          <h1 class="vision_flex_h">VISION</h1>
          <div class="vision_flex_div">
            <h3 style="margin: 0px; font-size: 20px">
              4차 산업혁명의 시작으로 어느 곳에서나 통합적이고 집약된
              커뮤니케이션 능력을 요구하는
            </h3>
            <h3 style="margin: 0px; font-size: 20px">
              시대에 맞추어 사람과 사람, 기술이 모여 더 나은 미래를 논의하는
              곳에 함께 하겠습니다.
            </h3>
            <h3 style="margin: 0px; font-size: 20px; margin-top: 20px">
              혁신적 사고와 미래 지향의 경영을 통해 지역사회와 상생하며 함께
              성장하는
            </h3>
            <h3 style="margin: 0px; font-size: 20px">
              기업이 되도록 최선을 다할 것을 약속드립니다.
            </h3>
          </div>
        </div>
        <div class="aaa_img"></div>
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

    onMounted(() => {});

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
.ffff {
  position: absolute;
  top: 10vh;
  left: 0;
}
.flex_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.monitor {
  width: 1920px;
  height: 1080px;
  display: flex;
  align-items: flex-end;
}
.simple {
  display: flex;
  margin-top: 60px;
}
.simple_h {
  background: #3180f1;
  width: 403.37px;
  height: 104.55px;
  margin: 0px;
  font-size: 92.32px;
  color: white;
  line-height: 104.55px;
  text-align: center;
}
.simple_h1 {
  width: 103.37px;
  height: 104.55px;
  margin: 0px;
  font-size: 92.32px;
  color: #414141;
  line-height: 104.55px;
  text-align: center;
}
.thebest {
  background: #3180f1;
  width: 479.92px;
  height: 104.55px;
  margin: 0px;
  font-size: 92.32px;
  color: white;
  line-height: 104.55px;
  text-align: center;
  margin-left: 251.08px;
  margin-top: 9px;
}
.vision_flex {
  display: flex;
  justify-content: space-between;
  margin-top: 440px;
  padding: 0px 160px;
}
.vision_flex_h {
  color: #f6f6f6;
  font-size: 180px;
  width: 638px;
  margin: 0px;
  height: 200px;
}
.vision_flex_div {
  width: 745px;
}
.aaa_img {
  background: url("../../assets/service/aaa2img.png");
  background-position: center;
  width: 1600px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 3;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
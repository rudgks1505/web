<template>
  <div class="ceo_con">
    <div class="ceo_wrap">
      <div style="display: flex; align-items: center; padding: 0px 20px">
        <h1 class="ceo_wrap_h">CEO&nbsp;MESSAGE</h1>
        <div class="ceo_wrap_line"></div>
      </div>
      <div class="ceo_ment">
        <div class="ceo_ment_ment">
          <h1 class="ceo_ment_ment_h">"SIMPLE IS THE BEST"</h1>

          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            어떠한 복잡한 기능을 가진 서비스도 정말 필요한 요소인지 우선
            파악하고,
          </h3>
          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            UX/UI적으로 불필요한 요소를 제거하여 유저가 이용하기 쉽도록
          </h3>
          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            단순하면서도 직관적인 서비스를 기획/디자인 합니다.
          </h3>
          <h3 style="margin-bottom: 0px" class="ceo_ment_ment_h1">
            또한, 서비스를 기획하기 전에 시장조사를 통해 비슷한 분야의
          </h3>
          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            타사 서비스를 분석하고, 고객의 니즈에 맞는 서비스 개발은 물론
          </h3>
          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            차별화된 컨셉 혹은 기능을 제안합니다.
          </h3>
          <h3 style="margin-bottom: 0px" class="ceo_ment_ment_h1">
            게임인스는 고객을 위한 서비스 혹은 자사 서비스 모두 사람들에게
          </h3>
          <h3 style="margin: 0px" class="ceo_ment_ment_h1">
            선한 가치를 제공할 수 있도록 노력합니다.
          </h3>

          <div class="ceo_ment_ment_div">
            <h3 class="ceo_ment_ment_h1">(주)게임인스 대표이사 김웅겸</h3>
            <img src="../../assets/story/sign.png" alt="" class="sign" />
          </div>
        </div>
        <div class="ceo_ment_img_div">
          <div class="ceo_ment_img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .ceo_ment_img {
    width: 348px;
    height: 344px;
  }
  .ceo_ment {
    justify-content: center;
  }
  .ceo_ment_ment_h {
    font-size: 20px;
  }
  .ceo_ment_ment_h1 {
    font-size: 12px;
  }
  .ceo_wrap_h {
    font-size: 20px;
  }
  .ceo_wrap_line {
    height: 5px;
  }
  .ceo_ment {
    border-bottom: none;
  }
  .ceo_ment_ment_div {
    height: 100px;
  }
  .ceo_ment {
    align-items: flex-start;
    flex-wrap: wrap-reverse;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_ment_img_div {
    width: 100%;
    border-bottom: 1px solid black;
  }
  .sign {
    width: 75.48px;
    height: 44.27px;
  }
  .ceo_ment_ment {
    width: 347px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1230px) {
  .ceo_ment_img {
    width: 348px;
    height: 344px;
  }
  .ceo_ment {
    justify-content: center;
  }
  .ceo_ment_ment_h {
    font-size: 36px;
  }

  .ceo_ment_ment_h1 {
    font-size: 16px;
  }
  .ceo_wrap_h {
    font-size: 46px;
  }
  .ceo_wrap_line {
    height: 5px;
  }
  .ceo_ment {
    border-bottom: none;
  }
  .ceo_ment_ment_div {
    height: 100px;
  }
  .ceo_ment {
    align-items: flex-start;
    flex-wrap: wrap-reverse;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_ment_img_div {
    width: 100%;
    border-bottom: 1px solid black;
  }
  .ceo_ment_ment {
    width: 347px;
  }
}
@media screen and (min-width: 1230px) and (max-width: 1600px) {
  .ceo_ment_img {
    width: 653px;
    height: 551px;
  }
  .ceo_ment {
    justify-content: space-between;
  }
  .ceo_ment_ment_h {
    font-size: 30px;
  }
  .ceo_ment_ment_h1 {
    font-size: 18px;
  }
  .ceo_wrap_h {
    font-size: 80px;
  }
  .ceo_wrap_line {
    height: 10px;
  }
  .ceo_ment {
    border-bottom: 1px solid black;
  }
  .ceo_ment_ment_div {
    height: 200px;
  }
  .ceo_ment {
    align-items: flex-end;
    flex-wrap: nowrap;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_ment_img_div {
    width: auto;
    border-bottom: none;
  }
  .ceo_ment_ment {
    width: 547px;
  }
}
@media screen and (min-width: 1600px) {
  .ceo_ment_img {
    width: 653px;
    height: 551px;
  }
  .ceo_ment {
    justify-content: space-between;
  }
  .ceo_ment_ment_h {
    font-size: 30px;
  }
  .ceo_ment_ment_h1 {
    font-size: 18px;
  }
  .ceo_wrap_h {
    font-size: 80px;
  }
  .ceo_wrap_line {
    height: 10px;
  }
  .ceo_ment {
    border-bottom: 1px solid black;
  }
  .ceo_ment_ment_div {
    height: 200px;
  }
  .ceo_ment {
    align-items: flex-end;
    flex-wrap: nowrap;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_ment_img_div {
    width: auto;
    border-bottom: none;
  }
  .ceo_ment_ment {
    width: 547px;
  }
}
* {
  box-sizing: border-box;
}

.ceo_con {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.ceo_wrap {
  width: 1300px;
}
.ceo_wrap_h {
  margin: 0px;
}
.ceo_wrap_line {
  width: 100%;
  background: black;
  margin-left: 15px;
}
.ceo_ment {
  width: 100%;
  height: 650px;
  display: flex;
  position: relative;
}
.ceo_ment_img {
  background-image: url("../../assets/story/ceo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.ceo_ment_ment_h {
  margin: 0px;
  font-size: 108.88px;
  position: absolute;
  top: 0px;
}

.ceo_ment_ment_div {
  width: 100%;
  display: flex;
  align-items: center;
}
.sign {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
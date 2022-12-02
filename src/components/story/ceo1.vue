<template>
  <div class="ceo1_wrap">
    <div class="container">
      <div class="container_item">
        <div class="container_item_line">
          <p class="container_item_line_p">CEO&nbsp;Message</p>
          <div class="container_item_line_line"></div>
        </div>
        <div class="container_item_flex">
          <div class="container_item_flex_item">
            <img
              src="../../assets/story/bceo.png"
              alt=""
              class="container_item_flex_item_img"
            />
          </div>
          <div class="container_item_flex_item1">
            <div class="container_item_flex_item1_p">
              <p style="font-size: 56.83px; margin-top: 0px">
                "SIMPLE IS THE BEST!"
              </p>
              <p style="margin: 0px">
                어떠한 복잡한 기능을 가진 서비스도 정말 필요한 요소인지 우선
                파악하고,
              </p>
              <p style="margin: 0px">
                UX/UI적으로 불필요한 요소를 제거하여 유저가 이용하기 쉽도록
              </p>
              <p style="margin: 0px">
                단순하면서도 직관적인 서비스를 기획/디자인 합니다.
              </p>
              <p style="margin-bottom: 0px">
                또한, 서비스를 기획하기 전에 시장조사를 통해 비슷한 분야의
              </p>
              <p style="margin: 0px">
                타사 서비스를 분석하고, 고객의 니즈에 맞는 서비스 개발은 물론
              </p>
              <p style="margin: 0px">차별화된 컨셉 혹은 기능을 제안합니다.</p>
              <p style="margin-bottom: 0px">
                게임인스는 고객을 위한 서비스 혹은 자사 서비스 모두 사람들에게
              </p>
              <p style="margin: 0px">
                선한 가치를 제공할 수 있도록 노력합니다.
              </p>
              <p>감사합니다.</p>
              <div class="container_item_flex_item1_p_sign">
                <p>(주)게임인스 대표이사 김웅겸</p>
                <img src="../../assets/story/sign.png" alt="" />
              </div>
            </div>
            <div class="container_item_flex_item1_p1">
              <p style="font-size: 36px">"SIMPLE IS THE BEST!"</p>
              <p>게임인스는 SIMPLE IS THE BEST를 지향합니다.</p>
              <p style="margin: 0px">
                어떠한 복잡한 기능을 가진 서비스도 정말 필요한 요소인지 우선
                파악하고, UX/UI적으로 불필요한 요소를
              </p>
              <p style="margin-top: 0px">
                제거하여 유저가 이용하기 쉽도록 단순하면서도 직관적인 서비스를
                기획/디자인 합니다.
              </p>
              <p style="margin: 0px">
                또한, 서비스를 기획하기 전에 시장조사를 통해 비슷한 분야의 타사
                서비스를 분석하고, 고객의 니즈에 맞는
              </p>
              <p style="margin: 0px">
                서비스 개발은 물론 차별화된 컨셉 혹은 기능을 제안합니다.
              </p>
              <p>
                게임인스는 고객을 위한 서비스 혹은 자사 서비스 모두 사람들에게
                선한 가치를 제공할 수 있도록 노력합니다.
              </p>

              <div
                class="container_item_flex_item1_p_sign"
                style="justify-content: center"
              >
                <p>(주)게임인스 대표이사 김웅겸</p>
                <img
                  src="../../assets/story/sign.png"
                  alt=""
                  style="width: 140px; height: 84px"
                />
              </div>
            </div>
            <div class="container_item_flex_item1_p2">
              <p style="font-size: 20px">"SIMPLE IS THE BEST!"</p>
              <p>게임인스는 SIMPLE IS THE BEST를 지향합니다.</p>
              <p style="margin: 0px">
                어떠한 복잡한 기능을 가진 서비스도 정말 필요한 요소인지
              </p>
              <p style="margin: 0px">우선 파악하고,</p>
              <p style="margin: 0px">
                UX/UI적으로 불필요한 요소를 제거하여 유저가 이용하기 쉽도록
              </p>
              <p style="margin: 0px">
                단순하면서도 직관적인 서비스를 기획/디자인 합니다.
              </p>
              <p style="margin-bottom: 0px">
                또한, 서비스를 기획하기 전에 시장조사를 통해 비슷한 분야의
              </p>
              <p style="margin: 0px">
                타사 서비스를 분석하고, 고객의 니즈에 맞는 서비스 개발은 물론
              </p>
              <p style="margin: 0px">차별화된 컨셉 혹은 기능을 제안합니다.</p>
              <p style="margin-bottom: 0px">
                게임인스는 고객을 위한 서비스 혹은 자사 서비스 모두 사람들에게
              </p>
              <p style="margin: 0px">
                선한 가치를 제공할 수 있도록 노력합니다.
              </p>

              <div
                class="container_item_flex_item1_p_sign"
                style="justify-content: center"
              >
                <p>(주)게임인스 대표이사 김웅겸</p>
                <img
                  src="../../assets/story/sign.png"
                  alt=""
                  style="width: 100px; height: 64px"
                />
              </div>
            </div>
          </div>
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
@media screen and (max-width: 353px) {
  .container_item_flex_item {
    width: 100%;
    height: 244px;
  }
  .container_item_flex_item1 {
    width: 100%;
    height: 350px;
  }
  .container_item_line_p {
    font-size: 20px;
  }
  .container_item_flex_item_img {
    width: 248px;
    height: 244px;
  }
  .container_item_line_line {
    height: 6px;
    margin-left: 10px;
  }
  .container_item_flex {
    border-bottom: none;
  }
  .container_item_flex_item {
    border-bottom: 1px solid black;
  }
  .container_item_flex_item1_p {
    display: none;
  }
  .container_item_flex_item1_p1 {
    display: none;
  }
  .container_item_flex_item1_p2 {
    display: block;
  }
  .container_item_flex_item1 {
    align-items: flex-start;
  }
  .container {
    height: 100%;
    align-items: unset;
  }
}
@media screen and (min-width: 353px) and (max-width: 788px) {
  .container_item_flex_item {
    width: 100%;
    height: 344px;
  }
  .container_item_flex_item1 {
    width: 100%;
    height: 350px;
  }
  .container_item_line_p {
    font-size: 26px;
  }
  .container_item_flex_item_img {
    width: 348px;
    height: 344px;
  }
  .container_item_line_line {
    height: 6px;
    margin-left: 10px;
  }
  .container_item_flex {
    border-bottom: none;
  }
  .container_item_flex_item {
    border-bottom: 1px solid black;
  }
  .container_item_flex_item1_p {
    display: none;
  }
  .container_item_flex_item1_p1 {
    display: none;
  }
  .container_item_flex_item1_p2 {
    display: block;
  }
  .container_item_flex_item1 {
    align-items: flex-start;
  }
  .container {
    height: 100%;
    align-items: unset;
  }
}

@media screen and (min-width: 788px) and (max-width: 1360px) {
  .container_item_flex_item {
    width: 100%;
    height: 517px;
  }
  .container_item_flex_item1 {
    width: 100%;
    height: 450px;
  }
  .container_item_line_p {
    font-size: 46px;
  }
  .container_item_flex_item_img {
    width: 680px;
    height: 517.3px;
  }
  .container_item_line_line {
    height: 6px;
    margin-left: 10px;
  }
  .container_item_flex_item1_p {
    display: none;
  }
  .container_item_flex_item1_p1 {
    display: block;
  }
  .container_item_flex_item1_p2 {
    display: none;
  }
  .container_item_flex {
    border-bottom: none;
  }
  .container_item_flex_item {
    border-bottom: 1px solid black;
  }
  .container_item_flex_item1 {
    align-items: flex-start;
  }
  .container {
    height: 100%;
    align-items: unset;
  }
}
@media screen and (min-width: 1360px) and (max-width: 1600px) {
  .container_item_flex_item {
    width: 660px;
    height: calc(815px - 116px);
  }
  .container_item_flex_item1 {
    width: 660px;
    height: calc(815px - 116px);
  }
  .container_item_line_p {
    font-size: 80px;
  }
  .container_item_flex_item_img {
    width: 653px;
    height: 601px;
  }
  .container_item_line_line {
    height: 10px;
    margin-left: 20px;
  }
  .container_item_flex_item1_p {
    display: block;
  }
  .container_item_flex_item1_p1 {
    display: none;
  }
  .container_item_flex_item1_p2 {
    display: none;
  }
  .container_item_flex {
    border-bottom: none;
  }
  .container_item_flex_item {
    border-bottom: 1px solid black;
  }
  .container_item_flex_item1 {
    align-items: flex-end;
  }
  .container {
    height: 100vh;
    align-items: center;
  }
}

@media screen and (min-width: 1600px) {
  .container_item_flex_item {
    width: 660px;
    height: calc(815px - 116px);
  }
  .container_item_flex_item1 {
    width: 660px;
    height: calc(815px - 116px);
  }
  .container_item_line_p {
    font-size: 80px;
  }
  .container_item_flex_item_img {
    width: 653px;
    height: 601px;
  }
  .container_item_line_line {
    height: 10px;
    margin-left: 20px;
  }
  .container_item_flex_item1_p {
    display: block;
  }
  .container_item_flex_item1_p1 {
    display: none;
  }
  .container_item_flex_item1_p2 {
    display: none;
  }
  .container_item_flex {
    border-bottom: 1px solid black;
  }
  .container_item_flex_item {
    border-bottom: none;
  }
  .container_item_flex_item1 {
    align-items: flex-end;
  }
  .container {
    height: 100vh;
    align-items: center;
  }
}
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
}
.container_item {
  width: 1320px;
  height: 815px;
}
.container_item_line {
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
}
.container_item_flex {
  width: 100%;
  height: calc(815px - 116px);
  display: flex;
  flex-wrap: wrap;
}
.container_item_flex_item {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.container_item_flex_item1 {
  display: flex;
  justify-content: center;
}
.container_item_line_line {
  width: 100%;
  background: black;
}
.container_item_line_p {
  margin: 0px;
}
.container_item_flex_item1_p_sign {
  display: flex;
  width: 100%;
  height: 100px;
  align-items: flex-end;
}
.container_item_flex_item1_p {
  font-size: 18px;
}
.container_item_flex_item1_p1 {
  text-align: center;
  font-size: 16px;
}
.container_item_flex_item1_p2 {
  font-size: 14px;
  text-align: center;
}
</style>
<template>
  <div class="ceo2_con">
    <div class="ceo2_item">
      <div class="ceo2_item_brand">
        <p style="margin: 0px">BRAND</p>
        <div class="ceo2_item_brand_line"></div>
      </div>
      <div class="ceo2_item_hbox">
        <p>
          게임인스의 CI는 IT 웹 개발 전문 기업으로서 전문성과 도전정신을
          표현하였습니다.
        </p>
        <p style="margin: 0px">
          곡선과 직선을 결합해 부드러움과 힘 있게 뻗어나가는 로고 타입를 통해
          IT기업으로 성장하는
        </p>
        <p style="margin: 0px">
          기업의 현재와 미래를 나타내었습니다. 또한 틀에 박혀있지 않고,
          자유로움과 힘 있는 이미지를 전달하는
        </p>
        <p style="margin-top: 0px">
          Blue 색상과 Black 색상을 통해 힘 있게 뻗어나갈 수 있는 기업임을
          표현하였습니다.
        </p>
      </div>
      <div class="ceo2_item_hbox1">
        <p>게임인스의 CI는 IT 웹 개발 전문 기업으로서 전문성과</p>
        <p>도전정신을 표현하였습니다.</p>

        <p style="margin-top: 20px">
          곡선과 직선을 결합해 부드러움과 힘 있게 뻗어나가는
        </p>
        <p>로고 타입를 통해 IT기업으로 성장하는 기업의</p>

        <p style="margin: 0px">현재와 미래를 나타내었습니다.</p>
        <p>또한 틀에 박혀있지 않고, 자유로움과 힘 있는 이미지를</p>
        <p>전달하는 Blue 색상과 Black 색상을 통해 힘 있게</p>

        <p style="margin-top: 0px">뻗어나갈 수 있는 기업임을 표현하였습니다.</p>
      </div>
      <div class="ceo2_item_flex">
        <div class="ceo2_logo">
          <img src="../../assets/story/logo.png" alt="" class="logo" />
        </div>
        <div class="ceo2_logo1">
          <img src="../../assets/story/logo1.png" alt="" class="logo1" />
        </div>
      </div>
      <div class="ceo2_item_color"></div>
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
* {
  box-sizing: border-box;
}
@media screen and (max-width: 600px) {
  .ceo2_item_flex {
    justify-content: center;
  }
  .logo {
    width: 163px;
    height: 62px;
  }
  .logo1 {
    width: 163px;
    height: 62px;
  }
  .logo {
    padding: 0px 50px;
  }
  .logo1 {
    padding: 0px 50px;
  }
  .ceo2_item_brand {
    font-size: 30px;
  }
  .ceo2_item_brand_line {
    height: 6px;
  }
  .ceo2_item_hbox {
    font-size: 14px;
    display: none;
  }
  .ceo2_item_hbox1 {
    display: block;
    font-size: 14px;
    text-align: center;
  }
}

@media screen and (min-width: 600px) and (max-width: 1090px) {
  .ceo2_item_flex {
    justify-content: center;
  }
  .logo {
    width: 300px;
    height: 130px;
  }
  .logo1 {
    width: 300px;
    height: 130px;
  }
  .logo {
    padding: 0px 50px;
  }
  .logo1 {
    padding: 0px 50px;
  }
  .ceo2_item_brand {
    font-size: 60px;
  }
  .ceo2_item_brand_line {
    height: 10px;
  }
  .ceo2_item_hbox {
    font-size: 2vw;
    text-align: center;
  }
  .ceo2_item_hbox1 {
    display: none;
  }
}
@media screen and (min-width: 1090px) and (max-width: 1600px) {
  .ceo2_item_flex {
    justify-content: space-between;
  }
  .logo {
    width: 400px;
    height: 183px;
  }
  .logo1 {
    width: 400px;
    height: 183px;
  }
  .ceo2_item_brand {
    font-size: 60px;
  }
  .logo {
    padding: 0px 50px;
  }
  .logo1 {
    padding: 0px 50px;
  }
  .ceo2_item_brand_line {
    height: 10px;
  }
  .ceo2_item_hbox {
    font-size: 18px;
  }
  .ceo2_item_hbox1 {
    display: none;
  }
}
@media screen and (min-width: 1600px) {
  .ceo2_item_flex {
    justify-content: space-between;
  }
  .logo {
    width: 400px;
    height: 183px;
  }
  .logo1 {
    width: 400px;
    height: 183px;
  }
  .ceo2_item_brand {
    font-size: 60px;
  }
  .logo {
    padding: 0px 50px;
  }
  .logo1 {
    padding: 0px 50px;
  }
  .ceo2_item_brand_line {
    height: 10px;
  }
  .ceo2_item_hbox {
    font-size: 18px;
  }
  .ceo2_item_hbox1 {
    display: none;
  }
}

.ceo2_con {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ceo2_item {
  width: 1320px;
  height: 900px;
}
.ceo2_item_brand {
  width: 100%;
  display: flex;
  align-items: center;
}
.ceo2_item_brand_line {
  width: 100%;
  background: black;
  margin-left: 20px;
}
.ceo2_item_hbox {
  width: 100%;
}
.ceo2_item_flex {
  width: 100%;
  height: 352px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-image: url("../../assets/story/back1.png");
  padding: 0px 140px;
  border-top: 1px solid #8f8f8f;
}
.ceo2_item_color {
  width: 100%;
  height: 221px;
  background: blue;
}
</style>
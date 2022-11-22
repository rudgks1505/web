<template>
  <div class="top_img">
    <h2 class="top_img_h">문의&의뢰</h2>
    <small class="top_img_h" style="top: 55%"> 게임인스에게 맡겨보세요. </small>
  </div>

  <div class="portfo_con">
    <div class="portfo_item">
      <div style="position: relative">
        <h1 class="portfo_title">웹사이트 제작 요청</h1>
        <div class="qest_line"></div>
      </div>

      <div class="portfo_item_div">
        <div class="portfo_item_div_1">
          <h2>제작형태</h2>
        </div>
        <button class="portfo_btn"><h2>신규제작</h2></button>
        <button class="portfo_btn"><h2>리뉴얼</h2></button>
      </div>

      <div class="portfo_item_div">
        <div class="portfo_item_div_1">
          <h2>제작타입</h2>
        </div>
        <button class="portfo_btn"><h2>반응형웹</h2></button>
        <button class="portfo_btn"><h2>PC웹</h2></button>
        <button class="portfo_btn"><h2>모바일웹</h2></button>
        <button class="portfo_btn"><h2>기타</h2></button>
      </div>

      <div class="portfo_item_div">
        <div class="portfo_item_div_1">
          <h2>예산 및 기간</h2>
        </div>
        <div class="selectbox">
          <select class="portfo_select">
            <option value="aaa">1000만원 이상</option>
            <option value="aaa">aaa</option>
            <option value="aaa">aaa</option>
          </select>
          <img
            src="../../assets/qest/Vector.png"
            alt=""
            style="width: 13px; height: 13px"
            class="selectbox_img"
          />
        </div>
        <div class="selectbox">
          <select class="portfo_select">
            <option value="aaa">2022년 08월 12일</option>
            <option value="aaa">aaa</option>
            <option value="aaa">aaa</option>
          </select>
          <img
            src="../../assets/qest/Vector.png"
            alt=""
            style="width: 13px; height: 13px"
            class="selectbox_img"
          />
        </div>
      </div>

      <div class="portfo_inputcon">
        <div class="portfo_item_div_1">
          <h2>기본정보</h2>
        </div>
        <div style="width: 80%">
          <input type="text" class="portfo_input" placeholder="회사명" />
          <div class="portfo_input_wrap">
            <input
              type="text"
              class="portfo_input1"
              placeholder="담당자명"
              style="margin-right: 10px"
            />
            <input type="text" class="portfo_input1" placeholder="이메일" />
          </div>
          <input type="text" class="portfo_input" placeholder="휴대전화" />
          <input type="file" class="portfo_input" />
          <input type="text" class="portfo_input" placeholder="요청사항" />
        </div>
      </div>

      <div class="checkdiv">
        <div>
          <input type="checkbox" name="" id="" />
          <h3 style="display: inline">
            개인정보 수집 및 이용약관에 동의합니다.(필수)
          </h3>
          <a href="">모두보기</a>
        </div>
      </div>

      <button class="confirm_btn">문의하기</button>
    </div>
  </div>

  <footer-1></footer-1>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import Footer1 from "../footer/footer1.vue";
export default {
  components: {
    Footer1,
  },

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

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      var body = document.querySelector("body");
      body.style.overflowY = "scroll";
      var portfo_btn = document.querySelectorAll(".portfo_btn");
      var portfo_btn_click_array = [0, 0, 0, 0, 0, 0];

      function dddd(params) {
        for (let index = 0; index < portfo_btn.length; index++) {
          portfo_btn[index].addEventListener("click", () => {
            if (portfo_btn_click_array[index] === 0) {
              portfo_btn_click_array[index] = 1;
              portfo_btn[index].style.color = "white";
              portfo_btn[index].style.background = "#3180f1";
            } else if (portfo_btn_click_array[index] === 1) {
              portfo_btn_click_array[index] = 0;
              portfo_btn[index].style.color = "black";
              portfo_btn[index].style.background = "white";
            }
          });
        }
      }

      dddd();
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
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .top_img_bottom_gra_menu {
    display: none;
  }
  .portfo_item {
    width: 300px;
  }
  .top_img_h {
    font-size: 20px;
  }
  .portfo_item h1 {
    font-size: 20px;
  }
  .portfo_item_div_1 h2 {
    font-size: 15px;
  }
  .portfo_select {
    width: 120px;
    font-size: 10px;
    margin-right: 5px;
  }
  .selectbox_img {
    right: 13px;
    top: 10px;
    display: none;
  }
  .portfo_btn {
    margin-right: 10px;
    width: 65px;
  }
  .portfo_btn h2 {
    font-size: 10px;
  }
  .portfo_item_div_1 {
    width: 300px;
  }
  .portfo_input {
    width: 100%;
    font-size: 15px;
    margin-bottom: 20px;
  }
  .portfo_input1 {
    width: 100%;
    font-size: 15px;
    margin-bottom: 20px;
  }
  input::placeholder {
    font-size: 15px;
  }
  .checkdiv {
    font-size: 15px;
    margin-top: 50px;
  }
  .portfo_title {
    margin: 70px 0px;
  }
  .portfo_select {
    padding-left: 10px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .top_img_bottom_gra_menu {
    display: none;
  }
  .portfo_item {
    width: 600px;
  }
  .top_img_h {
    font-size: 40px;
  }
  .portfo_item h1 {
    font-size: 40px;
  }
  .portfo_item_div_1 h2 {
    font-size: 20px;
  }
  .portfo_select {
    width: 180px;
    font-size: 15px;
    margin-right: 25px;
    appearance: none;
  }
  .selectbox_img {
    right: 50px;
    top: 23px;
    display: block;
  }
  .portfo_btn {
    margin-right: 10px;
    width: 85px;
  }
  .portfo_btn h2 {
    font-size: 15px;
  }
  .portfo_item_div_1 {
    width: 20%;
  }
  .portfo_input {
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
  }
  .portfo_input1 {
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
  }
  input::placeholder {
    font-size: 20px;
  }
  .checkdiv {
    font-size: 20px;
    margin-top: 160px;
  }
  .portfo_title {
    margin: 140px 0px;
  }
  .portfo_select {
    padding-left: 20px;
  }
}

@media screen and (min-width: 1025px) {
  .top_img_bottom_gra_menu {
    display: flex;
  }
  .portfo_item {
    width: 1200px;
  }
  .top_img_h {
    font-size: 40px;
  }
  .portfo_item h1 {
    font-size: 40px;
  }
  .portfo_item_div_1 h2 {
    font-size: 30px;
  }
  .portfo_select {
    width: 230px;
    font-size: 20px;
    margin-right: 45px;
    appearance: none;
  }
  .selectbox_img {
    right: 70px;
    top: 23px;
    display: block;
  }
  .portfo_btn {
    margin-right: 45px;
    width: 115px;
  }
  .portfo_btn h2 {
    font-size: 20px;
  }
  .portfo_item_div_1 {
    width: 20%;
  }
  .portfo_input {
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
  }
  .portfo_input1 {
    width: 49%;
    font-size: 20px;
    margin-bottom: 50px;
  }
  input::placeholder {
    font-size: 20px;
  }
  .checkdiv {
    font-size: 20px;
    margin-top: 160px;
  }
  .portfo_title {
    margin: 140px 0px;
  }
  .portfo_select {
    padding-left: 20px;
  }
}

p {
  font-weight: bold;
}

* {
  box-sizing: border-box;
}

.top_img {
  width: 100%;
  height: 419px;
  background: url("../../assets/qest/back.jpg");
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

.top_img_h {
  position: absolute;
  top: 40%;
  color: white;
  width: 100%;
  text-align: center;
  margin: 0;
}
.portfo_con {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 60%;
}

.portfo_item img {
  width: 380px;
  height: 280px;
}
.portfo_title {
  text-align: center;
}
.portfo_item_div {
  display: flex;
  width: 100%;
  min-height: 60px;
  margin-top: 40px;
  flex-wrap: wrap;
}
.portfo_item_div_1 {
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.portfo_item_div_1 h2 {
  margin: 0px;
}
.portfo_btn {
  height: 60px;
  border-radius: 30px;
  background: white;
  border: 1px solid #d2d2d2;
  cursor: pointer;
}
.portfo_btn h2 {
  margin: 0px;
}
.portfo_select {
  height: 100%;
  border-radius: 30px;
  font-weight: bold;
}
.portfo_input {
  border: none;
  border-bottom: 1px solid #d2d2d2;
  font-size: 20px;
  height: 40px;
}
.portfo_input1 {
  border: none;
  border-bottom: 1px solid #d2d2d2;
  font-size: 20px;
  height: 40px;
}
input::placeholder {
  font-weight: bold;
}
.checkdiv {
  display: flex;
  justify-content: center;
}
.confirm_btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 240px;
  height: 60px;
  border-radius: 30px;
  background: #3180f1;
  border: 1px solid #eeeeee;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 80px;
  cursor: pointer;
}
.qest_line {
  width: 30px;
  height: 3px;
  background: #3180f1;
  position: absolute;
  top: 0px;
  left: 48%;
}
.portfo_item_div_h {
  width: 70%;
  border-bottom: 1px solid #d2d2d2;
  color: #898989;
}
.selectbox {
  position: relative;
}
.selectbox_img {
  position: absolute;
}
.portfo_inputcon {
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
}
.portfo_input_wrap {
  width: 100%;
}
</style>
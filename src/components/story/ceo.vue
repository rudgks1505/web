<template>
  <div class="ceo_container">
    <div class="ceo_container_item">
      <div class="ceo_container_item_line">
        <p class="ceo_container_item_line_p">HISTORY</p>
        <div class="ceo_container_item_line_line"></div>
      </div>
      <div class="ceo_container_item_wrap">
        <div class="ceo_container_item_flexcenter">
          <div>
            <div class="dotimg">
              <div class="ceo_container_item_circle">
                <div class="ceo_container_item_circle_hdiv">
                  <p>2022년</p>
                  <p style="margin: 0px">주식회사 게임인스</p>
                  <p style="margin: 0px">본사 확장 이전</p>
                </div>
                <div class="ceo_container_item_circle_circle"></div>
              </div>

              <div class="ceo_container_item_circle1">
                <div class="ceo_container_item_circle_hdiv1">
                  <p>2020년</p>
                  <p style="margin: 0px">주식회사 게임인스 본사 이전</p>
                  <p style="margin: 0px">주식증좌 (총 11000주)</p>
                  <p style="margin: 0px">대표이사 변경 (김웅겸)</p>
                </div>
                <div class="ceo_container_item_circle_circle"></div>
              </div>
              <div class="ceo_container_item_circle2">
                <div class="ceo_container_item_circle_hdiv2">
                  <p>2021년</p>
                  <p style="margin: 0px">웹개발 분야 사업확장 직원</p>
                  <p style="margin: 0px">(직원수 증가)</p>
                </div>
                <div class="ceo_container_item_circle_circle"></div>
              </div>
              <div class="ceo_container_item_circle3">
                <div class="ceo_container_item_circle_hdiv3">
                  <p>2021년</p>
                  <p style="margin: 0px">웹개발 분야 사업확장 직원</p>
                  <p style="margin: 0px">(직원수 증가)</p>
                </div>
                <div class="ceo_container_item_circle_circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ceo_container_item_wrap1">
        <div class="ceo_container_item_flexcenter">
          <div>
            <div class="dotimg">
              <div class="mceo_container_item_circle">
                <div class="mceo_container_item_circle_hdiv">
                  <p>2022년</p>
                  <p style="margin: 0px">주식회사 게임인스</p>
                  <p style="margin: 0px">본사 확장 이전</p>
                </div>
                <div
                  class="mceo_container_item_circle_circle"
                  style="border: 3px solid #f9e609"
                ></div>
              </div>

              <div class="mceo_container_item_circle1">
                <div class="mceo_container_item_circle_hdiv1">
                  <p>2020년</p>
                  <p style="margin: 0px">주식회사 게임인스 본사 이전</p>
                  <p style="margin: 0px">주식증좌 (총 11000주)</p>
                  <p style="margin: 0px">대표이사 변경 (김웅겸)</p>
                </div>
                <div class="mceo_container_item_circle_circle"></div>
              </div>
              <div class="mceo_container_item_circle2">
                <div class="mceo_container_item_circle_hdiv2">
                  <p>2021년</p>
                  <p style="margin: 0px">웹개발 분야 사업확장 직원</p>
                  <p style="margin: 0px">(직원수 증가)</p>
                </div>
                <div class="mceo_container_item_circle_circle"></div>
              </div>
              <div class="mceo_container_item_circle3">
                <div class="mceo_container_item_circle_hdiv3">
                  <p>2021년</p>
                  <p style="margin: 0px">웹개발 분야 사업확장 직원</p>
                  <p style="margin: 0px">(직원수 증가)</p>
                </div>
                <div class="mceo_container_item_circle_circle"></div>
              </div>
              <div class="mceo_container_item_circle4">
                <div class="mceo_container_item_circle_hdiv3"></div>
                <div
                  class="mceo_container_item_circle_circle"
                  style="border: 3px solid #f9e609"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ceo_container_item_flexcenter1">
        <div class="ceo_container_item_flexcenter1_img"></div>
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
  .ceo_container_item_line_p {
    font-size: 20px;
  }
  .ceo_container_item_line_line {
    height: 10px;
    margin-left: 20px;
  }
  .ceo_container_item_wrap {
    display: none;
  }
  .ceo_container_item_wrap1 {
    display: block;
  }
  .ceo_container_item_flexcenter1_img {
    transform: translateX(-200px);
  }
  .dotimg {
    transform: translateX(-57px);
  }
}
@media screen and (min-width: 353px) and (max-width: 870px) {
  .ceo_container_item_line_p {
    font-size: 30px;
  }
  .ceo_container_item_line_line {
    height: 6px;
    margin-left: 20px;
  }
  .ceo_container_item_wrap {
    display: none;
  }
  .ceo_container_item_wrap1 {
    display: block;
  }
  .ceo_container_item_flexcenter1_img {
    transform: translateX(-200px);
  }
  .dotimg {
    transform: translateX(-57px);
  }
}

@media screen and (min-width: 870px) and (max-width: 1360px) {
  .ceo_container_item_line_p {
    font-size: 60px;
  }
  .ceo_container_item_line_line {
    height: 6px;
    margin-left: 20px;
  }
  .ceo_container_item_wrap {
    display: block;
  }
  .ceo_container_item_wrap1 {
    display: none;
  }
  .ceo_container_item_flexcenter1_img {
    transform: translateX(0px);
  }
  .dotimg {
    transform: translateX(0px);
  }
}
@media screen and (min-width: 1360px) and (max-width: 1600px) {
  .ceo_container_item_line_p {
    font-size: 60px;
  }
  .ceo_container_item_line_line {
    height: 10px;
    margin-left: 20px;
  }
  .ceo_container_item_wrap {
    display: block;
  }
  .ceo_container_item_wrap1 {
    display: none;
  }
  .ceo_container_item_flexcenter1_img {
    transform: translateX(0px);
  }
  .dotimg {
    transform: translateX(0px);
  }
}

@media screen and (min-width: 1600px) {
  .ceo_container_item_line_p {
    font-size: 60px;
  }
  .ceo_container_item_line_line {
    height: 10px;
    margin-left: 20px;
  }
  .ceo_container_item_wrap {
    display: block;
  }
  .ceo_container_item_wrap1 {
    display: none;
  }
  .ceo_container_item_flexcenter1_img {
    transform: translateX(0px);
  }
  .dotimg {
    transform: translateX(0px);
  }
}
* {
  box-sizing: border-box;
}
.ceo_container {
  width: 100%;
  justify-content: center;
  padding: 0px 20px;
  background: #242424;
  position: relative;
  display: flex;
}
.ceo_container_item {
  width: 1320px;
  height: 940px;
}
.ceo_container_item_line {
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
}
.ceo_container_item_line_p {
  margin: 0px;
  color: white;
}
.ceo_container_item_line_line {
  width: 100%;
  background: white;
}
.ceo_container_item_circle {
  width: 24.95px;
  height: 24.95px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 0px;
  right: -12px;
}

.ceo_container_item_flexcenter {
  width: 100%;
  height: calc(840px - 96px);
  display: flex;
  justify-content: center;
  position: absolute;
}
.ceo_container_item_flexcenter1 {
  width: 100%;
  height: calc(840px - 96px);
  display: flex;
  position: absolute;
  align-items: center;
  background: transparent;
  top: 100px;
  left: 0;
  justify-content: center;
}
.dotimg {
  background-image: url("../../assets/story/dot.png");
  width: 1px;
  height: 687px;
  background-size: contain;
  position: relative;
}
.ceo_container_item_wrap {
  width: 100%;
  height: calc(840px - 96px);
  position: relative;
}
.ceo_container_item_wrap1 {
  width: 100%;
  height: calc(840px - 96px);
  position: relative;
}
.ceo_container_item_flexcenter1_img {
  width: 288px;
  height: 490px;
  background-image: url("../../assets/story/bulb.png");
  position: relative;
}
.ceo_container_item_circle_hdiv {
  width: 250px;
  position: absolute;
  color: white;
  font-size: 20px;
  top: -25px;
  left: 50px;
}
.ceo_container_item_circle_hdiv1 {
  width: 250px;
  position: absolute;
  color: white;
  font-size: 20px;
  top: -28px;
  right: 50px;
  text-align: right;
}
.ceo_container_item_circle_hdiv2 {
  width: 250px;
  position: absolute;
  color: white;
  font-size: 20px;
  top: -25px;
  left: 50px;
}
.ceo_container_item_circle_hdiv3 {
  width: 250px;
  position: absolute;
  color: white;
  font-size: 20px;
  top: -25px;
  right: 50px;
  text-align: right;
}
.ceo_container_item_circle_circle {
  position: absolute;
  width: 30.95px;
  height: 30.95px;
  border-radius: 50%;
  border: 3px solid #0085ff;
  top: -8px;
  left: -8px;
}
.ceo_container_item_circle1 {
  width: 24.95px;
  height: 24.95px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 200px;
  right: 130px;
}
.ceo_container_item_circle2 {
  width: 24.95px;
  height: 24.95px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 530px;
  left: 130px;
}
.ceo_container_item_circle3 {
  width: 24.95px;
  height: 24.95px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 100%;
  left: -12px;
}

/* 모바일 */
.mceo_container_item_circle_hdiv {
  width: 170px;
  position: absolute;
  color: white;
  font-size: 14px;
  top: -25px;
  left: 50px;
}
.mceo_container_item_circle_hdiv1 {
  width: 170px;
  position: absolute;
  color: white;
  font-size: 14px;
  top: -28px;
  left: 50px;
}
.mceo_container_item_circle_hdiv2 {
  width: 170px;
  position: absolute;
  color: white;
  font-size: 14px;
  top: -25px;
  left: 50px;
}
.mceo_container_item_circle_hdiv3 {
  width: 170px;
  position: absolute;
  color: white;
  font-size: 14px;
  top: -25px;
  left: 50px;
}
.mceo_container_item_circle_circle {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid #0085ff;
  top: -8px;
  left: -8px;
}
.mceo_container_item_circle {
  width: 20px;
  height: 20px;
  background: #f9e609;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 0px;
  right: -10px;
}
.mceo_container_item_circle1 {
  width: 20px;
  height: 20px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 25%;
  right: -10px;
}
.mceo_container_item_circle2 {
  width: 20px;
  height: 20px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 50%;
  right: -10px;
}
.mceo_container_item_circle3 {
  width: 20px;
  height: 20px;
  background: #0085ff;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 75%;
  right: -10px;
}
.mceo_container_item_circle4 {
  width: 20px;
  height: 20px;
  background: #f9e609;
  border-radius: 50%;
  border: 5px solid #242424;
  position: absolute;
  top: 100%;
  right: -10px;
}
</style>

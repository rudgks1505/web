<template>
  <div class="portfo_con">
    <div class="portfo_con_gra"></div>
    <div class="portfo_item">
      <div class="portfo_item_img1"></div>
      <div class="portfo_item_img2"></div>
      <div class="portfo_item_img3"></div>
      <div class="portfo_item_img4">
        <div class="portfo_item_img4_btn">
          <h1>MORE +</h1>
        </div>
      </div>
    </div>
    <div class="portfo_con_back">
      <div>
        <div class="portfo_con_back_center"></div>
        <h1 class="portfo_con_h">VIEW ALL PORTFOLIO</h1>
      </div>
    </div>
  </div>

  <div class="portfo_pop">
    <h1 class="portfo_pop_h">PORTFOLIO</h1>
    <div>
      <div class="portfo_pop_line"></div>
      <h1 class="portfo_pop_web">WEB PORTFOLIO</h1>
      <div class="portfo_pop_item"></div>
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
      var portfo_item_img1 = document.querySelector(".portfo_item_img1");
      var portfo_item_img2 = document.querySelector(".portfo_item_img2");
      var portfo_item_img3 = document.querySelector(".portfo_item_img3");
      var portfo_item_img4 = document.querySelector(".portfo_item_img4");
      var portfo_pop = document.querySelector(".portfo_pop");
      var portfo_item_img4_btn = document.querySelector(
        ".portfo_item_img4_btn"
      );
      var portfo_con_h = document.querySelector(".portfo_con_h");

      //팝업
      portfo_item_img4_btn.addEventListener("click", () => {
        portfo_pop.style.display = "flex";
      });
      portfo_con_h.addEventListener("click", () => {
        portfo_pop.style.display = "flex";
      });

      //슬라이드
      window.addEventListener("wheel", (e) => {
        console.log(portfo_item_img1.getBoundingClientRect().x);
        if (portfo_item_img1.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
          }
        } else if (portfo_item_img2.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(0px)`;
            portfo_item_img2.style.transform = `translateX(0px)`;
            portfo_item_img3.style.transform = `translateX(0px)`;
            portfo_item_img4.style.transform = `translateX(0px)`;
          }
        } else if (portfo_item_img3.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img2.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img3.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img4.style.transform = `translateX(calc(-300% - 60px))`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
          }
        } else if (portfo_item_img4.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
          }
        }
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.portfo_con {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: url("../../assets/protfo/back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.portfo_con_gra {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.portfo_item {
  width: 100%;
  height: 319px;
  display: flex;
  position: absolute;
  left: 0px;
  overflow: hidden;
  z-index: 30;
}
.portfo_item_img1 {
  width: 567.11px;
  height: 100%;
  background: url("../../assets/protfo/slideimg1.png");
  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}
.portfo_item_img2 {
  width: 567.11px;
  height: 100%;
  background: url("../../assets/protfo/slideimg2.png");
  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}
.portfo_item_img3 {
  width: 567.11px;
  height: 100%;
  background: url("../../assets/protfo/slideimg1.png");
  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}
.portfo_item_img4 {
  width: 567.11px;
  height: 100%;
  background: url("../../assets/protfo/slideimg2.png");
  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
  position: relative;
}
.portfo_item_img4_btn {
  position: absolute;
  width: 160px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid white;
  right: -200px;
  top: 40%;
  cursor: pointer;
}
.portfo_item_img4_btn h1 {
  margin: 0px;
  color: white;
  line-height: 60px;
  text-align: center;
}
.portfo_con_h {
  color: white;
  font-size: 60px;
  margin: 0px;
  margin-left: 20px;
  cursor: pointer;
}
.portfo_con_back {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  z-index: 5;
}
.portfo_con_back_center {
  width: 100%;
  height: 400px;
}

/* //aaaaaaaaaaaaaaaaaaaa */
</style>
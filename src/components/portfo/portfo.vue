<template>
  <div class="top_img">
    <h2 class="top_img_h">P O R T F O L I O</h2>
    <small class="top_img_h" style="top: 55%">
      게임인스의 현재 진행한 작업물 입니다.
    </small>
  </div>

  <div class="portfo_con">
    <div class="portfo_item">
      <div class="portfo_box">
        <img src="../../assets/port/pot1.jpg" alt="" class="portfo_con_img" />
        <h1 class="portfo_box_h">TIKI TAKA</h1>
      </div>
      <div class="portfo_box">
        <img
          :src="`${state.pot2}`"
          alt=""
          class="portfo_con_img"
          @mouseenter="pot4f()"
          @mouseleave="pot4f_out()"
        />
        <h1 class="portfo_box_h">피파대낙.com</h1>
      </div>
      <div class="portfo_box">
        <img src="../../assets/port/pot3.png" alt="" class="portfo_con_img" />
        <h1 class="portfo_box_h">피파대리.com</h1>
      </div>
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
      pot2: require("../../assets/port/pot2.png"),
      count: 0,
      imgnum: 2,
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
    function pot4f() {
      state.pot2 = require("../../assets/port/pot4.png");
    }
    function pot4f_out() {
      state.pot2 = require("../../assets/port/pot2.png");
    }

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
      var portfo_con_img = document.querySelectorAll(".portfo_con_img");

      var body = document.querySelector("body");
      body.style.overflowY = "scroll";

      portfo_con_img[0].addEventListener("click", () => {
        window.open(
          "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
          "_blank"
        );
      });
      portfo_con_img[1].addEventListener("click", () => {
        window.open("http://xn--b20bo9bg52c82b.com/?openchat=1", "_blank");
      });
      portfo_con_img[2].addEventListener("click", () => {
        window.open("http://xn--vk1bo0k01x85b.com/", "_blank");
      });

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
      pot4f,
      pot4f_out,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .top_img_bottom_gra_menu {
    display: none;
  }
  .portfo_item img {
    width: 250px;
    height: 150px;
  }
  .top_img_h {
    font-size: 20px;
  }
  .portfo_box_h {
    font-size: 20px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .top_img_bottom_gra_menu {
    display: none;
  }
  .portfo_box {
    width: auto;
  }
  .portfo_item img {
    width: 380px;
    height: 280px;
  }
  .top_img_h {
    font-size: 40px;
  }
  .portfo_box_h {
    font-size: 24px;
  }
}

@media screen and (min-width: 1025px) {
  .top_img_bottom_gra_menu {
    display: flex;
  }
  .portfo_box {
    width: auto;
  }
  .portfo_item img {
    width: 380px;
    height: 280px;
  }
  .top_img_h {
    font-size: 40px;
  }
  .portfo_box_h {
    font-size: 24px;
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
  background: url("../../assets/port/port_back.jpg");
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
  min-height: 934px;
  margin-top: 140px;
  padding-bottom: 140px;
}
.portfo_item {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.portfo_item img {
  cursor: pointer;
}
.portfo_item h1 {
  margin: 0px;
}
.portfo_con_img {
  cursor: pointer;
}
</style>
<template>
  <div class="nav_con">
    <div class="nav_con_gra"></div>
    <div class="nav_con_div">
      <img
        src="../../assets/nav/logo.png"
        alt="logo"
        class="nav_con_img"
        @click="home_move()"
      />
      <img
        src="../../assets/nav/mlogo.png"
        alt="mlogo"
        class="nav_con_img_m"
        @click="home_move()"
      />
      <img
        src="../../assets/nav/tlogo.png"
        alt="tlogo"
        class="nav_con_img_t"
        @click="home_move()"
      />
    </div>

    <div class="nav_con_center">
      <div class="nav_con_div">
        <h1 class="nav_con_div_h" style="width: 200px; text-align: center">
          회사소개
        </h1>
        <div class="nav_con_line"></div>
      </div>
      <div class="nav_con_div">
        <h1 class="nav_con_div_h" @click="portfo_move()">포트폴리오</h1>
        <div class="nav_con_line"></div>
      </div>
      <div class="nav_con_div">
        <h1 class="nav_con_div_h" @click="qest_move()">문의&의뢰</h1>
        <div class="nav_con_line"></div>
      </div>
      <div class="nav_con_div">
        <h1 class="nav_con_div_h" @click="hire_move()">인재채용</h1>
        <div class="nav_con_line"></div>
      </div>
    </div>

    <div class="nav_con_div">
      <img src="../../assets/nav/menu_btn.png" alt="" class="nav_con_btnimg" />
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

    //링크이동
    function intro_move(i) {
      location.href = `/intro${i}`;
    }
    function home_move(params) {
      location.href = "/";
    }
    function portfo_move(params) {
      location.href = "/portfo";
    }
    function qest_move(params) {
      location.href = "/qest";
    }
    function hire_move(params) {
      location.href = "/hire";
    }
    onMounted(() => {
      const nav_con_div_h = document.querySelectorAll(".nav_con_div_h");
      const nav_con_line = document.querySelectorAll(".nav_con_line");
      const nav_con_div_dropmenu_h = document.querySelectorAll(
        ".nav_con_div_dropmenu_h"
      );
      const nav_con_center = document.querySelector(".nav_con_center");
      const nav_con_gra = document.querySelector(".nav_con_gra");
      const nav_con_div_dropmenu = document.querySelector(
        ".nav_con_div_dropmenu"
      );
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      //배경변화
      window.addEventListener("wheel", () => {
        console.log(scrollY);
      });

      // 반응형
      window.addEventListener("resize", () => {
        respon_f();
      });
      respon_f();
      function respon_f(params) {
        if (max_600px.matches) {
          nav_con_center.style.display = "none";
        } else if (min_600px_max_1000px.matches) {
          nav_con_center.style.display = "none";
        } else if (min_1000px.matches) {
          nav_con_center.style.display = "flex";
        }
      }
      //네브바효과
      for (let index = 0; index < nav_con_div_h.length; index++) {
        nav_con_div_h[index].addEventListener("mouseenter", () => {
          nav_con_line[index].style.width = "60px";
        });
        nav_con_div_h[0].addEventListener("mouseenter", () => {
          nav_con_div_dropmenu.style.opacity = "1";
          nav_con_div_dropmenu.style.visibility = "visible";
        });
      }
      for (let index = 0; index < nav_con_div_h.length; index++) {
        nav_con_div_dropmenu.addEventListener("mouseleave", () => {
          nav_con_line[index].style.width = "0px";
        });
      }

      nav_con_div_dropmenu.addEventListener("mouseleave", () => {
        nav_con_div_dropmenu.style.opacity = "0";
        nav_con_div_dropmenu.style.visibility = "hidden";
      });

      for (let index = 0; index < nav_con_div_dropmenu_h.length; index++) {
        nav_con_div_dropmenu_h[index].addEventListener("mouseenter", () => {
          nav_con_div_dropmenu_h[index].style.color = "white";
        });
        nav_con_div_dropmenu_h[index].addEventListener("mouseleave", () => {
          nav_con_div_dropmenu_h[index].style.color = "gray";
        });
      }

      for (let index = 1; index < nav_con_div_h.length; index++) {
        nav_con_div_h[index].addEventListener("mouseleave", () => {
          nav_con_line[index].style.width = "0px";
        });
      }
    });

    return {
      state,
      intro_move,
      home_move,
      portfo_move,
      qest_move,
      hire_move,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .nav_con_img {
    display: none;
  }
  .nav_con_img_m {
    display: block;
  }
  .nav_con_img_t {
    display: none;
  }
  .nav_con_div {
    width: 100px;
  }
  .nav_con {
    height: 50px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .nav_con_img {
    display: none;
  }
  .nav_con_img_m {
    display: none;
  }
  .nav_con_img_t {
    display: block;
  }
  .nav_con_div {
    width: 200px;
  }
  .nav_con {
    height: 80px;
  }
}

@media screen and (min-width: 1025px) {
  .nav_con_img {
    display: block;
  }
  .nav_con_img_m {
    display: none;
  }
  .nav_con_img_t {
    display: none;
  }
  .nav_con_div {
    width: 200px;
  }
  .nav_con {
    height: 88px;
  }
}

.nav_con {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 200;
}
.nav_con_img {
  width: 150px;
  height: 38px;
  cursor: pointer;
}
.nav_con_img_m {
  width: 80px;
  height: 19.56px;
  cursor: pointer;
}
.nav_con_img_t {
  width: 100px;
  height: 25.39px;
  cursor: pointer;
}
.nav_con_div {
  display: flex;
  justify-content: center;
  position: relative;
}
.nav_con_div_h {
  font-size: 16px;
  transition: all 0.5s;
  cursor: pointer;
  color: white;
}
.nav_con_btnimg {
  width: 28px;
  height: 12px;
}
.nav_con_line {
  width: 0px;
  height: 2px;
  background: white;
  position: absolute;
  top: 35px;
  transition: all 0.5s;
}
.nav_con_div_dropmenu {
  position: absolute;
  top: 40px;
  left: 65px;

  display: flex;
  width: 300%;
  justify-content: space-between;
  color: gray;
  opacity: 0;
  transition: all 0.5s;
}
.nav_con_div_dropmenu_h {
  transition: all 0.5s;
  cursor: pointer;
  font-size: 16px;
}
.nav_con_center {
  display: flex;
}
.nav_con_gra {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
</style>
<template>
  <!-- 네브바 -->
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
        <div class="nav_con_div_dropmenu">
          <h1 class="nav_con_div_dropmenu_h" @click="intro_move(1)">
            CEO인사말
          </h1>
          <h1 class="nav_con_div_dropmenu_h" @click="intro_move(2)">연혁</h1>
          <h1 class="nav_con_div_dropmenu_h" @click="intro_move(3)">조직도</h1>
          <h1 class="nav_con_div_dropmenu_h" @click="intro_move(4)">CI소개</h1>
          <h1 class="nav_con_div_dropmenu_h" @click="intro_move(5)">
            찾아오시는길
          </h1>
        </div>
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

  <!-- 메뉴 -->
  <div class="menu_back">
    <div class="menu_con">
      <div class="menu_item">
        <div style="color: white">
          <img src="../../assets/menu/blogo.png" alt="" />
          <h3 style="margin-bottom: 0px">Address</h3>
          <h3 style="margin-top: 0px">부산광역시 사상구 백양대로684 5층</h3>
          <h3 style="margin-bottom: 0px">E-mail</h3>
          <h3 style="margin-top: 0px">gameinscokr@naver.com</h3>
        </div>
      </div>
      <div class="menu_item1">
        <div style="color: white">
          <h1 class="menu_item1_h" style="margin-bottom: 0px">
            기업소개 <span style="color: #3180f1" class="plus">+</span>
            <div class="menu_item1_line"></div>
          </h1>
          <div class="menu_item1_menu">
            <h3 class="menu_item1_menu_h">CEO인사말</h3>
            <h3 class="menu_item1_menu_h">연혁</h3>
            <h3 class="menu_item1_menu_h">조직도</h3>
            <h3 style="color: #3180f1" class="menu_item1_menu_h">CI소개</h3>
            <h3 class="menu_item1_menu_h">찾아오시는길</h3>
          </div>
          <h1 class="menu_item1_h">PORTFOLIO</h1>
          <h1 class="menu_item1_h">문의&의뢰</h1>
          <h1 class="menu_item1_h">인재채용</h1>
        </div>
      </div>
    </div>
  </div>

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
        <div class="portfo_item_line"></div>
        <div class="portfo_con_back_center"></div>
        <img
          src="../../assets/protfo/Vector.png"
          alt=""
          class="portfo_vector"
        />
        <h1 class="portfo_con_h">VIEW ALL PORTFOLIO</h1>
      </div>
    </div>
  </div>

  <div class="pop_wrap">
    <div class="portfo_pop">
      <h1 class="portfo_pop_h">PORTFOLIO</h1>
      <div style="position: relative; z-index: 2">
        <div class="portfo_pop_line"></div>
        <h1 class="portfo_pop_web">
          <span style="color: black">WEB</span> PORTFOLIO
        </h1>
        <div class="portfo_pop_item"></div>
        <div class="portfo_pop_item1">
          <div class="portfo_pop_item1_img"></div>
          <div class="portfo_pop_item1_img1"></div>
        </div>
      </div>
    </div>
    <footer-1></footer-1>
  </div>
  <div class="portfo_footer"><footer-1></footer-1></div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import footer1 from "../footer/footer1.vue";

export default {
  components: {
    footer1,
  },

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
      var portfo_item_img1 = document.querySelector(".portfo_item_img1");
      var portfo_item_img2 = document.querySelector(".portfo_item_img2");
      var portfo_item_img3 = document.querySelector(".portfo_item_img3");
      var portfo_item_img4 = document.querySelector(".portfo_item_img4");
      var pop_wrap = document.querySelector(".pop_wrap");
      var portfo_item_line = document.querySelector(".portfo_item_line");
      var portfo_item_img4_btn = document.querySelector(
        ".portfo_item_img4_btn"
      );
      var portfo_con_h = document.querySelector(".portfo_con_h");
      var portfo_xbtn = document.querySelector(".portfo_xbtn");
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
      var portfo_footer = document.querySelector(".portfo_footer");
      var portfo_vector = document.querySelector(".portfo_vector");

      // 네브바
      var nav_con_div_h = document.querySelectorAll(".nav_con_div_h");
      var nav_con_line = document.querySelectorAll(".nav_con_line");
      var nav_con_div_dropmenu_h = document.querySelectorAll(
        ".nav_con_div_dropmenu_h"
      );
      var nav_con_center = document.querySelector(".nav_con_center");
      var nav_con_gra = document.querySelector(".nav_con_gra");
      var nav_con_div_dropmenu = document.querySelector(
        ".nav_con_div_dropmenu"
      );

      var nav_con_btnimg = document.querySelector(".nav_con_btnimg");
      var menu_back = document.querySelector(".menu_back");
      var menu_item1_menu = document.querySelector(".menu_item1_menu");
      var menu_item1_h = document.querySelectorAll(".menu_item1_h");
      var plus = document.querySelector(".plus");
      var menu_item1_line = document.querySelector(".menu_item1_line");

      //메뉴
      var menu_mun = 0;
      nav_con_btnimg.addEventListener("click", () => {
        menu_back.style.display = "flex";
      });
      menu_item1_h[0].addEventListener("click", () => {
        if (menu_mun === 0) {
          menu_item1_menu.style.height = "200px";
          plus.style.display = "none";
          menu_mun = 1;
        } else if (menu_mun === 1) {
          menu_item1_menu.style.height = "0px";
          plus.style.display = "inline";
          menu_mun = 0;
        }
      });

      //vector
      vector_f();
      function vector_f(params) {
        portfo_vector.style.transform = "translateX(20px)";
        setTimeout(() => {
          portfo_vector.style.transform = "translateX(0px)";
          setTimeout(() => {
            vector_f();
          }, 1000);
        }, 1000);
      }

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

      //팝업
      portfo_item_img4_btn.addEventListener("click", () => {
        pop_wrap.style.display = "block";
        portfo_item_line.style.display = "none";
      });
      portfo_con_h.addEventListener("click", () => {
        pop_wrap.style.display = "block";
        portfo_item_line.style.display = "none";
      });

      //슬라이드
      window.addEventListener("wheel", (e) => {
        if (portfo_item_img1.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px * 2))`;
          }
        } else if (portfo_item_img2.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px))`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(0px)`;
            portfo_item_img2.style.transform = `translateX(0px)`;
            portfo_item_img3.style.transform = `translateX(0px)`;
            portfo_item_img4.style.transform = `translateX(0px)`;
            portfo_item_line.style.transform = `translateX(calc(0px))`;
          }
        } else if (portfo_item_img3.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img2.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img3.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img4.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_line.style.transform = `translateX(0px)`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px * 2))`;
          }
        } else if (portfo_item_img4.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px ))`;
            portfo_footer.style.display = "none";
          } else if (e.wheelDeltaY < 0) {
            portfo_footer.style.display = "block";
          }
        }
      });
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
  line-height: 50px;
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
  height: 350px;
  padding: 1px;
}
.portfo_item_line {
  width: 400px;
  height: 6px;
  background: #3180f1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  transition: all 1s;
}
/* //pop */
.pop_wrap {
  width: 100%;
  background: white;
  position: absolute;
  top: 0px;
  z-index: 50;
  display: none;
}
.portfo_pop {
  width: 100%;
  display: flex;
  justify-content: center;
}

.portfo_pop_h {
  position: fixed;
  top: 0px;
  right: 0px;
  font-size: 222.61px;
  color: #f5f5f5;
  z-index: 1;
  margin: 0px;
  margin-top: 100px;
}
.portfo_pop_item {
  width: 1200px;
  height: 765px;
  background-image: url("../../assets/protfo/popimg1.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.portfo_pop_web {
  font-size: 60px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin: 0px;
  line-height: 60px;
  margin-bottom: 20px;
}
.portfo_pop_line {
  width: 50px;
  height: 5px;
  background: #3180f1;
  margin: 0px;
  margin-top: 260px;
}
.portfo_pop_item1 {
  display: flex;
  width: 100%;
  height: 340.88px;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 60px;
}
.portfo_pop_item1_img {
  width: 606px;
  height: 100%;
  position: relative;
  background-image: url("../../assets/protfo/slideimg1.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.portfo_pop_item1_img1 {
  width: 574px;
  height: 100%;
  position: relative;
  background-image: url("../../assets/protfo/slideimg2.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.portfo_xbtn {
  position: absolute;
  top: 100px;
  right: 0px;
}
/* 네브바 */
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
  cursor: pointer;
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
  transition: all 1s;
}
.portfo_footer {
  display: none;
  transition: all 1s;
}
.portfo_vector {
  margin-left: 20px;
  transition: all 1s;
}

/* 메뉴 */
.menu_back {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: black;
  top: 0;
  z-index: 1000;
  display: none;
  justify-content: center;
  align-items: center;
}
.menu_con {
  width: 900px;
  height: 600px;
  display: flex;
}
.menu_item {
  width: 50%;
  height: 100%;
  border-right: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu_item1 {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu_item1_h {
  font-size: 50px;
  position: relative;
}
.menu_item1_line {
  width: 25px;
  height: 5px;
  background: #3180f1;
  position: absolute;
  right: 40px;
  top: 37px;
}
.menu_item1_menu {
  height: 0px;
  overflow: hidden;
  transition: all 1s;
}
.menu_item1_menu_h {
  margin: 0px;
  font-size: 28px;
}
</style>
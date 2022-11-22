<template>
  <div class="top_img">
    <h2 class="top_img_h">채용정보</h2>
    <small class="top_img_h" style="top: 55%">
      사람과 감동으로 게임인스를<br />
      키워갈 인재를 기다립니다.
    </small>
  </div>

  <div class="portfo_con">
    <div class="portfo_item">
      <div style="position: relative">
        <h1 style="margin: 140px 0px">
          게임인스 채용 절차<br /><small style="font-size: 20px"
            >(채용절차에 대해 설명)</small
          >
        </h1>
        <div class="qest_line"></div>
      </div>

      <div class="hire_con">
        <div class="hire_con_div">
          <img src="../../assets/hire/numb1.jpg" alt="" />
        </div>
        <div class="hire_con_div">
          <img src="../../assets/hire/numb2.jpg" alt="" />
        </div>
        <div class="hire_con_div">
          <img src="../../assets/hire/numb3.jpg" alt="" />
        </div>
        <div class="hire_con_div">
          <img src="../../assets/hire/numb4.jpg" alt="" />
        </div>
      </div>

      <h2
        style="
          margin: 0px;
          padding-left: 15px;
          font-size: 22px;
          margin-top: 50px;
        "
      >
        유의사항
      </h2>
      <ul style="margin-top: 5px">
        <li><p>최종 심사를 거친 결과를 합격자에게 개별 통보합니다.</p></li>
        <li>
          <p>
            이력서에 기재된 학력 및 경력사항 등 기재 사항이 허위임이 판명될
            경우, 합격이 취소될 수 있습니다.
          </p>
        </li>
      </ul>

      <div class="hire_logo_con">
        <div class="hire_logo_con_div">
          <img src="../../assets/hire/logo1.jpg" alt="" />
          <div class="hire_logo_con_button">
            <p>잡코리아 지원하기 ></p>
          </div>
        </div>
        <div class="hire_logo_con_div">
          <img src="../../assets/hire/logo2.jpg" alt="" />
          <div class="hire_logo_con_button"><p>사람인 지원하기 ></p></div>
        </div>
        <div class="hire_logo_con_div">
          <img src="../../assets/hire/logo3.jpg" alt="" />
          <div class="hire_logo_con_button"><p>워크넷 지원하기 ></p></div>
        </div>
      </div>

      <h1 style="font-size: 26px; margin-bottom: 100px">
        채용관련 문의 : 경영지원팀 010 - 9893 - 1002
      </h1>
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
    function jobkorea(params) {
      router.replace("https://www.jobkorea.co.kr/");
    }

    onMounted(() => {
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");

      var body = document.querySelector("body");
      var hire_logo_con_button = document.querySelectorAll(
        ".hire_logo_con_button"
      );
      body.style.overflowY = "scroll";

      hire_logo_con_button[0].addEventListener("click", () => {
        window.open("https://www.jobkorea.co.kr/", "_blank");
      });
      hire_logo_con_button[1].addEventListener("click", () => {
        window.open("https://www.saramin.co.kr/zf_user/", "_blank");
      });
      hire_logo_con_button[2].addEventListener("click", () => {
        window.open("https://www.work.go.kr/seekWantedMain.do", "_blank");
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
      jobkorea,
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
    font-size: 30px;
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
  background: url("../../assets/hire/hire_back.jpg");
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
.portfo_item h1 {
  margin: 0px;
  text-align: center;
}

.qest_line {
  width: 30px;
  height: 3px;
  background: #3180f1;
  position: absolute;
  top: 0px;
  left: 48%;
}
.hire_con {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hire_con img {
  width: 260px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.hire_logo_con {
  display: flex;
  align-items: center;
  width: 100%;
  height: 570px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hire_con_div {
  width: 300px;
}
.hire_logo_con_div {
  width: 300px;
}
.hire_logo_con img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.hire_logo_con_button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 40px;
  border-radius: 30px;
  background: white;
  border: 1px solid #d2d2d2;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
}
.hire_logo_con_button p {
  margin: 0px;
  text-align: center;
  line-height: 40px;
  color: #313131;
  font-size: 16px;
}
</style>
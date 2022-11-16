<template>
  <div class="port2_con">
    <div class="port2_item">
      <div class="port2_item_item">
        <h3 style="margin: 0px">
          다양한 플랫폼과 새로운 기술로 빠르게 변화하는 환경에 능동적으로
          대응하며,
        </h3>
        <h3>
          커뮤니케이션을 통한 유지보수로 클라이언트의 만족감을 이어나갑니다.
        </h3>
      </div>
    </div>
    <div class="port2_item1">
      <div class="port2_item1_l">
        <img src="../../assets/port2/img1.png" alt="" class="port2_item1_img" />
        <h1>웹/앱 서비스 개발</h1>
        <h3>
          웹/앱 기반 서비스로 쇼핑몰, 플랫폼, 커뮤니티 등 모든 형태의 서비스
          개발
        </h3>
      </div>
      <div class="port2_item1_r">
        <img src="../../assets/port2/img2.png" alt="" class="port2_item1_img" />
        <h1>UI/UX 디자인</h1>
        <h3>브랜드 가치를 높일 수 있는 모던 UI/UX개발</h3>
      </div>
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
      var port2_item_item = document.querySelector(".port2_item_item");
      var port2_item1_l = document.querySelector(".port2_item1_l");
      var port2_item1_r = document.querySelector(".port2_item1_r");

      window.addEventListener("scroll", () => {
        if (scrollY >= window.innerHeight * 1.5) {
          port2_item_item.style.transform = "translateY(0)";
          port2_item_item.style.opacity = "1";

          setTimeout(() => {
            port2_item1_l.style.transform = "translateY(0)";
            port2_item1_l.style.opacity = "1";
            port2_item1_r.style.transform = "translateY(0)";
            port2_item1_r.style.opacity = "1";
          }, 500);
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
.port2_con {
  width: 100%;
  margin-bottom: 300px;
}
.port2_item {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
}
.port2_item1 {
  width: 100%;
  display: flex;
  color: black;
}
.port2_item1_img {
  width: 360px;
  height: 360px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.port2_item1_h {
  text-align: center;
}
.port2_item_item {
  transition: all 3s;
  transform: translateY(150px);
  color: black;
  opacity: 0;
}
.port2_item1_l {
  width: 50%;
  text-align: center;
  transition: all 4s;
  opacity: 0;
  transform: translateY(-50px);
}
.port2_item1_r {
  width: 50%;
  text-align: center;
  transition: all 4s;
  opacity: 0;
  transform: translateY(-50px);
}
</style>
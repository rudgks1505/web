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

    onMounted(() => {});

    return {
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .port2_item1_img {
    display: none;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .port2_item1_img {
    display: none;
  }
}

@media screen and (min-width: 1025px) {
  .port2_item1_img {
    display: block;
  }
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
  display: flex;
  flex-wrap: wrap;
}
.port2_item1_img {
  width: 360px;
  height: 360px;
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
  opacity: 1;
}
.port2_item1_l {
  width: 50%;
  text-align: center;
  transition: all 4s;
  opacity: 1;
  transform: translateY(-50px);
}
.port2_item1_r {
  width: 50%;
  text-align: center;
  transition: all 4s;
  opacity: 1;
  transform: translateY(-50px);
}
</style>
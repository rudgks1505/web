<template>
  <div class="port3_con">
    <div class="port3_item">
      <h3 style="margin: 0px">
        게임인스는 고객을 위한 웹/앱 맞춤 설계, 유지보수 서비스를 제공합니다.
        또한, 다양한 분야에서 사람들의 일상을
      </h3>
      <h3>
        더 편리하도록 돕는 자사 서비스들을 계속해서 늘려갈 계획입니다. 2~30대의
        젊은 팀원들로 구성된 게임인스는 웹/앱 서비스 시장의
      </h3>
      <h3>
        선발주자는 아닐지라도 게임인스만의 선한 가치를 추구하는 지향점의
        선두주자가 되기위해 한걸음씩 나아갈 것 입니다.
      </h3>
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

    onMounted(() => {
      var port3_item = document.querySelector(".port3_item");

      window.addEventListener("scroll", () => {
        if (scrollY >= window.innerHeight * 0.9) {
          port3_item.style.transform = "translateY(0)";
          port3_item.style.opacity = "1";
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
.port3_con {
  text-align: center;
  height: 500px;
  display: flex;
  align-items: center;
}
.port3_item {
  transition: all 2s;
  transform: translateY(150px);
  color: white;
  opacity: 0;
}
</style>
<template>
  <div class="port1_con">
    <div class="port1_item">
      <h1 style="margin: 0px 0px">게임인스는 트렌디한 혁신을 추구하는</h1>
      <h1 style="margin-top: 0px; margin-bottom: 60px">
        소프트웨어 웹/앱 개발 기업입니다.
      </h1>
      <h3>
        4차산업혁명을 시작으로 급변하는 웹/앱 시장에 발맞춰 고객을 위한 통합적인
        서비스를 제공합니다.
      </h3>
      <h3>
        게임인스는 미디어에 대한 새로운 해석과 복잡한 활용이 빠르게 진행되는
        지금의 시대에 고객의 니즈와 더불어
      </h3>
      <h3>
        유저입장에 서서 더 나은 지향점을 찾을 수 있는 서비스를 개발하기 위해
        노력합니다.
      </h3>
      <h3>
        20대의 트렌디함과 30대의 노련함이 합쳐친 팀원들의 웹/앱 서비스를 제공
        받아 보세요.
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
      var port1_item = document.querySelector(".port1_item");

      window.addEventListener("scroll", () => {
        if (scrollY >= window.innerHeight * 0.4) {
          port1_item.style.transform = "translateY(0)";
          port1_item.style.opacity = "1";
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
.port1_con {
  text-align: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.port1_item {
  transition: all 2s;
  transform: translateY(150px);
  color: white;
  opacity: 0;
}
</style>
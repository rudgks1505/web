<template>
  <div>
    <div class="port_div">
      <h1 style="font-size: 70px">VISION</h1>
      <div class="port_line"></div>
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
      var port_line = document.querySelector(".port_line");
      var port_div = document.querySelector(".port_div");

      window.addEventListener("scroll", () => {
        if (scrollY >= window.innerHeight * 0.9) {
          port_div.style.width = "100%";
        } else if (scrollY < window.innerHeight * 0.9) {
          port_div.style.width = "0%";
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
.port_div {
  display: flex;
  width: 0;
  color: white;
  align-items: center;
  overflow: hidden;
  transition: all 3s;
}
.port_div_h1 {
  font-size: 60px;
}
.port_line {
  width: 100%;
  height: 6px;
  background: white;
  margin-left: 30px;
}
</style>
<template>
  <div>
    <div class="port_div">
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
        if (scrollY >= window.innerHeight / 2) {
          port_div.style.width = "100%";
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
  transition: all 2s;
}
.port_div_h1 {
  font-size: 60px;
}
.port_line {
  width: 100%;
  height: 5px;
  background: white;
  margin-left: 30px;
}
</style>
<template>
  <div>
    <div class="port_div1">
      <h1 class="port_div1_h1">SERVICE</h1>
      <div class="port_line1"></div>
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
      var port_line1 = document.querySelector(".port_line1");
      var port_div1 = document.querySelector(".port_div1");

      window.addEventListener("scroll", () => {
        if (scrollY >= window.innerHeight * 1.5) {
          port_div1.style.width = "100%";
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
.port_div1 {
  display: flex;
  width: 100%;
  color: black;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
}
.port_div1_h1 {
  font-size: 60px;
  margin: 0px;
}
.port_line1 {
  width: 100%;
  height: 6px;
  background: black;
  margin-left: 30px;
}
</style>
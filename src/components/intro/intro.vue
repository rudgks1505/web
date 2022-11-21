<template>
  <div class="intro_div">
    <div class="load_page"></div>
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
      var load_page = document.querySelector(".load_page");

      window.addEventListener("load", () => {
        load_page.style.transform = `translateY(${window.innerHeight}px)`;
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.intro_div {
  width: 100%;
  height: 100vh;
  background: darkcyan;
  position: relative;
  overflow: hidden;
}
.load_page {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: white;
  transition: all 3s;
}
</style>
<template>
  <div class="aaa">
    <div class="aaa1"></div>
    <div class="aaa2"></div>
    <div class="aaa3"></div>
    <div class="aaa4"></div>
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
      var aaa = document.querySelector(".aaa");
      var aaa1 = document.querySelector(".aaa1");
      var aaa2 = document.querySelector(".aaa2");
      var aaa3 = document.querySelector(".aaa3");
      var aaa4 = document.querySelector(".aaa4");

      var tete = 0;

      window.addEventListener(
        "wheel",
        (e) => {
          if (tete === 0) {
            if (e.wheelDeltaY === -120) {
              aaa1.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa2.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa3.style.transform = `translateY(${-window.innerHeight}px)`;
              aaa4.style.transform = `translateY(${-window.innerHeight}px)`;
              tete = 1;
            } else if (e.wheelDeltaY === 120) {
              aaa1.style.transform = `translateY(${0}px)`;
              aaa2.style.transform = `translateY(${0}px)`;
              aaa3.style.transform = `translateY(${0}px)`;
              aaa4.style.transform = `translateY(${0}px)`;
              tete = 0;
            }
          } else if (tete === 1) {
            if (e.wheelDeltaY === 120) {
              aaa1.style.transform = `translateY(${0}px)`;
              aaa2.style.transform = `translateY(${0}px)`;
              aaa3.style.transform = `translateY(${0}px)`;
              aaa4.style.transform = `translateY(${0}px)`;
              tete = 0;
            }
          }
        },
        { passive: false }
      );
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.aaa1 {
  width: 100%;
  background: darkcyan;
  height: 100vh;
  transition: all 1s;
}
.aaa2 {
  width: 100%;
  background: darkgoldenrod;
  height: 100vh;
  transition: all 1s;
}
.aaa3 {
  width: 100%;
  background: darkkhaki;
  height: 100vh;
  transition: all 1s;
}
.aaa4 {
  width: 100%;
  background: darkmagenta;
  height: 100vh;
  transition: all 1s;
}
.aaa {
  transition: all 0.8s;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}
</style>
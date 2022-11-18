<template>
  <div class="box_wrap">
    <div class="box"></div>
    <div class="box1"></div>
    <div class="box2"></div>
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
      var box = document.querySelector(".box");
      var box1 = document.querySelector(".box1");
      var box2 = document.querySelector(".box2");
      let timer;
      var tete = 0;
      var lastScrollY;

      document.addEventListener("scroll", (e) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          const scrollY = window.scrollY;
          // 이전의 스크롤 위치와 비교하기
          const direction = scrollY > lastScrollY ? "down" : "up";
          // 현재의 스크롤 값을 저장
          lastScrollY = scrollY;

          if (direction === "down") {
            box.style.transform = `translateY(${-window.innerHeight}px)`;
            box1.style.transform = `translateY(${-window.innerHeight}px)`;
            box2.style.transform = `translateY(${-window.innerHeight}px)`;
          }
        }, 300);
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: darkcyan;
  transition: all 1s;
}
.box1 {
  width: 100%;
  height: 100vh;
  background: darkgoldenrod;
  transition: all 1s;
}
.box2 {
  width: 100%;
  height: 100vh;
  background: darkkhaki;
  transition: all 1s;
}
.box_wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
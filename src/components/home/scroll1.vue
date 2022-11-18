<template>
  <div class="support-scrollsnap"></div>

  <div class="scroll-container">
    <div class="scroll-area">1</div>
    <div class="scroll-area">2</div>
    <div class="scroll-area">3</div>
    <div class="scroll-area">4</div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";

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
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
}

@media screen and (min-width: 1025px) {
}
* {
  box-sizing: border-box;
}
html {
  background: #f2f2f2;
}

.scroll-container,
.scroll-area {
  max-width: 100%;
  height: 100vh;
  font-size: 60px;
}

.scroll-container {
  overflow: auto;
  scroll-snap-type: y mandatory;
}

.scroll-area {
  scroll-snap-align: start;
}

.scroll-container,
.scroll-area {
  margin: 0 auto;
}

.scroll-area {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.scroll-area:nth-of-type(1) {
  background: #49b293;
}

.scroll-area:nth-of-type(2) {
  background: #c94e4b;
}

.scroll-area:nth-of-type(3) {
  background: #4cc1be;
}

.scroll-area:nth-of-type(4) {
  background: #8360a6;
}
</style>
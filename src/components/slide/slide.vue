<template>
  <div class="slide_con">
    <img src="../../assets/slide/slide1.jpg" alt="" class="slide_con_img1" />
    <img src="../../assets/slide/slide2.jpg" alt="" class="slide_con_img1" />
    <div class="slide_con_h">
      <h1>aaaaaaa</h1>
      <h1>aaaaaaa</h1>
      <h1>aaaaaaa</h1>
      <h1>aaaaaaa</h1>
      <h1>aaaaaaa</h1>
      <h1>aaaaaaa</h1>
    </div>
    <div class="slide_con_h">
      <h1>bbbbbbb</h1>
      <h1>bbbbbbb</h1>
      <h1>bbbbbbb</h1>
      <h1>bbbbbbb</h1>
      <h1>bbbbbbb</h1>
      <h1>bbbbbbb</h1>
    </div>
    <!-- <span class="material-symbols-outlined arrowlcon"> arrow_back_ios </span>
    <span class="material-symbols-outlined arrowlcon1">
      arrow_forward_ios
    </span> -->
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.slide_con_img1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -100px;
  right: 0px;
  opacity: 1;
  transition: all 1s;
  opacity: 0;
}
.slide_con {
  position: relative;
  width: 100%;
  height: 1000px;
}
.arrowlcon {
  position: absolute;
  top: 50%;
  left: -50px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}
.arrowlcon1 {
  position: absolute;
  top: 50%;
  right: -50px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}
.slide_con_h {
  position: absolute;
  top: 25%;
  left: 50%;
  transition: all 1s;
  opacity: 0;
}
</style>
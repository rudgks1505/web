<template>
  <div class="portfo_pop">
    <h1 class="portfo_pop_h">PORTFOLIO</h1>
    <div>
      <div class="portfo_pop_line"></div>
      <h1 class="portfo_pop_web">
        <span style="color: black">WEB</span> PORTFOLIO
      </h1>
      <div class="portfo_pop_item"></div>
      <div class="portfo_pop_item1">
        <div class="portfo_pop_item1_img"></div>
        <div class="portfo_pop_item1_img1"></div>
      </div>
    </div>
  </div>
  <p>asdads</p>
</template>

<script>
import { reactive, toRefs } from "vue";
import footer1 from "../footer/footer1.vue";

export default {
  components: {
    footer1,
  },

  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.portfo_pop {
  width: 100%;
  background: white;
  position: absolute;
  top: 0px;
  z-index: 50;
  display: flex;
  justify-content: center;
}

.portfo_pop_h {
  position: fixed;
  top: 0px;
  right: 0px;
  font-size: 222.61px;
  color: #f5f5f5;
  z-index: 1;
}
.portfo_pop_item {
  width: 1200px;
  height: 765px;
  z-index: 2;
  position: relative;
  background-image: url("../../assets/protfo/popimg1.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.portfo_pop_web {
  font-size: 60px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin: 0px;
  line-height: 60px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}
.portfo_pop_line {
  width: 50px;
  height: 5px;
  background: #3180f1;
  margin: 0px;
  margin-top: 260px;
}
.portfo_pop_item1 {
  display: flex;
  width: 100%;
  height: 340.88px;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 60px;
}
.portfo_pop_item1_img {
  width: 606px;
  height: 100%;
  position: relative;
  background-image: url("../../assets/protfo/popimg1.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.portfo_pop_item1_img1 {
  width: 574px;
  height: 100%;
  position: relative;
  background-image: url("../../assets/protfo/popimg1.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
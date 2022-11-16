<template>
  <div class="port1">
    <!-- <img src="../../assets/port/bath.jpg" alt="" class="port1_stiky" /> -->
    <div class="port1_div">
      <img src="../../assets/port/portimg1.png" alt="" />
      <img src="../../assets/port/portimg2.png" alt="" />
      <img src="../../assets/port/portimg3.png" alt="" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

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
.port1 {
  width: 100%;
  height: 200vh;
}
.port1_stiky {
  width: 50%;
  height: 300px;
  position: sticky;
  top: 0;
}
.port1_div {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
}
.port1_div img {
  width: 500px;
  height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
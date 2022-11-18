<template>
  <div class="port_div">
    <h1 class="port_div_h1">VISION</h1>
    <div class="port_line"></div>
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
.port_div {
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
}
.port_div_h1 {
  font-size: 60px;
  margin: 0px;
}
.port_line {
  width: 100%;
  height: 6px;
  background: white;
  margin-left: 30px;
}
</style>
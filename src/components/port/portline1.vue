<template>
  <div>
    <div class="port2_div">
      <h1 class="port2_div_h1">SERVICE</h1>
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

    onMounted(() => {});

    return {
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .port2_div_h1 {
    font-size: 30px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .port2_div_h1 {
    font-size: 40px;
  }
}

@media screen and (min-width: 1025px) {
  .port2_div_h1 {
    font-size: 60px;
  }
}
.port2_div {
  display: flex;
  width: 100%;
  color: black;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
}
.port2_div_h1 {
  margin: 0px;
}
.port_line1 {
  width: 100%;
  height: 6px;
  background: black;
  margin-left: 30px;
}
</style>
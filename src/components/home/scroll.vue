<template>
  <div class="ggg1"></div>
  <div class="ggg2"></div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
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
.ggg1 {
  width: 100%;
  height: 100vh;
  background: darkcyan;
}
.ggg2 {
  width: 100%;
  height: 100vh;
  background: darkcyan;
}
</style>
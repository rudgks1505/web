<template>
  <div>
    <router-view></router-view>
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
</style>
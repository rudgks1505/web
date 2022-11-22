<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import { reactive } from "vue";
import Nav from "../src/components/nav/nav.vue";

export default {
  components: { Nav },
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
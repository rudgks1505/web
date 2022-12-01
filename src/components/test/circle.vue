<template>
  <div class="aaa"></div>
</template>

<script>
import { reactive, toRefs } from "vue";

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
@media screen and (max-height: 750px) {
}

@media screen and (max-width: 600px) and (min-height: 750px) {
}

@media screen and (min-width: 600px) and (max-width: 1025px) and (min-height: 750px) {
}
@media screen and (min-width: 1025px) and (max-width: 1600px) and (min-height: 750px) {
}
@media screen and (min-width: 1600px) {
}

.aaa {
  width: 100%;
  height: 100vh;
}
</style>
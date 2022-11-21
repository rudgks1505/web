<template>
  <div class="site">
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/44999f62286713.5a8b91f64e1cc.gif"
      alt=""
    />
  </div>
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
@media screen and (max-width: 430px) {
  .site img {
    height: 50%;
    margin-top: 40%;
  }
}
@media screen and (min-width: 430px) {
  .site img {
    height: 100%;
  }
}

.site {
  height: 100vh;
  width: 100vw;
  background: #d3d3d3;
  position: absolute;
  z-index: 301;
  top: 0px;
  transition: all 3s;
  background: black;
}
.site img {
  width: 100%;
}
</style>
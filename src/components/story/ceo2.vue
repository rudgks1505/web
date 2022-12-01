<template>
  <div class="ceo_con">
    <div class="ceo_item">
      <div class="ceo_item_brand"></div>
      <div class="ceo_item_logo">
        <div class="ceo_item_logo_div">
          <img src="../../assets/story/logo.png" alt="" />
        </div>
        <div class="ceo_item_logo_div">
          <img src="../../assets/story/logo.png" alt="" />
        </div>
      </div>
      <div class="ceo_item_color"></div>
    </div>
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
@media screen and (max-width: 600px) {
}

@media screen and (min-width: 600px) and (max-width: 1202px) {
  .ceo_item_logo {
    height: 510px;
  }
}
@media screen and (min-width: 1202px) and (max-width: 1600px) {
  .ceo_item_logo {
    height: 410px;
  }
}
@media screen and (min-width: 1600px) {
  .ceo_item_logo {
    height: 410px;
  }
}
.ceo_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.ceo_item {
  width: 1300px;
  height: 100%;
  background: red;
}
.ceo_item_brand {
  width: 100%;
  height: 350px;
  background: blue;
}
.ceo_item_logo {
  width: 100%;
  background: darkgoldenrod;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ceo_item_color {
  width: 100%;
  height: 305px;
  background: darkgreen;
}
.ceo_item_logo_div {
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
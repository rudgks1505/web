<template>
  <div class="hover_con">
    <div class="hover_item">
      <img
        src="../../assets/hover/img1.png"
        alt=""
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="hover_item1">
      <img
        src="../../assets/hover/img2.png"
        alt=""
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="hover_item2">
      <img
        src="../../assets/hover/img3.png"
        alt=""
        style="width: 100%; height: 100%"
      />
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

    onMounted(() => {
      var hover_item = document.querySelector(".hover_item");
      var hover_item1 = document.querySelector(".hover_item1");
      var hover_item2 = document.querySelector(".hover_item2");

      hover_item.addEventListener("mouseenter", () => {
        hover_item.style.width = "50%";
        hover_item1.style.width = "25%";
        hover_item2.style.width = "25%";
      });
      hover_item1.addEventListener("mouseenter", () => {
        hover_item1.style.width = "50%";
        hover_item.style.width = "25%";
        hover_item2.style.width = "25%";
      });
      hover_item2.addEventListener("mouseenter", () => {
        hover_item2.style.width = "50%";
        hover_item1.style.width = "25%";
        hover_item.style.width = "25%";
      });
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.hover_con {
  display: flex;
  width: 100%;
  height: 500px;
  margin: 100px 0px;
}
.hover_item {
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  cursor: pointer;
}
.hover_item1 {
  width: 25%;
  height: 100%;
  transition: all 0.5s;
  cursor: pointer;
}
.hover_item2 {
  width: 25%;
  height: 100%;
  transition: all 0.5s;
  cursor: pointer;
}
</style>
<template>
  <div class="spinner">
    <div class="spinner_nav"></div>
    <video
      src="../../assets/explore/People2.mp4"
      class="spinner_video"
      autoplay
      muted
    ></video>
    <div class="spinner_border_box">
      <div class="spinner_border_box_h">
        <h1 class="spinner_border_box_span1">SIMPLE IS</h1>
        <h1 class="spinner_border_box_span2">THE BEST!</h1>
      </div>
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
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .spinner_border_box_h {
    font-size: 30px;
  }
  .spinner_border_box_span2 {
    top: 0px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .spinner_border_box_h {
    font-size: 60px;
  }

  .spinner_border_box_span2 {
    top: -50px;
  }
}

@media screen and (min-width: 1025px) {
  .spinner_border_box_h {
    font-size: 100px;
  }
}
/* 스피너 */
.spinner {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 300;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
}

.spinner_border_box {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0px;
  border: 0px solid white;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.spinner_border_box_h {
  color: white;
  width: 1400px;
  height: 50%;
  position: relative;
  display: flex;
  justify-content: center;
}
.spinner_border_box_span1 {
  display: inline;
  position: absolute;
  transform: translateX(-10%);
  top: 0px;
  left: 0px;
  margin: 0px;
}
.spinner_border_box_span2 {
  display: inline;
  bottom: 0px;
  right: 0px;
  transform: translateX(10%);
  margin: 0px;
  position: absolute;
}
</style>
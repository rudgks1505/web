<template>
  <div class="intro6_back">
    <div class="intro6_back_centerdiv">
      <div>
        <h3 style="text-align: center; margin-top: 0px; font-size: 30px">
          주소
        </h3>
        <h3 style="text-align: center">부산광역시 사상구 백양대로 684</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.548042668115!2d128.9868924160836!3d35.1678907655588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ea7f35096129%3A0x26e62be76f0388cf!2z67aA7IKw6rSR7Jet7IucIOyCrOyDgeq1rCDrsLHslpHrjIDroZwgNjg0!5e0!3m2!1sko!2skr!4v1668045718480!5m2!1sko!2skr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="googlemap"
        ></iframe>
        <div class="intro6_textbox" style="margin-top: 85px">
          <h3>지하철</h3>
          <p>부산2호선 사상역</p>
        </div>
        <div class="intro6_textbox">
          <h3>버스</h3>
          <p class="intro6_textbox_p">
            지선 128-1, 133, 169-1, 62, 129-1 신라대 입구 하차
          </p>
        </div>
      </div>
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
      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
      var intro6_textbox_p = document.querySelector(".intro6_textbox_p");
    });

    return {
      state,
    };
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  .googlemap {
    width: 100%;
    height: 460px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .googlemap {
    width: 600px;
    height: 460px;
  }
}

@media screen and (min-width: 1025px) {
  .googlemap {
    width: 1000px;
    height: 460px;
  }
}
.intro6_back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.intro6_back_centerdiv {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 140px 0px;
}
.intro6_back_centerdiv h3 {
  font-size: 20px;
}
.intro6_textbox {
  display: flex;
  align-items: center;
}
.intro6_textbox h3 {
  width: 90px;
  font-size: 20px;
}
.intro6_textbox progress {
  font-size: 20px;
}
.googlemap {
  border: none;
}
</style>
<template>
  <div class="story_intro">
    <div class="story_intro_con">
      <div class="story_intro_con_wrap">
        <div class="story_intro_con_line"></div>
        <h1 class="story_intro_con_h">
          <span style="color: #3180f1">G</span>AMEINS
        </h1>
        <h1 class="story_intro_con_h1">
          ST<span style="color: #3180f1">O</span>RY
        </h1>
        <h3 class="story_intro_con_h2">GAMEINS는 2016년부터</h3>
        <h3 class="story_intro_con_h2">함께 하고있습니다.</h3>
      </div>
    </div>
  </div>

  <div class="story_intro1">
    <div class="story_intro_con1">
      <img src="../../assets/story/perdi.png" alt="" class="perdi" />
    </div>
  </div>

  <div class="story_intro2">
    <div class="story_intro2_div1">
      <h1 class="story_intro2_h">Scroll</h1>
    </div>
    <div class="story_intro2_div">
      <img src="../../assets/story/Vector.png" alt="" class="vector" />
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
      var vector = document.querySelector(".vector");

      var max_600px = window.matchMedia("screen and (max-width: 600px)");
      var min_600px_max_1000px = window.matchMedia(
        "screen and (min-width: 600px) and (max-width: 1025px)"
      );
      var min_1000px_max_1600px = window.matchMedia(
        "screen and (min-width: 1025px) and (max-width: 1600px)"
      );
      var min_1600px = window.matchMedia("screen and (min-width: 1600px)");

      vector_move();

      function vector_move(params) {
        vector.style.transform = "translateY(10px)";
        setTimeout(() => {
          vector.style.transform = "translateY(0px)";
          setTimeout(() => {
            vector_move();
          }, 1000);
        }, 1000);
      }
    });
    return {
      state,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .story_intro_con_h {
    line-height: 50px;
    font-size: 57.47px;
  }
  .story_intro_con_h1 {
    font-size: 57.47px;
  }
  .story_intro_con_h2 {
    font-size: 30px;
  }
  .scrollbtn {
    width: 100px;
  }
  .story_intro_con_line {
    width: 38.74px;
    height: 3px;
  }
  .perdi {
    width: 304px;
    height: 403px;
  }
  .story_intro_con1 {
    padding-right: 0px;
  }
  .story_intro {
    padding-left: 30px;
  }
  .story_intro_con_wrap {
    margin-bottom: 300px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .story_intro_con_h {
    line-height: 80px;
    font-size: 107.47px;
  }
  .story_intro_con_h1 {
    font-size: 107.47px;
  }
  .story_intro_con_h2 {
    font-size: 40px;
  }
  .scrollbtn {
    width: 100px;
  }
  .story_intro_con_line {
    width: 70.74px;
    height: 6px;
  }
  .perdi {
    width: 464px;
    height: 603px;
  }
  .story_intro_con1 {
    padding-right: 0px;
  }
  .story_intro {
    padding-left: 40px;
  }
  .story_intro_con_wrap {
    margin-bottom: 400px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1600px) {
  .story_intro_con_h {
    line-height: 100px;
    font-size: 137.47px;
  }
  .story_intro_con_h1 {
    font-size: 137.47px;
  }
  .story_intro_con_h2 {
    font-size: 40px;
  }
  .scrollbtn {
    width: 100px;
  }
  .story_intro_con_line {
    width: 83.74px;
    height: 6px;
  }
  .perdi {
    width: 564px;
    height: 703px;
  }
  .story_intro_con1 {
    padding-right: 140px;
  }
  .story_intro {
    padding-left: 140px;
  }
  .story_intro_con_wrap {
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 1600px) {
  .story_intro_con_h {
    line-height: 140px;
    font-size: 187.47px;
  }
  .story_intro_con_h1 {
    font-size: 187.47px;
  }
  .story_intro_con_h2 {
    font-size: 40px;
  }
  .scrollbtn {
    width: 100px;
  }
  .story_intro_con_line {
    width: 93.74px;
    height: 6px;
  }
  .perdi {
    width: 664px;
    height: 803px;
  }
  .story_intro_con1 {
    padding-right: 140px;
  }
  .story_intro {
    padding-left: 140px;
  }
  .story_intro_con_wrap {
    margin-bottom: 0px;
  }
}

* {
  box-sizing: border-box;
}

.story_intro {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story_intro1 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  z-index: 3;
}
.story_intro_con {
  width: 1600px;
  position: relative;
  background: url("../../assets/story/back.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.story_intro_con1 {
  width: 1600px;
  display: flex;
  justify-content: right;
}
.story_intro_con_line {
  background: #3180f1;
}
.story_intro_con_h {
  color: #222222;
  margin: 0px;
}
.story_intro_con_h1 {
  color: #222222;
  margin: 0px;
}
.story_intro_con_h2 {
  color: #575757;
  margin: 0px;
}
.story_intro2 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  z-index: 3;
}
.scrollbtn {
  margin-bottom: 30px;
}
.vector {
  width: 10px;
  height: 28px;
  margin-right: 10px;
  transition: all 1s;
}
.story_intro2_h {
  margin: 0px;
  font-size: 20px;
}
.story_intro2_div {
  width: 60px;
  height: 100px;
  border: 1.5px solid #484848;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-bottom: 30px;
}
.story_intro2_div1 {
  width: 60px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
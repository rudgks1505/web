<template>
  <div class="aaa">
    <div class="aaa_container">
      <p class="aaa_container_p"><span style="color: #0085ff">G</span>AMEINS</p>
      <p class="aaa_container_p">ST<span style="color: #0085ff">O</span>RY</p>
      <p class="aaa_container_p1">GAMEINS는 2016년부터</p>
      <p class="aaa_container_p1">함께 하고있습니다</p>
      <div class="perdi"></div>
      <div class="aaa_scrollbtn_flex">
        <div class="aaa_scrollbtn_flex_center">
          <p class="aaa_scrollbtn_flex_center_p">scroll</p>
          <div class="aaa_scrollbtn_flex_center_div">
            <img
              src="../../assets/story/Vector.png"
              alt=""
              class="aaa_vector"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      var aaa_vector = document.querySelector(".aaa_vector");

      vector_f();
      function vector_f(params) {
        aaa_vector.style.transform = "translateY(10px)";
        setTimeout(() => {
          aaa_vector.style.transform = "translateY(0px)";
          setTimeout(() => {
            vector_f();
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
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .aaa_container {
    width: 1024px;
    height: 720px;
  }
  .perdi {
    width: 464px;
    height: 603px;
  }
  .aaa_container_p {
    font-size: 157px;
    line-height: 150px;
  }
  .aaa_container_p1 {
    font-size: 40px;
  }
  .aaa_scrollbtn_flex_center_div {
    width: 40px;
    height: 70px;
  }
}
@media screen and (min-width: 1440px) {
  .aaa_container {
    width: 1320px;
    height: 900px;
  }
  .perdi {
    width: 664px;
    height: 803px;
  }
  .aaa_container_p {
    font-size: 187px;
    line-height: 180px;
  }
  .aaa_container_p1 {
    font-size: 40px;
  }
  .aaa_scrollbtn_flex_center_div {
    width: 60px;
    height: 100px;
  }
}
* {
  box-sizing: border-box;
}
.aaa {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aaa_container {
  position: relative;
  padding-top: 120px;
  padding-left: 40px;
}
.perdi {
  background-image: url("../../assets/story/perdi.png");
  background-size: cover;
  position: absolute;
  bottom: 0px;
  right: 30px;
  background-repeat: no-repeat;
}
.aaa_container_p {
  color: #222222;
  margin: 0px;
  font-weight: bold;
}
.aaa_container_p1 {
  color: #222222;
  margin: 0px;
  font-weight: bold;
}
.aaa_scrollbtn_flex {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0px;
}
.aaa_scrollbtn_flex_center {
  width: 136px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aaa_scrollbtn_flex_center_div {
  border: 1px solid black;
  border-radius: 50px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aaa_scrollbtn_flex_center_p {
  font-size: 24px;
  color: #0085ff;
}
.aaa_vector {
  width: 8.5px;
  height: 28px;
  margin-right: 5px;
  transition: all 1s;
}
</style>
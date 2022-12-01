<template>
  <div class="ceo_con">
    <div class="ceo_item">
      <div class="ceo_line"></div>
      <div class="ceo_flex">
        <div class="ceo_flex_item">
          <img src="../../assets/story/ceo.png" alt="" class="ceoimg" />
        </div>
        <div class="ceo_flex_item1"></div>
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
  .ceoimg {
    height: 100%;
  }
}

@media screen and (min-width: 600px) and (max-width: 1202px) {
  .ceoimg {
    height: 100%;
  }
}
@media screen and (min-width: 1202px) and (max-width: 1600px) {
  .ceoimg {
    width: 520px;
    height: 601px;
  }
}
@media screen and (min-width: 1600px) {
  .ceoimg {
    width: 520px;
    height: 601px;
  }
}

.ceoimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* 레이아웃 */
@media screen and (max-width: 600px) {
  .ceo_flex_item {
    width: 100%;
    height: 50%;
  }
  .ceo_flex_item1 {
    width: 100%;
    height: 50%;
  }
  .ceo_line {
    height: 40px;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_flex {
    height: 700px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1202px) {
  .ceo_flex_item {
    width: 100%;
    height: 50%;
  }
  .ceo_flex_item1 {
    width: 100%;
    height: 50%;
  }
  .ceo_line {
    height: 50px;
  }
  .ceo_con {
    align-items: unset;
  }
  .ceo_flex {
    height: 700px;
  }
}
@media screen and (min-width: 1202px) and (max-width: 1600px) {
  .ceo_flex_item {
    width: 520px;
    height: 100%;
  }
  .ceo_flex_item1 {
    width: 613px;
    height: 100%;
  }
  .ceo_line {
    height: 80px;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_flex {
    height: 700px;
  }
}
@media screen and (min-width: 1600px) {
  .ceo_flex_item {
    width: 520px;
    height: 100%;
  }
  .ceo_flex_item1 {
    width: 613px;
    height: 100%;
  }
  .ceo_line {
    height: 80px;
  }
  .ceo_con {
    align-items: center;
  }
  .ceo_flex {
    height: 700px;
  }
}
* {
  box-sizing: border-box;
}
.ceo_con {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.ceo_item {
  width: 1320px;
  height: 100%;
  background: #eeeeee;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ceo_line {
  width: 100%;
  background: darkcyan;
}
.ceo_flex {
  width: 100%;
  background: aqua;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.ceo_flex_item {
  background: rebeccapurple;
  display: flex;
  align-items: flex-end;
}
.ceo_flex_item1 {
  background: wheat;
}
</style>
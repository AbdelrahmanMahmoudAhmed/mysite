<template>
  <div class="home container">
    <div class="pic-holder">
      <div class="lay"></div>
      <my-pic />
    </div>
    <div class="home-content">
      <h1>
        i'm abd el-rahman.
        <span> front-end developer </span>
      </h1>
      <p>
        I'm a front‑end developer focused on crafting clean & user‑friendly
        experiences, I am passionate about building excellent software that
        improves the lives of those around me and helps them to reach thier
        goals.
      </p>
      <Button>
        <template #content>
          <router-link to="/about" exact active-class="active">
            more about me
          </router-link>
        </template>
        <template #icon> <q-icon name="arrow_right_alt" /> </template>
      </Button>
    </div>
  </div>
</template>

<script>
import MyPic from "src/components/MyPic.vue";
import { defineComponent } from "vue";
import Button from "../components/Button.vue";

export default defineComponent({
  name: "home",
  components: {
    Button,
    MyPic,
  },
});
</script>
<style lang="scss">
.home {
  display: flex;
  gap: 10px;

  height: 100vh;
  align-items: center;

  .pic-holder {
    width: fit-content;
    position: relative;
    .lay {
      position: fixed;
      height: 200%;
      width: 100%;
      transform: rotate(-15deg);
      left: -83%;
      top: -50%;
      background-color: $mainColor;
    }
  }
  .home-content {
    max-width: 550px;
    margin: 0 auto;
    h1 {
      line-height: 52px;
      color: $mainColor;
      text-transform: uppercase;
      font-weight: 700;
      span {
        color: #fff;
        display: block;
      }
    }
    p {
      margin: 15px 0 28px;
      font-size: 16px;
      line-height: 35px;
      width: 90%;
    }
  }
  @media (max-width: 991px) {
    flex-direction: column;
    .pic-holder {
      padding-top: 90px;
      .lay {
        display: none;
      }
    }
    .home-content {
      text-align: center;
      padding-bottom: 100px;

      p {
        margin: {
          left: auto;
          right: auto;
        }
        font-size: $articleFont;
        line-height: 28px;
      }
    }
  }
}
</style>

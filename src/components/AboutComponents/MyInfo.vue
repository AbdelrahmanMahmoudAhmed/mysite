<template>
  <div class="my-info">
    <h3>personal infos</h3>
    <div class="info-pic">
      <my-pic />
    </div>
    <div class="my-info-container">
      <div class="info-col">
        <div class="item-container">
          <span class="item-title">first name : </span>
          <span class="item-info"> abdelrahman</span>
        </div>
        <div class="item-container">
          <span class="item-title">last name : </span>
          <span class="item-info">mahmoud</span>
        </div>
        <div class="item-container">
          <span class="item-title">age : </span>
          <span class="item-info">34 years</span>
        </div>
        <div class="item-container">
          <span class="item-title">nationality : </span>
          <span class="item-info">egyption</span>
        </div>

        <div class="item-container">
          <span class="item-title">E-mail _ 1 : </span>
          <span class="item-info"
            ><a href="mailto:abdelrahman.mahmoud.ahmed@gmail.com"
              >mail me</a
            ></span
          >
        </div>
      </div>
      <div class="info-col">
        <div class="item-container">
          <span class="item-title">freelance : </span>
          <span class="item-info">available</span>
        </div>
        <div class="item-container">
          <span class="item-title">phone 1 : </span>
          <span class="item-info">01099757763</span>
        </div>
        <div class="item-container">
          <span class="item-title">phone 2 :</span>
          <span class="item-info">01212136928</span>
        </div>

        <div class="item-container">
          <span class="item-title">address : </span>
          <span class="item-info">alexandria</span>
        </div>

        <div class="item-container">
          <span class="item-title">E-mail _ 2 : </span>
          <span class="item-info"
            ><a href="mailto:abdelrahman.mahmoud.ahmed@outlook.com"
              >mail me</a
            ></span
          >
        </div>
      </div>
    </div>
    <Button>
      <template #content>
        <a href="http://localhost:8080/Abdelrahmans-CV.pdf" download="">
          download my cv
        </a>
      </template>
      <template #icon> <q-icon name="download" /> </template>
    </Button>
  </div>
</template>

<script>
import MyPic from "../MyPic.vue";
import Button from "../Button.vue";

export default {
  components: { MyPic, Button },
};
</script>

<style lang="scss">
.my-info {
  h3 {
    padding-bottom: 22px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.2;
  }
  .info-pic {
    @media (min-width: 568px) {
      display: none;
    }
  }
  .my-info-container {
    padding-top: 30px;
    display: flex;
    justify-content: start;
    gap: 20%;
    // @media (min-width: 578px) {
    //   width: 80%;
    //   margin: auto;
    // }
    // @media (max-width: 577px) {
    //   flex-direction: column;
    //   align-items: center;
    //   .info-col {
    //     text-align: center;
    //   }
    // }
    .info-col {
      width: 50%;
      .item-container {
        padding-bottom: 20px;
        .item-title {
          opacity: 0.8;
          text-transform: capitalize;
          font-size: $mainFontSize;
        }
        .item-info {
          text-transform: capitalize;
          font-size: $mainFontSize;
          font-weight: bold;
          margin-left: 10px;
          word-break: break-word;
          > a {
            color: $mainColor;
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      @media (max-width: 578px) {
        .item-title,
        .item-info {
          display: block;
        }
      }
    }
  }
}
</style>

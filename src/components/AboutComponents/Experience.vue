<template>
  <div class="experience" v-if="education">
    <h3>exprience &amp; education</h3>
    <div class="experience-holder">
      <div class="experience-item" v-for="(item, i) in education" :key="i">
        <div class="icon-holder">
          <span class="icon"><q-icon name="business_center" /></span>
        </div>
        <div class="experience-content">
          <span> {{ item.date }} </span>
          <h5>
            {{ item.mainTitle }} <span> {{ item.secondaryTitle }}</span>
          </h5>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const education = ref();
    onMounted(() => {
      education.value = store.state.education;
    });

    const data = [
      {
        date: "2019 - present",
        title: "front-end developer ",
        titleSpan: "freelancer",
        content: "",
      },
    ];

    return {
      education,
    };
  },
};
</script>

<style lang="scss">
.experience {
  margin-bottom: 100px;
  > h3 {
    padding-top: 150px;
    text-align: center;
    padding-bottom: 22px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.2;
  }
  .experience-holder {
    display: flex;
    flex-wrap: wrap;
    .experience-item {
      display: flex;
      position: relative;
      margin-left: 20px;
      width: 45%;
      gap: 25px;
      margin-bottom: 40px;
      @media (max-width: 992px) {
        width: 100%;
      }
      .icon {
        margin-top: -7px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        z-index: 1;
        border-radius: 50%;
        color: #fff;
        background-color: $mainColor;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before {
          content: "";

          position: absolute;

          top: 33px;
          left: 20px;
          bottom: 0;
          border-left: 1px solid #333;
          height: 90%;
          width: 1px;
        }
      }
      .experience-content {
        > span {
          color: #fff;
          font-size: 12px;
          padding: 1px 10px;
          display: inline-block;
          margin-bottom: 12px;
          border-radius: 20px;
          font-weight: 600;
          background-color: #252525;
          opacity: 0.8;
        }
        h5 {
          font-size: 18px;
          margin: 7px 0 10px;
          span {
            opacity: 0.8;
            font-weight: 600;
            font-size: 15px;
            position: relative;
            padding-left: 26px;
            &::before {
              content: "";
              position: absolute;
              top: 8px;
              left: 8px;
              bottom: 0;
              height: 2px;
              width: 10px;
              background-color: #eee;
            }
          }
        }
        p {
          margin: 0;
          color: #eee;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

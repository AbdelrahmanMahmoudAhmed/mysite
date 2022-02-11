<template>
  <div class="portfolio container">
    <Title>
      <template #span>my</template>
      <template #h1> portfolio</template>
      <template #hidden>work </template>
    </Title>
    <div class="portfolio-content" v-if="data.length">
      <div
        class="potfolio-item"
        v-for="(item, i) in data"
        :key="i"
        @click="setData"
      >
        <div class="portfolio-pic">
          <img :src="require('../assets/' + item.img)" alt="" />
        </div>
        <div class="link" @click="toggleComp">
          <!-- <router-link :to="{ path: '/portfolio/' + item.id, props: true }"> -->
          <span :id="item.id"> {{ item.title }} </span>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <div v-if="compState">
      <one-project @toggleComp="toggleComp" />
    </div>
  </div>
</template>

<script>
import Title from "src/components/Title.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import OneProject from "src/components/OneProject.vue";

export default {
  components: {
    Title,
    OneProject,
  },
  setup() {
    const store = useStore();
    const compState = ref(false);
    const toggleComp = () => {
      if (!compState.value) {
        compState.value = true;
      } else if (compState.value) {
        compState.value = false;
      }
    };
    const data = ref([]);
    const setData = (e) => {
      store.commit("filterProject", e.target.querySelector("span").id);
    };
    onMounted(() => {
      data.value = store.state.data;
    });

    return {
      data,
      setData,
      compState,
      toggleComp,
    };
  },
};
</script>

<style lang="scss">
.portfolio-content {
  max-width: 1190px;
  margin: auto;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  .potfolio-item {
    position: relative;
    width: fit-content;
    height: fit-content;
    &:hover {
      .link {
        opacity: 1;
        z-index: 2;

        span {
          top: 48%;
        }
      }
    }
    .portfolio-pic {
      // max-width: 300px;
      height: fit-content;
      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        display: block;
      }
    }
    .link {
      transition: 0.3s;
      border-radius: 5px;
      padding: 0;
      position: absolute;
      // display: flex;
      // flex-direction: column;
      overflow: hidden;
      background-color: $mainColor;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: -1;
      cursor: pointer;

      span {
        transition: 0.5s;
        margin: 0;
        text-transform: uppercase;
        color: #fff;
        font-size: 18px;
        position: absolute;
        left: 0;
        top: 35%;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        z-index: -2;
        pointer-events: none;
      }
    }
  }
}
</style>

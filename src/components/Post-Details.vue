<template>
  <div class="post-details">
    <div class="project-close" @click="$emit('toggleComp')">
      <q-icon name="highlight_off" />
    </div>
    <div class="post-details-holder" v-if="data">
      <Title>
        <template #span>post</template>
        <template #h1> details</template>
        <template #hidden>posts </template>
      </Title>
      <div class="definition-holder">
        <ul class="definition">
          <li>
            <font-awesome-icon
              class="pagination-icon"
              :icon="['fa', 'user']"
            /><span>{{ data.name }} </span>
          </li>
          <li>
            <font-awesome-icon
              class="pagination-icon"
              :icon="['fa', 'calendar-days']"
            /><span>{{ data.date }}</span>
          </li>
          <li>
            <font-awesome-icon
              class="pagination-icon"
              :icon="['fa', 'tags']"
            /><span>{{ data.tags }}</span>
          </li>
        </ul>
        <h3>{{ data.title }}</h3>
      </div>

      <div class="post-pic">
        <img :src="require('../assets/my-blogs/' + data.img)" alt="" />
      </div>
      <p>{{ data.paragraph }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Title from "./Title.vue";
export default {
  components: {
    Title,
  },
  setup() {
    const store = useStore();
    const data = computed(() => {
      return store.state.oneBlog[0];
    });
    console.log(data);
    return {
      data,
    };
  },
};
</script>

<style lang="scss">
%stamp {
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
}
.post-details {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999999;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .project-close {
    position: absolute;
    top: 40px;
    right: 30px;
    cursor: pointer;
    i {
      font-size: 50px;
    }
  }
  .post-details-holder {
    width: 80%;
    height: 80%;
    overflow-y: scroll;
    margin: 0 auto;
    background-color: #252525;
    padding: 30px;
    padding-top: 0;
    border-radius: 10px;
    .definition-holder {
      @extend %stamp;
      .definition {
        margin-bottom: 15px;
        > li {
          margin-right: 15px;
          display: inline-block;
          svg {
            color: $mainColor;
            margin-right: 5px;
          }
        }
      }
      h3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 1;
        @media (max-width: 768px) {
          font-size: 20px;
        }
        @media (max-width: 567px) {
          font-size: 20px;
        }
      }
    }

    .post-pic {
      @extend %stamp;
      > img {
        width: 100%;
        border-radius: 5px;
      }
    }
    p {
      @extend %stamp;
      line-height: 1.6;
      font-size: $mainFontSize;
    }
  }
}
</style>

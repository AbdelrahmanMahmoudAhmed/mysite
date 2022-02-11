<template>
  <Title>
    <template #span>my</template>
    <template #h1> blogs</template>
    <template #hidden>posts </template>
  </Title>
  <div class="blogs container" v-if="blogs.length">
    <div
      class="blog"
      v-for="(blog, i) in blogs"
      :key="i"
      :id="blog.id"
      @click.stop="setData"
      @click="toggleComp"
    >
      <div class="blog-image">
        <img :src="require('../assets/my-blogs/' + blog.img)" alt="" />
      </div>
      <div class="blog-contnet">
        <h3>{{ blog.title }}</h3>
        <p>
          {{ blog.paragraph.slice(0, 100) + "...." }}
        </p>
      </div>
    </div>

    <div v-if="compState">
      <post-details @toggleComp="toggleComp" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import Title from "src/components/Title.vue";
import PostDetails from "src/components/Post-Details.vue";

export default {
  components: {
    Title,
    PostDetails,
  },
  setup() {
    const store = useStore();

    const compState = ref(false);
    const blogs = computed(() => {
      return store.state.blogs;
    });
    const toggleComp = () => {
      if (!compState.value) {
        compState.value = true;
      } else if (compState.value) {
        compState.value = false;
      }
    };

    const setData = (e) => {
      store.commit("filterBlog", e.target.closest(".blog").id);
      console.log(e.target.closest(".blog").id);
      console.log(store.state.oneBlog);
    };

    return {
      compState,
      toggleComp,
      blogs,
      setData,
    };
  },
};
</script>

<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 5px;
  padding-bottom: 20px;

  .blog {
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    cursor: pointer;

    .blog-image {
      border-bottom: 5px solid $mainColor;
      padding: 0;
      overflow: hidden;

      img {
        margin: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
        display: block;
        transition: 0.5s;
      }
    }
    .blog-contnet {
      background-color: #252525;
      padding: 20px 25px 25px;
      border-radius: 0 0 5px 5px;
      h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 20px;
      }

      p {
        line-height: 1.6;
        font-size: $mainFontSize;
      }
    }
    &:hover {
      .blog-image img {
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>

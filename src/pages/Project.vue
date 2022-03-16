<template>
  <div class="project-holder container" v-if="$store.state.oneProject.length">
    <div class="content">
      <h2>image project</h2>
      <ul class="content-items">
        <li>
          <font-awesome-icon class="pagination-icon" :icon="['fa', 'folder']" />

          <span class="span-title">project : </span>
          <span class="item">{{ $store.state.oneProject[0].title }}</span>
        </li>
        <li>
          <font-awesome-icon class="pagination-icon" :icon="['fa', 'code']" />
          <span class="span-title">language / framework : </span>
          <span class="item">{{ $store.state.oneProject[0].language }}</span>
        </li>
        <li>
          <font-awesome-icon
            class="pagination-icon"
            :icon="['fa', 'code-branch']"
          />
          <span class="span-title"> repo : </span>
          <span class="item url">
            <a :href="$store.state.oneProject[0].git" target="_blank">{{
              $store.state.oneProject[0].git
            }}</a>
          </span>
        </li>
        <li>
          <font-awesome-icon class="pagination-icon" :icon="['fa', 'link']" />
          <span class="span-title">preview : </span>
          <span class="item url"
            ><a :href="$store.state.oneProject[0].link" target="_blank">{{
              $store.state.oneProject[0].link
            }}</a></span
          >
        </li>
      </ul>
    </div>
    <carousel />
    <div class="button-holder">
      <Button>
        <template #content>
          <router-link to="/portfolio" exact active-class="active">
            back to portfolio
          </router-link>
        </template>
        <template #icon> <q-icon name="arrow_back" /> </template>
      </Button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, onUpdated, watch } from "vue";
import carousel from "../components/carousel.vue";
import Button from "../components/Button.vue";
import { useRoute } from "vue-router";

export default {
  components: { carousel, Button },
  props: ["id"],
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const data = ref([]);

    console.log(props.id);
    watch(
      () => route.path,
      () => {
        store.commit("filterProject", route.path.substring(11));
        data.value = store.state.oneProject[0];
      }
    );
    onMounted(() => {
      store.commit("filterProject", props.id);
      data.value = store.state.oneProject[0];
    });
    const compState = ref(true);
    const ele = ref();
    console.log(ele);
    onUpdated(() => {
      if (compState.value) {
        // document.querySelector(".project").classList.add("removed")
        console.log(ele);
      } else if (!compState.value) {
        // document.querySelector(".project").classList.remove("removed")
        console.log("unremoved");
      }
    });

    const removeComp = () => {
      compState.value = true;
      //  document.querySelector(".project").classList.add("removed")
      console.log(compState.value);
    };

    return {
      removeComp,
      ele,
      data,
    };
  },
};
</script>

<style lang="scss">
.project-holder {
  // width: 80%;
  margin: 0 auto;
  // background-color: #252525;
  .content {
    padding-bottom: 50px;
    h2 {
      text-transform: uppercase;
      padding: 10px 0 20px;
      font-weight: 700;
      text-align: center;
      font-size: 33px;
      color: $mainColor;
    }
    .content-items {
      display: flex;
      flex-wrap: wrap;
      li {
        padding-left: 15px;
        padding-right: 15px;
        width: 50%;
        i {
          font-size: 15px;
          margin-right: 15px;
          margin-bottom: 5px;
        }
        svg {
          font-size: 15px;
          margin-right: 15px;
        }
        .span-title {
          font-size: 15px;
          // font-weight: 500;
          line-height: 1.6;
        }
        .item {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.6;
        }
        .item.url {
          text-decoration: underline;
          max-width: 100%;
          display: block;
          cursor: pointer;
          word-break: break-word;
          a {
            color: $mainColor;
          }
        }
      }
      @media (max-width: 578px) {
        flex-wrap: nowrap;
        flex-direction: column;
        li {
          width: 100%;
        }
      }
    }
  }
  .button-holder {
    padding: 40px;
    @media (max-width: 992px) {
      margin-bottom: 100px;
    }
    @media (max-width: 576px) {
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="project" ref="ele" v-if="$store.state.oneProject.length">
    <div class="project-close" @click="$emit('toggleComp')">
      <q-icon name="highlight_off" />
    </div>
    <div class="project-holder">
      <div class="content">
        <h2>image project</h2>
        <ul class="content-items">
          <li>
            <font-awesome-icon
              class="pagination-icon"
              :icon="['fa', 'folder']"
            />
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
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed, onUpdated } from "vue";
import carousel from "./carousel.vue";

export default {
  components: { carousel },
  props: ["id"],
  setup(props) {
    console.log(props);
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
    };
  },
};
</script>

<style lang="scss">
.project.removed {
  display: none;
}
.project {
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
  .project-holder {
    width: 80%;
    margin: 0 auto;
    background-color: #252525;
    padding: 30px;
    border-radius: 10px;
    .content {
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
  }
}
</style>

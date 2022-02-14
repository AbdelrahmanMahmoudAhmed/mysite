<template>
  <div class="error container">
    <div>
      <div class="title">404</div>

      <div class="text-h2" style="opacity: 0.4; margin-bottom: 70px">
        Oops. Page not found...
      </div>
      <Button>
        <template #content>
          <router-link to="/" exact active-class="active">
            to home page
          </router-link>
        </template>
        <template #icon> <q-icon name="arrow_right_alt" /> </template>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
  components: {
    Button,
  },
});
</script>

<style lang="scss">
.error {
  text-align: center;
  .title {
    width: fit-content;
    margin: auto;
    font-size: 10rem;
  }
}
</style>

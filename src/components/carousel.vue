<template>
  <div class="q-pa-md" v-if="$store.state.oneProject[0].imgs">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        v-for="(pic, i) in $store.state.oneProject[0].imgs"
        :key="i"
        :name="i"
        :img-src="require('src/assets/' + pic)"
      />
      <!-- <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style lang="scss">
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
}
.q-carousel__arrow {
  color: $mainColor !important;
}
</style>

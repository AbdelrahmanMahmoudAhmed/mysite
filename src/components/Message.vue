<template>
  <div class="q-pa-md">

    <q-dialog v-model="$props.theDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">
            <span class="">thank you.</span><br />
            i will contact you soon
          </div>
        </q-card-section>
        <q-card-section class="row items-center q-gutter-sm">
          <q-btn  label="Close" color="primary"   @click="$emit('changeDialog')"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref  } from "vue";

export default {
  props: ["theDialog" ],
  setup(props) {
      
    return {
    };
  },
};
</script>
<style lang="scss">
.q-card {
  background-color: #444;
  text-transform: capitalize;
  padding: 10px;
}
.text-h6 {
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 28px;

  > span {
    color: $mainColor;
    display: inline-block;
    margin-bottom: 10px;
  }
}
</style>

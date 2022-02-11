<template>
  <!-- <div class="q-pa-md flex flex-center"> -->
  <div class="circular" v-if="progress">
    <h3>my skills</h3>
    <div class="circular-holder">
      <div class="circular-item" v-for="(item, i) in progress" :key="i">
        <q-circular-progress
          show-value
          font-size="12px"
          :value="item.prog"
          :size="size"
          :thickness="0.15"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
        >
          {{ item.prog }}%
        </q-circular-progress>
        <h6>{{ item.property }}</h6>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import {ref , onUnmounted , onMounted} from "vue"
export default {
  props:["progress"],
  setup (props) {
      const size = ref("120px");
      console.log(props);

    onMounted(()=>{
         window.addEventListener("resize", handelSize);
    })

    onUnmounted(()=>{
        window.removeEventListener("resize" , handelSize)
    })


      function handelSize(){
          if(window.innerWidth < 567){
              size.value = "96px"
          }else{
              size.value = "120px"
          }
      }

    return {
      value: 90,
      size
    }
  }
}
</script>
<style lang="scss">
.circular {
  margin-bottom: 120px;
  h3 {
    padding-top: 150px;
    text-align: center;
    padding-bottom: 22px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.2;
  }
  .circular-holder {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    row-gap: 30px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
    .circular-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      h6 {
        text-transform: uppercase;
        font-style: 16px;
      }
    }
  }

  .q-circular-progress__track {
    color: #252525 !important;
  }
  .q-circular-progress__circle {
    color: $mainColor !important;
  }
  .q-circular-progress__text {
    font-size: 24px !important;
  }
}
</style>

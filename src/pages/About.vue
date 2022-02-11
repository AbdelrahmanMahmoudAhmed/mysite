<template>
  <div class="about container">
    <Title>
      <template #span>about</template>
      <template #h1> me</template>
      <template #hidden>resume </template>
    </Title>
    <div class="sec-one">
      <my-info />
      <overview />
    </div>

    <div class="progress-sec">
      <div class="progress-item">
        <circular-progress :progress="progress" />
      </div>
    </div>
  </div>
  <experience />
</template>

<script>



import CircularProgress from 'src/components/AboutComponents/CircularProgress.vue'
import Title from 'src/components/Title.vue'
import MyInfo from 'src/components/AboutComponents/MyInfo.vue'
import Overview from 'src/components/AboutComponents/Overview.vue'
import Experience from 'src/components/AboutComponents/Experience.vue'

export default {
  components: {
       CircularProgress,
       Title,
    MyInfo,
    Overview,
    Experience,
 },
 setup(){
  
     const progress = [
       {
         property: "html",
         prog: 95
       },
       {
         property: "css",
         prog: 85
       },
       {
         property: "scss",
         prog: 80
       },
       {
         property: "javascript",
         prog: 85
       },
       {
         property: "jquery",
         prog: 75
       },
       {
         property: "react",
         prog: 85
       },
       {
         property: "vue",
         prog: 92
       },
       {
         property: "redux",
         prog: 70
       },
     ]

     return{
      progress,
      
     }
 }

}
</script>

<style lang="scss">
.about {
  // width: 50%;
  // h3 {
  //   padding-bottom: 22px;
  //   font-weight: 600;
  //   text-transform: uppercase;
  //   line-height: 1.2;
  //   text-align: center;
  // }
  .sec-one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
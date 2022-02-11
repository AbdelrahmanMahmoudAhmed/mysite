<template>
  <div class="overview" v-if="data.length">
    <div class="item-holder" v-for="(item, i) in data" :key="i">
      <h3>{{ item.num }}<span>+</span></h3>
      <p>
        {{ item.contOne }}<span>{{ item.contTwo }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
    setup(){
        let data = ref([
            {
                num: 12 ,
                contOne : "years of",
                contTwo: "exprience"
            },
             {
                num: 97 ,
                contOne : "completed",
                contTwo: "projects"
            },
             {
                num: 81 ,
                contOne : "happy",
                contTwo: "customers"
            },
             {
                num: 53 ,
                contOne : "awards",
                contTwo: "won"
            },
        ])

        return{
            data,
        }
    }

}
</script>

<style lang="scss" >
.overview {
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 30px;
  margin-right: 20px;
  max-width: 100%;

  .item-holder {
    padding: 20px 30px 25px 40px;
    border-radius: 5px;
    border: 1px solid #252525;

    h3 {
      color: $mainColor;
      margin: 0;
      font-size: 50px;
      font-weight: 700;
      span {
        font-weight: normal;
        font-size: 35px;
        position: relative;
        top: -13px;
        display: inline-block;
      }
    }
    p {
      padding-left: 45px;
      text-transform: uppercase;
      position: relative;
      font-size: $mainFontSize;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 13px;
        width: 30px;
        height: 1px;
        background: #777;
      }
      @media (max-width: 567px) {
        padding-left: 0;
      }
      span {
        text-transform: uppercase;
        display: block;
      }
    }
  }
}
</style>
<template>
  <div class="pic"></div>
</template>

<script>
export default {
  setup(){
    

    return{

    }
  }

}
</script>

<style lang="scss">
.pic {
  position: relative;
  background-image: url("../assets/imgs/my-pic-black.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: calc(100vh - 80px);
  z-index: 11;
  border-radius: 30px;
  box-shadow: 0 0 7px rgb(0 0 0 / 90%);
  width: 400px;
  margin: auto;
}
@media (max-width: 991px) {
  .pic {
    border-radius: 50%;
    width: 270px;
    height: 270px;
    border: 4px solid #252525;
    margin: 0 auto 25px;
    background-position-y: -21px;
    background-position-x: 6px;
  }
}
</style>
<template>
  <Nav />
</template>
<script>
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
* {
  box-sizing: border-box;
  // scrollbar styling
  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #333333; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555555; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #333333; /* creates padding around scroll thumb */
  }
}
body,
html {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: $articleFont;
  background-color: $backgroundColor;
  color: $fontColor;
}
// selection color
::selection {
  background-color: #cfa144;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(54, 54, 54);
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  color: #fff;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 45px;
  @media (max-width: 992px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    font-size: 29px;
  }
}
h3 {
  font-size: 26px;
  @media (max-width: 578px) {
    font-size: 21px;
  }
}
h5 {
  font-size: 18px;
  @media (max-width: 992px) {
    font-size: 17px;
  }
}
.container {
  width: 90%;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 96%;
  }
}
</style>

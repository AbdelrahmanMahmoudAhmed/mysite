<template>
  <ul class="nav">
    <li class="active">
      <router-link to="/" exact active-class="active">
        <q-icon name="home" />
      </router-link>
      
      <span> <router-link to="/" exact active-class="active">home </router-link></span>
    </li>
    <li>
      <router-link to="/about" exact active-class="active">
        <q-icon name="person" />
      </router-link>
      <span> <router-link to="/about" exact active-class="active">about </router-link></span>
    </li>
    <li>
      <router-link to="/portfolio" exact active-class="active">
        <q-icon name="business_center" />
      </router-link>
      <span> <router-link to="/portfolio" exact active-class="active">portfolio </router-link></span>
    </li>
    <li>
      <router-link to="/contact" exact active-class="active">
        <q-icon name="drafts" />
      </router-link>
      <span> <router-link to="/contact" exact active-class="active">contact </router-link></span>
    </li>
    <li>
      <router-link to="/blog" exact active-class="active">
        <q-icon name="forum" />
      </router-link>
      <span> <router-link to="/blog" exact active-class="active">blog </router-link></span>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss">
.nav {
  position: fixed;
  right: 30px;
  top: 220px;
  z-index: 999;
  @media (max-width: 991px) {
    right: unset;
    top: unset;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background-color: #2b2a2a;
    padding: 8px;
  }
  li {
    position: relative;
    &:hover {
      span {
        background-color: $mainColor;
        margin-right: 7px;
        padding-right: 23px;
        opacity: 1;
      }
      a {
        background-color: $mainColor;
      }
    }
    > a {
      width: 50px;
      height: 50px;
      list-style: none;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      margin: 20px 0;
      border-radius: 50%;
      background: #2b2a2a;
      cursor: pointer;
      font-size: 19px;
      @media (max-width: 992px) {
        background-color: #444;
        margin: 0;
        width: 45px;
        height: 45px;
      }
    }
    a.active {
      background-color: $mainColor;
    }
    span {
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      color: #fff;
      line-height: 50px;
      font-weight: 500;
      transition: all 0.3s;
      text-transform: uppercase;
      border-radius: 30px;
      height: 50px;
      margin: 0;
      a{
        padding: 0 25px 0 30px;
        border-radius: 30px;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    @media (max-width: 991px) {
      span {
        display: none;
      }
    }
  }
}
</style>
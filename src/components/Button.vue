<template>
  <button class="main-button">
    <span class="button-content">
      <slot name="content" />
    </span>
    <span class="button-icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main-button {
  overflow: hidden;
  display: inline-block;
  line-height: 1.4;
  border-radius: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  z-index: 1;
  padding: 16px 70px 16px 35px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: 1px solid $mainColor;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-out;
    background-color: $mainColor;
  }
  &:hover {
    &::before {
      transform: translateX(0%);
    }
  }
  .button-content {
    position: relative;
    a {
    }
  }
  .button-icon {
    position: absolute;
    right: -1px;
    top: -1px;
    bottom: 0;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    color: #fff;
    border-radius: 50%;
    background-color: $mainColor;
    font-weight: bold;
    i {
      font-size: 19px;
      font-weight: bold;
    }
  }
}
</style>
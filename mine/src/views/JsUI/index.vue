<template>
  <div id="Index">
    <router-link tag="button" to="/ButtonDemo">按钮</router-link>
    <router-link tag="button" to="/RadioDemo">单选按钮</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import JsButton from "../../components/Button/button";
export default {
  name: "Index",
  components: {
    JsButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/index.scss";
</style>
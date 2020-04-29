<template>
  <div id="Detail">
    <div class="mine">
      <router-link tag="div" to="/Index">
        <p>JsUI 💑*</p>
      </router-link>
      <router-link tag="div" to="/MonDemo1">
        <p>Mongoose 🌷*</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  created() {},
  methods: {
    t() {
      console.log("12");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/detail.scss";
</style>
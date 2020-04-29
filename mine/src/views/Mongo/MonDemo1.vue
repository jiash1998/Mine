<template>
  <div id="MonDemo">
    <js-button @click="insert" plain>插入10条数据</js-button>
  </div>
</template>

<script>
import axios from "axios";
import JsButton from "../../components/Button/button";
export default {
  name: "MonDemo",
  components: {
    JsButton
  },
  methods: {
    insert() {
      axios.get("/getData").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
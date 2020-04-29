<template>
  <div id="ButtonDemo">
    <js-button type="success" plain>成功按钮</js-button>
    <js-button type="primary" @click="t" plain>主要按钮</js-button>
    <js-button type="calm" @click="t" plain>平静按钮</js-button>
    <js-button type="danger" @click="t" plain>危险按钮</js-button>
    <br />
    <js-button type="success" @click="t">成功按钮</js-button>
    <js-button type="primary" @click="t">主要按钮</js-button>
    <js-button type="calm" @click="t">平静按钮</js-button>
    <js-button type="danger" @click="t">危险按钮</js-button>
    <br />
    <js-button type="success" disabled @click="t">成功按钮</js-button>
    <js-button type="primary" disabled @click="t">主要按钮</js-button>
    <js-button type="calm" disabled @click="t">平静按钮</js-button>
    <js-button type="danger" disabled @click="t">危险按钮</js-button>
    <br />
    <js-button type="success" @click="t">成功按钮</js-button>
    <js-button type="primary" size="small" @click="t">主要按钮</js-button>
    <js-button type="calm" size="mini" @click="t">平静按钮</js-button>
    <js-button type="danger" size="mini" @click="t">危险按钮</js-button>
  </div>
</template>

<script>
import JsButton from "../../../components/Button/button";
export default {
  name: "ButtonDemo",
  components: {
    JsButton
  },
  methods: {
    t() {
      console.log("123");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
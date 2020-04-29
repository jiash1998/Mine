<template>
  <!-- <div id="JsButton"> -->
  <button
    class="default"
    @click="handleClick"
    :type="nativeType"
    :class="[type, {'circle':circle,'disabled':disabled}, size,plain === true?'plain'+type:'']"
  >
    <slot></slot>
  </button>
  <!-- </div> -->
</template>

<script>
export default {
  name: "JsButton",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    plain: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  mounted() {},
  methods: {
    handleClick(evt) {
      if (this.disabled) {
        return;
      }
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/components/button.scss";
</style>
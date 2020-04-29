<template>
  <label class="js-radio">
    <span class="js-radio_input">
      <input type="radio" class="radio" />
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    value: String
  }
};
</script>

<style lang="scss">
@import "../../assets/css/components/radio.scss";
</style>
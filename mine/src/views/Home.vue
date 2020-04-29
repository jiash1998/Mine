<template>
  <div class="home">
    <div class="head">
      <p>🌠</p>
    </div>
    <div class="body">
      <div class="mine">
        <img alt="Vue logo" src="../assets/img/believe.jpg" />
        <div class="introduction">
          <p>甲 生 ✞</p>
          <p>
            Believe in the fu<router-link tag="span" to="/Detail">🌟</router-link>ure
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="sass">
@import '../assets/css/home.scss';
</style>

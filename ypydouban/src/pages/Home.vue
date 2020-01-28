<template>
  <div class="homeBox">
    <!--  -->

    <!--  -->
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      window.console.log(
        this.$store.dispatch({ type: "increment", amount: 10 })
      );
    }
  }
};
</script>
<style scoped>
.homeBox {
  height: 960px;
}
</style>
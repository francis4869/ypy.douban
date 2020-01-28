<template>
  <div>
    <input type="button" value="fdfdfd" @click="test" />
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      window.console.log(
        this.$store.dispatch({ type: "increment", amount: 10 })
      );
      // window.console.log(this.$store);
    }
  }
};
</script>
<style scoped>
</style>
<template>
  <div id="app">
    <div class="boxConten">
      <router-view />
    </div>
    <RouteComponent />
  </div>
</template>

<script>
import RouteComponent from "./components/RouteComponent.vue";

export default {
  name: "app",
  components: {
    RouteComponent
  }
};
</script>

<style>
@import '../public/static/css/index.css';
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.boxConten {
  flex: 1;
}
</style>

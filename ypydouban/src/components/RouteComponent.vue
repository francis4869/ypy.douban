<template>
  <div>
    <div class="box">
      <div v-for="item in name" :key="item.name" class="listRoute">
        <router-link class="aLink" :to="item.path" v-text="item.name" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: [
        {
          name: "首页",
          path: "/index"
        },
        {
          name: "套系",
          path: "/List"
        },
        {
          name: "摄影师",
          path: "/Pger"
        },
        {
          name: "客片",
          path: "/Video"
        },
        {
          name: "活动",
          path: "/Events"
        }
      ]
    };
  }
};
</script>
<style scoped>
.box {
  display: flex;
  line-height: 40px;
}
.listRoute {
  flex: 1;
  text-align: center;
}

.aLink {
  color: rgb(136, 136, 136);
  text-decoration: none;
}
</style>
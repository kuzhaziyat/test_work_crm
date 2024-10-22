<script lang="ts" setup>
  import { computed } from "vue";
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const layouts = {
    main: MainLayout,
  };

  const layout = computed(() => route.meta.layout);
</script>

<template>
  <component :is="layouts[layout]">
    <router-view />
  </component>
</template>

<style lang="scss">
  body {
    margin: 0;
  }

  @font-face {
    font-family: "PT-Root-UI_Regular";
    src: url("@/assets/fonts/PT-Root-UI_Regular.ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "PT-Root-UI_Bold";
    src: url("@/assets/fonts/PT-Root-UI_Bold.ttf");
    font-weight: 700;
  }

  #app {
    font-family: "PT-Root-UI_Regular", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #747474;
    font-size: 14px;
  }
  p {
    color: #404040;
  }
  b {
    font-family: "PT-Root-UI_Bold", serif;
    color: #404040;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: #747474;
  }
</style>

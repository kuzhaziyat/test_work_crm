<script lang="ts" setup>
  import MenuTop from "@/widgets/MenuTop.vue";
  import MenuSide from "@/widgets/MenuSide.vue";
  import { ref } from "vue";

  const isMenuOpen = ref(true);
</script>
<template>
  <div class="container">
    <MenuSide class="asside" :isOpen="isMenuOpen" @close="isMenuOpen = false" />
    <div class="container__view">
      <MenuTop class="main-header" :isOpen="isMenuOpen" @open="isMenuOpen = true" />
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
  }
  .container__view {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: calc(100% - 2em);
  }
</style>

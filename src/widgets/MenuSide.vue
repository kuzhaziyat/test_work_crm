<script lang="ts" setup>
  import { defineProps } from "vue";
  import menuUl from "@/components/menuUl.vue";

  const props = defineProps<{
    isOpen: boolean;
  }>();
  const emit = defineEmits(["close"]);
</script>
<template>
  <div class="content" :class="{ 'short-content': !isOpen }">
    <div class="navigation__logo">
      <router-link :to="{ name: 'home' }">
        <b v-if="isOpen"> SEO </b>
        <b v-else class="shortName"> S </b>
      </router-link>
      <img v-if="isOpen" :src="require(`@/assets/icons/arrowBackIcon.svg`)" @click="$emit('close')" />
    </div>
    <menuUl :is-open="isOpen" />
  </div>
</template>
<style scoped lang="scss">
  .content {
    width: 19.23vw;
    height: calc(100vh - 40px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-right: 1px solid #e5e5ea;
    & b {
      font-size: 30px;
    }
  }
  .navigation__logo {
    display: flex;
    justify-content: space-between;
    & img {
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        transition: 0.1s;
      }
      &:active {
        transform: scale(0.9);
        transition: 0.1s;
      }
    }
  }
  .short-content {
    width: min-content !important;
  }
  .shortName {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
  }
</style>

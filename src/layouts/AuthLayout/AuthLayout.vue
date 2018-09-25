<template>
  <base-layout name="auth">
    <the-header/>
    <router-view/>
  </base-layout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue';
import TheHeader from '@/components/TheHeader/TheHeader.vue';

export default {
  components: {
    BaseLayout,
    TheHeader,
  },
};
</script>

<style>
</style>

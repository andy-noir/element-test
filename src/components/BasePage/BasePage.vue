<template>
  <div
    :class="`page_${name}`"
    class="page"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.page {
  height: 100%;
  width: 100%;
}
</style>

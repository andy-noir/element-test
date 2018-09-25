<template>
  <div
    :class="`base-layout_${name}`"
    class="base-layout"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.base-layout {
  height: 100vh;
  width: 100%;
}
</style>

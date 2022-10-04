<template>
  <div class="d-flex align-items-center cursor-pointer expandable-title">
    <slot name="expand-icon">
      <div style="margin-right: 8px">
        <b-icon v-if="!expanded" icon="caret-right-fill" />
        <b-icon v-else icon="caret-down-fill" />
      </div>
    </slot>
    <div class="expandable-title__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    expanded: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped></style>

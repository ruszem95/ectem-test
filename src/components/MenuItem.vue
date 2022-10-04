<template>
  <div
    @click="onClick"
    class="menu-item cursor-pointer"
    :class="{ active: isActiveItem }"
  >
    <span style="margin-right: 4px">
      <b-icon icon="file-earmark-ruled" />
    </span>
    <span>{{ item.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryListItemMixin } from "@/mixins";

export default defineComponent({
  mixins: [categoryListItemMixin],
  computed: {
    isActiveItem(): boolean {
      return this.$store.state.activeMenuItemId === this.item.id;
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch("setActiveMenuItemId", this.item.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.menu-item {
  font-size: 14px;
  padding-left: 2em;
  margin-bottom: 0.25em;
  color: #000;

  &.active {
    font-weight: bold;
  }
}
</style>

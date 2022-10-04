<template>
  <div class="subcategory-item" :class="{ active: isActive }">
    <div @click="toggleActive">
      <expandable-title :expanded="isActive" class="subcategory-item__header">
        <template #title>
          <span style="margin-right: 4px">
            <b-icon icon="stack" />
          </span>
          <span>Level 2: {{ item.name }}</span>
        </template>
      </expandable-title>
    </div>
    <div v-show="isActive" class="subcategory-item__list">
      <menu-item v-for="i in item.children" :key="i.id" :item="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryListItemMixin } from "@/mixins";
import MenuItem from "@/components/MenuItem.vue";
import ExpandableTitle from "@/components/ExpandableTitle.vue";

export default defineComponent({
  components: { ExpandableTitle, MenuItem },
  mixins: [categoryListItemMixin],
});
</script>

<style lang="scss" scoped>
.subcategory-item {
  padding-left: 0.5em;
  margin-bottom: 0.5em;
  color: #666;
}
.subcategory-item__header > :deep(.expandable-title__title) {
  font-size: 16px;
  margin-bottom: 0.25em;
}
</style>

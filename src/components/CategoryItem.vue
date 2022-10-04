<template>
  <div class="category-item" :class="{ active: isActive }">
    <div @click="toggleActive">
      <expandable-title :expanded="isActive" class="category-item__header">
        <template #title>
          <span style="margin-right: 4px">
            <b-icon
              v-if="!isActive"
              icon="folder2"
              style="color: var(--yellow)"
            />
            <b-icon v-else icon="folder2-open" style="color: var(--yellow)" />
          </span>
          <span>Level 1: {{ item.name }}</span>
        </template>
      </expandable-title>
    </div>
    <div v-show="isActive" class="category-item__list">
      <subcategory-item v-for="i in item.children" :key="i.id" :item="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryListItemMixin } from "@/mixins";
import SubcategoryItem from "@/components/SubcategoryItem.vue";
import ExpandableTitle from "@/components/ExpandableTitle.vue";

export default defineComponent({
  components: { ExpandableTitle, SubcategoryItem },
  mixins: [categoryListItemMixin],
});
</script>

<style lang="scss" scoped>
.category-item__header {
  margin-bottom: 0.5em;
}
.category-item__header > :deep(.expandable-title__title) {
  font-size: 18px;
}
</style>

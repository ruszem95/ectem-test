<template>
  <div class="categories-list">
    <div class="categories-list__search">
      <b-form-input
        v-model="search"
        :debounce="150"
        placeholder="Поиск..."
        class="mb-2"
      />
    </div>
    <b-list-group class="categories-list__list">
      <b-list-group-item v-for="i in filteredItems" :key="i.id">
        <category-item :item="i" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CategoryItem from "@/components/CategoryItem.vue";
import { filterByName } from "@/data/helpers";
import { ICategoryListItemData } from "@/models";

export default defineComponent({
  components: { CategoryItem },
  props: {
    items: {
      type: Array as PropType<ICategoryListItemData[]>,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredItems(): ICategoryListItemData[] {
      if (!this.items) return [];

      function filterTreeItems(
        item: ICategoryListItemData,
        search: string
      ): boolean {
        if (filterByName(item, search)) {
          return true;
        }
        if (item.children) {
          let match = false;
          item.children.forEach((i) => {
            if (filterTreeItems(i, search)) {
              match = true;
            }
          });
          return match;
        }
        return false;
      }

      return this.items.filter((i) => filterTreeItems(i, this.search));
    },
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="trees-list">
    <template v-if="activeTreeList">
      <div class="trees-list__search">
        <b-form-input
          v-model="search"
          :debounce="150"
          placeholder="Поиск..."
          class="mb-2"
        />
      </div>
      <div class="trees-list__header">
        <h4>Title for {{ activeTreeList.name }}</h4>
      </div>
      <div class="trees-list__list">
        <template v-if="filteredItems.length">
          <tree-data
            v-for="(t, i) in filteredItems"
            :key="`tree-data-${activeTreeList.parentId}-${i}`"
            :tree-data="t"
          />
        </template>
        <span v-else>Нет данных</span>
      </div>
    </template>
    <div v-else-if="activeId && !activeTreeList">Нет данных</div>
    <div v-else>Выберите категорию</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TreeData from "@/components/TreeData.vue";
import { filterByName } from "@/data/helpers";

export default defineComponent({
  components: { TreeData },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    activeId() {
      return this.$store.state.activeMenuItemId;
    },
    activeTreeList() {
      return this.$store.getters.activeTreeList;
    },
    filteredItems() {
      if (!this.activeTreeList?.items) return [];

      type ItemType = {
        name: string;
        items?: ItemType[];
      };

      function filterItems(item: ItemType, search: string) {
        if (filterByName(item, search)) {
          return true;
        }
        if (item.items) {
          let match = false;
          item.items?.forEach((i) => {
            if (filterByName(i, search)) {
              match = true;
            }
          });
          return match;
        }
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return this.activeTreeList.items.filter((i) =>
        filterItems(i, this.search)
      );
    },
  },
});
</script>

<style lang="scss" scoped></style>

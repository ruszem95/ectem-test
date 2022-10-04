<template>
  <div class="tree-data">
    <div @click="expanded = !expanded">
      <expandable-title :expanded="expanded" class="category-item__header">
        <template #title>
          <span style="margin-right: 4px">
            <b-icon
              v-if="!expanded"
              icon="folder2"
              style="color: var(--yellow)"
            />
            <b-icon v-else icon="folder2-open" style="color: var(--yellow)" />
          </span>
          <span>Level 1: {{ treeData.name }}</span>
        </template>
      </expandable-title>
    </div>
    <div v-show="expanded">
      <tree-item
        v-for="(el, i) in treeData.items"
        :key="`tdi-${i}`"
        :item="el"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TreeItem from "@/components/TreeItem.vue";
import ExpandableTitle from "@/components/ExpandableTitle.vue";
import { TreeData } from "@/models";

export default defineComponent({
  components: { ExpandableTitle, TreeItem },
  data() {
    return {
      expanded: true,
    };
  },
  props: {
    treeData: Object as PropType<TreeData>,
  },
});
</script>

<style lang="scss" scoped>
.tree-data {
  margin-bottom: 16px;
}
</style>

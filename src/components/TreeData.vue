<template>
  <div class="tree-data">
    <div class="d-flex justify-content-between">
      <expandable-title
        @click.native="expanded = !expanded"
        :expanded="expanded"
        class="category-item__header"
      >
        <template #title>
          <span style="margin-right: 4px">
            <b-icon
              v-if="!expanded"
              icon="folder2"
              style="color: var(--yellow)"
            />
            <b-icon v-else icon="folder2-open" style="color: var(--yellow)" />
          </span>
          <span>{{ treeData.name }}</span>
        </template>
      </expandable-title>

      <b-form-select
        size="sm"
        style="max-width: 25%; font-size: 12px"
        :value="treeData.status"
        :options="statusOptions"
        @change="onStatusChanged"
      ></b-form-select>
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
import { TreeData, TreeDataStatus } from "@/models";

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
  computed: {
    statusOptions() {
      return Object.values(TreeDataStatus);
    },
  },
  methods: {
    onStatusChanged(status: string) {
      this.$store.dispatch("setTreeDataStatus", {
        data: this.treeData,
        status,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.tree-data {
  margin-bottom: 16px;
}
</style>

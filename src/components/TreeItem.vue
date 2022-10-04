<template>
  <div class="tree-data-item">
    <b-row class="align-items-center">
      <b-col sm="6">{{ item.name }}</b-col>
      <b-col sm="3">
        <template v-if="editMode">
          <b-input
            ref="inputRef"
            @keyup.enter="saveAndExitEditMode"
            @keyup.esc="toggleEditMode(false)"
            type="number"
            v-model="editValue"
            style="height: 32px; margin-left: -12px"
          />
        </template>
        <div v-else @click="toggleEditMode" style="line-height: 32px">
          {{ item.value }}
        </div>
      </b-col>
      <b-col sm="3">
        <template v-if="editMode">
          <div class="d-flex" style="gap: 8px">
            <b-icon
              class="icon-hover"
              icon="check-lg"
              @click="saveAndExitEditMode"
            />
            <b-icon
              class="icon-hover"
              icon="x-lg"
              @click="toggleEditMode(false)"
            />
          </div>
        </template>
        <template v-else>
          <b-icon
            class="icon-hover"
            icon="pencil-fill"
            @click="toggleEditMode"
          />
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TreeDataItem } from "@/models";

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as PropType<TreeDataItem>,
    },
  },
  data() {
    return {
      editMode: false,
      editValue: 0,
    };
  },
  methods: {
    toggleEditMode(val = true) {
      this.editMode = val;
      if (val) {
        this.editValue = this.item?.value || 0;
        this.$nextTick(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          this.$refs["inputRef"]?.$el.focus();
        });
      }
    },
    saveAndExitEditMode() {
      this.toggleEditMode(false);
      this.$store.dispatch("setTreeItemValue", {
        id: this.item.id,
        value: this.editValue,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.tree-data-item {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
</style>
